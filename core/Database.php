<?php
namespace Core;

use PDO;
use PDOException;

class Database {
    private static $instance = null;
    private $conn;

    private function __construct() {
        $config = require __DIR__ . '/../config/database.php';
        try {
            $this->conn = new PDO(
                "mysql:host={$config['host']};dbname={$config['dbname']};charset={$config['charset']}",
                $config['username'],
                $config['password']
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            die(json_encode([
                'status' => 'error',
                'message' => '数据库连接失败: ' . $e->getMessage()
            ]));
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->conn;
    }
}