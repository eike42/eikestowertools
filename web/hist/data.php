<?php
// filepath: c:\privat\tower\hist\data.php
header('Content-Type: application/json');
$file = 'towerHist.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $history = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $history[] = $input;
	copy($file, "old/"+time()+".json");
    file_put_contents($file, json_encode($history));
    echo json_encode(['ok'=>true]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        echo file_get_contents($file);
    } else {
        echo '[]';
    }
    exit;
}
?>