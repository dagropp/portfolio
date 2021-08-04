<?php

class Parser
{
    public static function post(): array
    {
        return json_decode(file_get_contents("php://input"), true);
    }
}