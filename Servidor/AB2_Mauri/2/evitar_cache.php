<?php
// Enviar cabeceras para evitar caché en navegadores y proxies
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Cache-Control: post-check=0, pre-check=0', false); // Para compatibilidad con HTTP/1.0 proxies
header('Pragma: no-cache');
header('Expires: Thu, 01 Jan 1970 00:00:00 GMT');

// Forzar tipo de contenido HTML
header('Content-Type: text/html; charset=utf-8');

// Contenido HTML con la hora actual para verificar que no se cachea
?>
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Evitar Caché</title>
	<style>
		body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
		.box { background: white; padding: 20px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 600px; margin: 40px auto; text-align: center; }
		.time { font-size: 1.25rem; color: #333; margin-top: 10px; }
		.hint { margin-top: 12px; color: #666; font-size: 0.9rem; }
	</style>
</head>
<body>
	<div class="box">
		<h1>Cabeceras para evitar caché enviadas</h1>
		<div class="time">Hora del servidor: <?php echo date('Y-m-d H:i:s'); ?></div>
		<div class="hint">Recarga la página varias veces y observa que la hora cambia (no se sirve desde caché).</div>
	</div>
</body>
</html>