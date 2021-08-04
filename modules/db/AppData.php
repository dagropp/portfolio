<?php

require_once "DatabaseService.php";

class AppData
{
    const APP_SECTIONS_TABLES = ["education", "projects", "experience", "other"];

    public static function getSectionData(string $app_section = null): array
    {
        $result = [];
        foreach (self::APP_SECTIONS_TABLES as $table) {
            $conditionKey = $app_section ? "app_section" : null;
            $result[$table] = DatabaseService::instance()->getData($table, $conditionKey, $app_section);
        }
        return $result;
    }

    public static function getTable(string $table)
    {
        return DatabaseService::instance()->runSql("SELECT * FROM `$table`");
    }

    public static function getSectionDataList(): array
    {
        $result = [];

        $education = DatabaseService::instance()->runSql("SELECT `id`, `title`, `institution` FROM `education`");
        $experience = DatabaseService::instance()->runSql("SELECT `id`, `position`, `company` FROM `experience`");

        foreach ($education as $entry) {
            array_push($result, [
                "section" => "Education",
                "id" => $entry["id"],
                "title" => $entry["title"] . ", " . $entry["institution"]
            ]);
        }

        foreach ($experience as $entry) {
            array_push($result, [
                "section" => "Experience",
                "id" => $entry["id"],
                "title" => $entry["position"] . ", " . $entry["company"]
            ]);
        }

        return $result;
    }
}