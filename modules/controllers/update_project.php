<?php

require_once "../db/DatabaseService.php";
require_once "../db/Parser.php";

$post = Parser::post(false);

if ($post->is_new) {
    $sql = "
        INSERT INTO `projects` (`id`, 
                                `app_section`,
                                `title`, 
                                `type`,
                                `relation`, 
                                `date_start`, 
                                `date_end`, 
                                `site_link`,
                                `download_link`, 
                                `github`, 
                                `npm`, 
                                `description`,
                                `tools`, 
                                `skills`, 
                                `tags`) 
        VALUES ('$post->id',
                '$post->app_section',
                '$post->title',
                '$post->type',
                '$post->relation',
                '$post->date_start',
                '$post->date_end',
                '$post->site_link',
                '$post->download_link',
                '$post->github', 
                '$post->npm', 
                '$post->description',
                '$post->tools',
                '$post->skills',
                '$post->tags')
    ";
} else {
    $sql = "
        UPDATE `projects` 
        SET `app_section` = '$post->app_section', 
            `date_end` = '$post->date_end', 
            `date_start` = '$post->date_start', 
            `download_link` = '$post->download_link',
            `github` = '$post->github',
            `npm` = '$post->npm', 
            `relation` = '$post->relation', 
            `site_link` = '$post->site_link',
            `tags` = '$post->tags', 
            `title` = '$post->title', 
            `tools` = '$post->tools', 
            `type` = '$post->type' 
        WHERE `projects`.`id` = '$post->id'
    ";
}

$response = DatabaseService::instance()->voidSql($sql, ['projects']);

echo json_encode(['success' => $response]);