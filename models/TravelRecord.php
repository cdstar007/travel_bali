<?php
namespace Models;

use Core\Database;
use PDO;

class TravelRecord {
    private $conn;
    private $table = 'travel_records';
    private $timeSlotTable = 'travel_time_slots';

    public function __construct() {
        $this->conn = Database::getInstance()->getConnection();
    }

    public function getByDate($date) {
        $query = "SELECT * FROM {$this->table} WHERE date = :date LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':date', $date);
        $stmt->execute();
        $record = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$record) {
            return null;
        }

        $slotQuery = "SELECT * FROM {$this->timeSlotTable} WHERE record_id = :record_id ORDER BY time";
        $slotStmt = $this->conn->prepare($slotQuery);
        $slotStmt->bindParam(':record_id', $record['id']);
        $slotStmt->execute();
        $record['time_slots'] = $slotStmt->fetchAll(PDO::FETCH_ASSOC);

        return $record;
    }

    public function save($data) {
        if (empty($data['date'])) {
            return false;
        }

        $date = $data['date'];
        $recordId = $this->getRecordIdByDate($date);

        try {
            $this->conn->beginTransaction();

            if ($recordId) {
                $query = "UPDATE {$this->table} SET 
                          hotel = :hotel,
                          breakfast = :breakfast,
                          lunch = :lunch,
                          dinner = :dinner,
                          attractions = :attractions,
                          updated_at = NOW()
                          WHERE id = :id";
                $stmt = $this->conn->prepare($query);
                $stmt->bindParam(':id', $recordId);
            } else {
                $query = "INSERT INTO {$this->table} (
                          date, hotel, breakfast, lunch, dinner, attractions, created_at, updated_at
                          ) VALUES (
                          :date, :hotel, :breakfast, :lunch, :dinner, :attractions, NOW(), NOW()
                          )";
                $stmt = $this->conn->prepare($query);
                $stmt->bindParam(':date', $date);
            }

            $stmt->bindParam(':hotel', $data['hotel'] ?? '');
            $stmt->bindParam(':breakfast', $data['breakfast'] ?? '');
            $stmt->bindParam(':lunch', $data['lunch'] ?? '');
            $stmt->bindParam(':dinner', $data['dinner'] ?? '');
            $stmt->bindParam(':attractions', $data['attractions'] ?? '');
            $stmt->execute();

            if (!$recordId) {
                $recordId = $this->conn->lastInsertId();
            }

            if (!empty($data['time_slots'])) {
                $deleteQuery = "DELETE FROM {$this->timeSlotTable} WHERE record_id = :record_id";
                $deleteStmt = $this->conn->prepare($deleteQuery);
                $deleteStmt->bindParam(':record_id', $recordId);
                $deleteStmt->execute();

                $insertSlotQuery = "INSERT INTO {$this->timeSlotTable} (
                                   record_id, time, content, created_at
                                   ) VALUES (
                                   :record_id, :time, :content, NOW()
                                   )";
                $slotStmt = $this->conn->prepare($insertSlotQuery);
                foreach ($data['time_slots'] as $slot) {
                    if (!empty($slot['time']) && !empty($slot['content'])) {
                        $slotStmt->bindParam(':record_id', $recordId);
                        $slotStmt->bindParam(':time', $slot['time']);
                        $slotStmt->bindParam(':content', $slot['content']);
                        $slotStmt->execute();
                    }
                }
            }

            $this->conn->commit();
            return true;
        } catch (\Exception $e) {
            $this->conn->rollBack();
            error_log('保存行程失败: ' . $e->getMessage());
            return false;
        }
    }

    private function getRecordIdByDate($date) {
        $query = "SELECT id FROM {$this->table} WHERE date = :date LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':date', $date);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result ? $result['id'] : null;
    }
}