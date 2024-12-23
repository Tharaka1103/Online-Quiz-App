<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Basic info
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    
    // Personal details
    $dob = $_POST['dob'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];
    
    // Preferences
    $categories = isset($_POST['categories']) ? implode(',', $_POST['categories']) : '';
    $difficulty = $_POST['difficulty_level'];

    // Check if email already exists
    $checkEmail = "SELECT id FROM users WHERE email = ?";
    $stmt = $conn->prepare($checkEmail);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    
    if ($stmt->get_result()->num_rows > 0) {
        echo json_encode(['success' => false, 'message' => 'Email already registered']);
        exit;
    }

    // Insert new user
    $sql = "INSERT INTO users (full_name, email, password, dob, phone, country, preferred_categories, difficulty_level) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssss", $full_name, $email, $password, $dob, $phone, $country, $categories, $difficulty_level);
    
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Registration successful']);
        header('Location: login.html');
    } else {
        echo json_encode(['success' => false, 'message' => 'Registration failed']);
    }
}
?>
