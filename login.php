<?php
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['full_name'];
            
            echo json_encode(['success' => true, 'redirect' => 'index.html', 'message' => 'Login successful! Redirecting...']);
        } else {
            echo json_encode(['success' => false, 'message' => 'The password you entered is incorrect. Please try again.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'We couldn\'t find an account with that email address. Please check your email or sign up for a new account.']);
    }
}
?>
