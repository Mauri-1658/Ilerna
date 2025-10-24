<?php
// form.php (ejercicio 6)
// Si recibe 'centro' por GET: guarda la cookie 'centro' con TTL=60s y redirige a receptor.php

$ttl = 60; // segundos
if (isset($_GET['centro'])) {
    $valor = (string)$_GET['centro'];
    setcookie('centro', $valor, time() + $ttl, '/');
    header('Location: receptor.php');
    exit;
}

?>
