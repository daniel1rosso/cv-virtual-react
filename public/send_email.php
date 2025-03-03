<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar los datos del formulario
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name  = htmlspecialchars($_POST['last_name']);
    $email      = htmlspecialchars($_POST['email']);
    $message    = htmlspecialchars($_POST['message']);

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