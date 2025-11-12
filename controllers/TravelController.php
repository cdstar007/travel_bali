<?php
namespace Controllers;

use Core\Response;
use Models\TravelRecord;

class TravelController {
    private $travelRecord;

    public function __construct() {
        $this->travelRecord = new TravelRecord();
    }

    public function getByDate($date) {
        if (empty($date) || !preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) {
            echo Response::error('日期格式错误，应为YYYY-MM-DD', 400);
            return;
        }

        $record = $this->travelRecord->getByDate($date);
        if ($record) {
            echo Response::success($record);
        } else {
            echo Response::success([
                'date' => $date,
                'hotel' => '',
                'breakfast' => '',
                'lunch' => '',
                'dinner' => '',
                'attractions' => '',
                'time_slots' => []
            ]);
        }
    }

    public function save() {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            echo Response::error('数据格式错误', 400);
            return;
        }

        if (empty($data['date'])) {
            echo Response::error('日期不能为空', 400);
            return;
        }

        $result = $this->travelRecord->save($data);
        if ($result) {
            echo Response::success(null, '行程保存成功');
        } else {
            echo Response::error('行程保存失败');
        }
    }
}