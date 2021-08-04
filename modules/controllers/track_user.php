<?php

require_once "../db/DatabaseService.php";
require_once "../db/Parser.php";
require_once "../db/AppTracker.php";

$post = Parser::post();

$ip_address = $post["ip_address"];
$session_id = $post["session_id"];
$pathname = $post["pathname"];
$action = $post["action"] ?? null;
$add_entry = AppTracker::instance()->addEntry($ip_address, $session_id, $pathname, $action);
$result = ["success" => $add_entry, "entry" => AppTracker::instance()->getEntry($ip_address)];

echo json_encode($result);