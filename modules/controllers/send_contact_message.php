<?php

require_once "../db/DatabaseService.php";
require_once "../db/Parser.php";

$post = Parser::post(false);

$response = false;

$is_email = !empty($post->email);
$is_email_valid = !$is_email || filter_var($post->email, FILTER_VALIDATE_EMAIL);
$is_message = !empty($post->message);

if (!$is_email_valid) {
    $res_message = 'Email address is invalid';
} else if (!$is_email && !$is_message) {
    $res_message = 'Message body is empty';
} else {
    $sql = "INSERT INTO `contact_inbox` (`id`, `email`, `message`) VALUES (NULL, '$post->email', '$post->message')";
    $response = DatabaseService::instance()->voidSql($sql);
    $res_message = $response ? 'Successfully sent message' : 'Failed to send message';
}

echo json_encode(['success' => $response, 'res_message' => $res_message]);
