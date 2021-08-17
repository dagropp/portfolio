<?php

require_once "../db/DatabaseService.php";
require_once "../db/Parser.php";

$response = false;

if (isset($_FILES['code_file'])) {
    $code_file = $_FILES['code_file'];
    $name = $code_file['name'];
    $path = $_SERVER['DOCUMENT_ROOT'] . '/code_snippets';
    $relation = $_POST['relation'];
    $github = $_POST['github'];
    $description = $_POST['description'];

    $sql = "
    INSERT INTO `code_snippets` (`id`, `relation`, `name`, `github`, `description`)
    VALUES (NULL, '$relation', '$name', '$github', '$description')
    ";

    $didAddToDb = DatabaseService::instance()->voidSql($sql);
    $didWrite = move_uploaded_file($code_file['tmp_name'], "$path/$name");
    $response = $didAddToDb && $didWrite;
}

echo json_encode(['response' => $response, 'is_writable' => is_writable($_SERVER['DOCUMENT_ROOT'] . '/code_snippets')]);
