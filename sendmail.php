<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = htmlspecialchars(trim($_POST['fullname'] ?? ''));
    $email    = htmlspecialchars(trim($_POST['email'] ?? ''));
    $subject  = htmlspecialchars(trim($_POST['subject'] ?? ''));
    $message  = htmlspecialchars(trim($_POST['message'] ?? ''));

    $to = "ssuryareddy2277@gmail.com"; // change to your email
    $mail_subject = "New Contact Form Submission: " . $subject;

    $body = "
    You have a new contact form submission:

    Name: $name
    Email: $email

    Message:
    $message
    ";

    $headers  = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $mail_subject, $body, $headers)) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "<script>alert('Failed to send message. Please try again later.'); window.history.back();</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
