<?php

require_once "../db/AppData.php";

$table = $_GET["table"];
$data = AppData::getTable($table);

echo json_encode($data);
