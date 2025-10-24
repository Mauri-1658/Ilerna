<?php
// receptor.php (ejercicio 6)
// Comportamiento esperado:
// - form.php crea la cookie y redirige aquí.
// - Si la cookie 'centro' existe, la mostramos y la eliminamos para que la siguiente visita redirija al formulario.
// - Si NO existe, redirigimos a form.php.

// Si no existe la cookie, redirigimos al formulario
if (!isset($_COOKIE['centro'])) {
    header('Location: form.php');
    exit;
}

$valorCookie = $_COOKIE['centro'];

// Borrar la cookie estableciendo su expiración en el pasado
setcookie('centro', '', time() - 3600, '/');

?>
