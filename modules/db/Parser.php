<?php

class Parser
{
    public static function post(bool $assoc = true)
    {
        return json_decode(file_get_contents("php://input"), $assoc);
    }
}