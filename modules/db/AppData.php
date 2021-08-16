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
        $education = DatabaseService::instance()->runSql("SELECT `id`, `title`, `institution` FROM `education`");
        $experience = DatabaseService::instance()->runSql("SELECT `id`, `position` as `title`, `company` FROM `experience`");
        $projects = DatabaseService::instance()->runSql("SELECT `id`, `title` FROM `projects`");

        foreach ($education as $key => $item) {
            $education[$key]['title'] = $item['title'] . ', ' . $item['institution'];
            unset($education[$key]['institution']);
        }

        foreach ($experience as $key => $item) {
            $experience[$key]['title'] = $item['title'] . ', ' . $item['company'];
            unset($experience[$key]['company']);
        }

        return ['Education' => $education, 'Experience' => $experience, 'Projects' => $projects];
    }
}