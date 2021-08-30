<?php

require_once "../db/AppData.php";

$data = AppData::getSectionData();

echo json_encode($data);
