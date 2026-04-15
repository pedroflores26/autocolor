<?php
require_once __DIR__ . '/conexao.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$acao   = $_GET['acao']   ?? '';
$marca  = $_GET['marca']  ?? '';
$modelo = $_GET['modelo'] ?? '';
$ano    = $_GET['ano']    ?? '';

$pdo = getConexao();

try {



    switch ($acao) {

        // ====================================================
        // 🔵 LISTAR MARCAS
        // ====================================================
        case 'marcas':

            $stmt = $pdo->query("
                SELECT nome 
                FROM marcas 
                ORDER BY nome
            ");

            echo json_encode([
                'sucesso' => true,
                'dados' => $stmt->fetchAll(PDO::FETCH_COLUMN)
            ]);
        break;

        // ====================================================
        // 🔵 LISTAR MODELOS POR MARCA
        // ====================================================
        case 'modelos':

            $stmt = $pdo->prepare("
                SELECT m.nome
                FROM modelos m
                JOIN marcas ma ON m.marca_id = ma.id
                WHERE ma.nome = ?
                ORDER BY m.nome
            ");

            $stmt->execute([$marca]);

            echo json_encode([
                'sucesso' => true,
                'dados' => $stmt->fetchAll(PDO::FETCH_COLUMN)
            ]);
        break;

        // ====================================================
        // 🔵 LISTAR ANOS
        // ====================================================
        case 'anos':

            $stmt = $pdo->prepare("
                SELECT DISTINCT c.ano
                FROM cores c
                JOIN modelos m ON c.modelo_id = m.id
                JOIN marcas ma ON m.marca_id = ma.id
                WHERE ma.nome = ? AND m.nome = ?
                ORDER BY c.ano DESC
            ");

            $stmt->execute([$marca, $modelo]);

            echo json_encode([
                'sucesso' => true,
                'dados' => $stmt->fetchAll(PDO::FETCH_COLUMN)
            ]);
        break;


        case 'codigo':

    $codigo = $_GET['codigo'] ?? '';

    $stmt = $pdo->prepare("
        SELECT 
            nome AS cor,
            hex,
            tipo,
            marca,
            modelo,
            ano
        FROM cores
        WHERE codigo_fabrica = ?
    ");

    $stmt->execute([$codigo]);

    echo json_encode([
        'sucesso' => true,
        'dados' => $stmt->fetchAll(PDO::FETCH_ASSOC)
    ]);

break;
        // ====================================================
        // 🔵 BUSCAR CORES
        // ====================================================
        case 'cores':

            // 🔥 Query dinâmica (ano opcional)
            $sql = "
                SELECT 
                    c.nome AS cor,
                    c.hex,
                    c.tipo
                FROM cores c
                JOIN modelos m ON c.modelo_id = m.id
                JOIN marcas ma ON m.marca_id = ma.id
                WHERE ma.nome = ? AND m.nome = ?
            ";

            $params = [$marca, $modelo];

            if (!empty($ano)) {
                $sql .= " AND c.ano = ?";
                $params[] = $ano;
            }

            $sql .= " ORDER BY c.tipo, c.nome";

            $stmt = $pdo->prepare($sql);
            $stmt->execute($params);

            echo json_encode([
                'sucesso' => true,
                'dados' => $stmt->fetchAll(PDO::FETCH_ASSOC)
            ]);
        break;

        // ====================================================
        // 🔴 ERRO
        // ====================================================
        default:
            echo json_encode([
                'sucesso' => false,
                'erro' => 'Ação inválida'
            ]);
    }

    

} catch (Exception $e) {
    echo json_encode([
        'sucesso' => false,
        'erro' => $e->getMessage()
    ]);
}

