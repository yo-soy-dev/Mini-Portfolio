<?php header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required"]);
        exit;
    }
    $data = "Name: $name\nEmail: $email\nMessage: $message\n---\n";
    file_put_contents("messages.txt", $data, FILE_APPEND);
    echo json_encode(["status" => "success", "message" => "Message saved successfully"]);
    exit;
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}
