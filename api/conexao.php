<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'autocolor final');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHAR', 'utf8mb4');

function getConexao(): PDO
{
    static $pdo = null;

    if ($pdo !== null) {
        return $pdo;
    }

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=%s',
        DB_HOST,
        DB_NAME,
        DB_CHAR
    );

    $opcoes = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];

    try {
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $opcoes);
    } catch (PDOException $e) {
        http_response_code(500);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode([
            'sucesso' => false,
            'erro' => 'Falha na conexão com o banco de dados.'
        ]);
        exit;
    }

    return $pdo;
}

// 🔥 PADRÃO DE RESPOSTA
function responder($dados, $sucesso = true)
{
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'sucesso' => $sucesso,
        'dados' => $dados
    ]);
    exit;
}