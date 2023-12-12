<?php
class Database
{
    private static $conn = null;
    private $table;
    private $query = "";
    public static function init($host, $dbname, $username, $password)
    {
        if (self::$conn == null) {
            self::$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        }
    }

    public function insert($table)
    {
        $this->table = htmlspecialchars(trim($table));
        $this->query = "INSERT INTO " . $this->table . "(";
        return $this;
    }
    public function fields($fields)
    {
        $elements = "";
        $field = "";
        for ($i = 0; $i < count($fields); $i++) {
            $field .= $fields[$i] . ",";
            $elements .= "?,";
        }
        $elements = trim($elements, ",");
        $field = trim($field, ",");
        if (strpos($this->query, "INSERT INTO") > -1) {
            $field .= ") VALUES(" . $elements . ")";
        }

        $this->query .= $field;
        return $this;
    }
    public function execute($data = null)
    {
        $conn = self::$conn;
        if ($data == null) {
        } else {
            if (strpos($this->query, "INSERT INTO") > -1) {
                self::$conn->prepare($this->query)->execute($data);
            }
        }
    }
}

Database::init("localhost", "madabooks", "root", "");
