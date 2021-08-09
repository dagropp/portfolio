<?php

require_once "../db/DatabaseService.php";
require_once "../db/Parser.php";

$post = Parser::post(false);

if ($post->is_new) {
    $sql = "";
} else {
    $sql = "
        UPDATE `projects` 
        SET `app_section` = '$post->app_section', 
            `title` = '$post->title', 
            `type` = '$post->type', 
            `relation` = '$post->relation',
            `date_start` = '$post->date_start',
            `date_end` = '$post->date_end', 
            `site_link` = '$post->site_link', 
            `download_link` = '$post->download_link',
            `github` = '$post->github', 
            `npm` = '$post->npm', 
            `description` = '$post->description', 
            `tools` = '$post->tools', 
            `tags` = '$post->tags' 
        WHERE `projects`.`id` = '$post->id'
    ";
}

$response = DatabaseService::instance()->voidSql($sql);

echo json_encode(['success' => $response]);
