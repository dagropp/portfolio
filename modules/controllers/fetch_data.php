<?php

require_once "../db/AppData.php";

$app_section = $_GET["app_section"] ?? null;
$data = AppData::getSectionData($app_section);

echo json_encode($data);
