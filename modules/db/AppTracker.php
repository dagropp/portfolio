<?php

require_once "DatabaseService.php";

class AppTracker
{
    private $table;
    private $connection;

    public function __construct()
    {
        $this->table = "app_tracker";
        $this->connection = DatabaseService::instance()->getConnection();
    }

    public static function instance(): AppTracker
    {
        return new AppTracker();
    }

    public function getEntry(string $ip_address): ?array
    {
        $sql = "SELECT * FROM `app_tracker` WHERE `ip_address` = '$ip_address'";
        $query = $this->connection->query($sql);
        return $query ? $query->fetch_assoc() : null;
    }

    public function addEntry(string $ip_address, string $session_id, string $pathname, string $action): bool
    {
        $sql = "
            INSERT INTO `app_tracker` (`id`, `ip_address`, `session_id`, `pathname`, `action`, `timestamp`) 
            VALUES (NULL, '$ip_address', '$session_id', '$pathname', '$action', CURRENT_TIME())
        ";
        $query = $this->connection->query($sql);
        return boolval($query);
    }
}