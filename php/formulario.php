<?php
// Obtener los datos del formulario
$from = $_POST['from'];
$to = $_POST['to'];
$quantity = $_POST['quantity'];
$contactEmail = $_POST['contactEmail'];
$aircraftType = $_POST['aircraftType'];

// Direcciones de correo electrónico a las que quieres enviar el formulario
$destinatarios = array(
    'emepe1591@gmail.com'
);

// Asunto del correo
$asunto = 'Nueva cotización por email';

// Construir el cuerpo del correo
$cuerpo = "Origen: $from\n";
$cuerpo .= "Destino: $to\n";
$cuerpo .= "Cantidad de pasajeros: $quantity\n";
$cuerpo .= "Email de contacto: $contactEmail\n";
$cuerpo .= "Tipo de Aeronave: $aircraftType\n";

// Encabezados para el correo
$headers = "From: Cotizador <$contactEmail>\r\n";
$headers .= "Reply-To: $contactEmail\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Envío del correo a cada destinatario
foreach ($destinatarios as $destinatario) {
    mail($destinatario, $asunto, $cuerpo, $headers);
}

// Redireccionar o mostrar un mensaje de éxito
header('Location: gracias.html'); // Redireccionar a una página de "Gracias" o similar
exit();
?>
