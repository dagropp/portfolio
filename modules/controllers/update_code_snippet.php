<?php

require_once "../db/DatabaseService.php";
require_once "../db/Parser.php";

$response = false;

if (isset($_FILES['code_file'])) {
    $code_file = $_FILES['code_file'];
    $name = $code_file['name'];
    $path = '/portofolio/public/assets/code-snippets';
    $relation = $_POST['relation'];
    $github = $_POST['github'];

    $sql = "
    INSERT INTO `code_snippets` (`id`, `relation`, `name`, `github`)
    VALUES (NULL, '$relation', '$name', '$github')
    ";

    $query = DatabaseService::instance()->voidSql($sql);
    $write = file_put_contents("$path/$name", $code_file);
    $response = $query && $write > 0;
}

echo json_encode(['response' => $response]);
