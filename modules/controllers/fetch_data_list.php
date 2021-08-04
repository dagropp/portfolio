<?php

require_once "../db/AppData.php";

$data = AppData::getSectionDataList();

echo json_encode($data);
