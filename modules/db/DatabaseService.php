<?php

class DatabaseService
{
    private const SERVER_NAME = "localhost";
    private const USER = "root";
    private const PASSWORD = "";
    private const DB_NAME = "main";
    private $connection;

    public function __construct()
    {
        $this->connection = self::setConnection();
    }

    public static function instance(): DatabaseService
    {
        return new DatabaseService();
    }

    /**
     * @param string $table
     * @return array
     */
    public function getData(string $table, string $conditionKey = null, string $conditionValue = null): array
    {
        $sql = "SELECT * FROM $table";
        if ($conditionKey && $conditionValue) $sql .= " WHERE `$conditionKey` = '$conditionValue'";
        $query = $this->connection->query($sql);
        return $query ? $query->fetch_all(MYSQLI_ASSOC) : [];
    }

    public function runSql(string $sql): array
    {
        $query = $this->connection->query($sql);
        return $query ? $query->fetch_all(MYSQLI_ASSOC) : [];
    }

    public function voidSql(string $sql, array $updateTables = null): bool
    {
        $query = $this->connection->query($sql);
        if ($query && $updateTables) $this->registerDbUpdate($updateTables);
        return boolval($query);
    }

    private function registerDbUpdate(array $tables) {
        $tables = join(',', $tables);
        $sql = "INSERT INTO `db_updates` (`id`, `timestamp`, `tables`) VALUES (NULL, CURRENT_TIMESTAMP, '$tables')";
        $this->connection->query($sql);
    }

    /**
     * @return mysqli
     */
    public function getConnection(): mysqli
    {
        return $this->connection;
    }

    /**
     * @return \mysqli
     * @throws Exception
     */
    private function setConnection(): mysqli
    {
        $connection = new mysqli(self::SERVER_NAME, self::USER, self::PASSWORD, self::DB_NAME);
        $connection->set_charset('utf8');
        if ($connection->connect_error) throw new Exception("MySQL failed to connect");
        return $connection;
    }
}