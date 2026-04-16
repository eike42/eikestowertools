<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    echo json_encode(['success' => false, 'error' => 'No data received']);
    exit;
}

$file = 'user_entries.json';
$entries = [];
if (file_exists($file)) {
    $json = file_get_contents($file);
    $entries = json_decode($json, true) ?: [];
}
$entries[] = $data;
file_put_contents($file, json_encode($entries, JSON_PRETTY_PRINT));
echo json_encode(['success' => true]);
