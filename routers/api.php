<?php
use Core\Response;
use Controllers\TravelController;

$travelController = new TravelController();

$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];
$uriParts = explode('/', trim(parse_url($requestUri, PHP_URL_PATH), '/'));

switch ($requestMethod) {
    case 'GET':
        if (count($uriParts) >= 2 && $uriParts[0] === 'api' && $uriParts[1] === 'travel') {
            $date = $uriParts[2] ?? '';
            $travelController->getByDate($date);
        } else {
            echo Response::error('路由不存在', 404);
        }
        break;

    case 'POST':
        if (count($uriParts) >= 3 && $uriParts[0] === 'api' && $uriParts[1] === 'travel' && $uriParts[2] === 'save') {
            $travelController->save();
        } else {
            echo Response::error('路由不存在', 404);
        }
        break;

    case 'OPTIONS':
        http_response_code(200);
        break;

    default:
        echo Response::error('不支持的请求方法', 405);
        break;
}