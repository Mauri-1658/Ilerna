<?php

// Cargar conexión
require_once 'config.php';

try {
	$pdo = new PDO($dsn, $db_user, $db_pass);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	// Mostrar error de conexión (útil en desarrollo)
	echo "Error en la conexión: " . $e->getMessage();
}