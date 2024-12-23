<?php
// Database configuration
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "quizapp_db";

// Create database connection
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set charset to UTF8
$conn->set_charset("utf8mb4");

// Set timezone
date_default_timezone_set('Asia/Colombo');

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

?>
