<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar los datos del formulario
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name  = htmlspecialchars($_POST['last_name']);
    $email      = htmlspecialchars($_POST['email']);
    $message    = htmlspecialchars($_POST['message']);
    $token      = $_POST['token'] ?? '';

    // Verificar el token de reCAPTCHA
    $secret = getenv('RECAPTCHA_SECRET_KEY');
    if (!$secret || !$token) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Token de seguridad inválido."]);
        exit;
    }
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . urlencode($secret) . "&response=" . urlencode($token));
    $captchaData = json_decode($verifyResponse, true);
    if (!isset($captchaData['success']) || !$captchaData['success']) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Fallo la verificación reCAPTCHA."]);
        exit;
    }

    $to = "danielalbertorosso@gmail.com";
    $subject = "Este es el nuevo mensaje de contacto desde la pagina personal";
    $body = "Nombre: $first_name $last_name\nEmail: $email\n\nMensaje:\n$message";
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: danielalbertorosso@gmail.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "No se pudo enviar el correo."]);
    }
}
?>