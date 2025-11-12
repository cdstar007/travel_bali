<?php
namespace Core;

class Response {
    public static function success($data = null, $message = '操作成功') {
        http_response_code(200);
        return json_encode([
            'status' => 'success',
            'message' => $message,
            'data' => $data
        ], JSON_UNESCAPED_UNICODE);
    }

    public static function error($message = '操作失败', $code = 400) {
        http_response_code($code);
        return json_encode([
            'status' => 'error',
            'message' => $message,
            'data' => null
        ], JSON_UNESCAPED_UNICODE);
    }
}