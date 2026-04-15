// ============================================================
// AutoColor — script.js (VERSÃO LIMPA E FUNCIONAL)
// ============================================================

const API = './api/buscar_cores.php';

// DOM
const selMarca     = document.getElementById('marca');
const selModelo    = document.getElementById('modelo');
const selAno       = document.getElementById('ano');
const btnBuscar    = document.getElementById('btn-buscar');
const secResultado = document.getElementById('resultado');
const gridCores    = document.getElementById('grid-cores');
const txtTitulo    = document.getElementById('titulo-resultado');
const txtContagem  = document.getElementById('contagem');
const loader       = document.getElementById('loader');
const msgErro      = document.getElementById('msg-erro');

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    carregarMarcas();

    selMarca.addEventListener('change', () => {
        resetarSelect(selModelo, 'Selecione o modelo');
        resetarSelect(selAno, 'Todas as épocas');
        ocultarResultado();

        if (selMarca.value) carregarModelos(selMarca.value);
    });

    selModelo.addEventListener('change', () => {
        resetarSelect(selAno, 'Todas as épocas');
        ocultarResultado();

        if (selModelo.value) carregarAnos(selMarca.value, selModelo.value);
    });

    btnBuscar.addEventListener('click', buscarCores);
});

// ============================================================
// CARREGAMENTO
// ============================================================

async function carregarMarcas() {
    try {
        const dados = await chamarAPI({ acao: 'marcas' });
        dados.forEach(marca => {
            selMarca.appendChild(criarOption(marca, marca));
        });
    } catch {
        mostrarErro('Erro ao carregar marcas');
    }
}

async function carregarModelos(marca) {
    selModelo.disabled = true;
    selModelo.innerHTML = '<option>Carregando...</option>';

    try {
        const dados = await chamarAPI({ acao: 'modelos', marca });

        const modelosSet = new Set();

        dados.forEach(item => {
            item.split(',').forEach(m => {
                modelosSet.add(m.trim());
            });
        });

        resetarSelect(selModelo, 'Selecione o modelo');

        [...modelosSet].sort().forEach(modelo => {
            selModelo.appendChild(criarOption(modelo, modelo));
        });

        selModelo.disabled = false;
    } catch {
        resetarSelect(selModelo, 'Erro ao carregar');
    }
}

async function carregarAnos(marca, modelo) {
    selAno.disabled = true;
    selAno.innerHTML = '<option>Carregando...</option>';

    try {
        const dados = await chamarAPI({ acao: 'anos', marca, modelo });

        resetarSelect(selAno, 'Todas as épocas');

        dados.forEach(ano => {
            selAno.appendChild(criarOption(ano, ano));
        });

        selAno.disabled = false;
    } catch {
        resetarSelect(selAno, 'Todas as épocas');
    }
}

// ============================================================
// BUSCA
// ============================================================

async function buscarCores() {
    if (!selMarca.value || !selModelo.value) {
        mostrarErro('Selecione marca e modelo');
        return;
    }

    mostrarLoader(true);

    const params = {
        acao: 'cores',
        marca: selMarca.value,
        modelo: selModelo.value
    };

    if (selAno.value) params.ano = selAno.value;

    try {
        const cores = await chamarAPI(params);
        renderizarCores(cores);
    } catch (e) {
        mostrarErro(e.message);
    } finally {
        mostrarLoader(false);
    }
}

// ============================================================
// RENDER
// ============================================================

function renderizarCores(cores) {
    gridCores.innerHTML = '';

    txtTitulo.textContent = `${selMarca.value} ${selModelo.value}`;
    txtContagem.textContent = `${cores.length} cores encontradas`;

    const grupos = agruparPorTipo(cores);

    for (const tipo in grupos) {
        const titulo = document.createElement('h3');
        titulo.textContent = tipo;
        gridCores.appendChild(titulo);

        const div = document.createElement('div');
        div.className = 'sub-grid';

        grupos[tipo].forEach(cor => {
            div.appendChild(criarCardCor(cor));
        });

        gridCores.appendChild(div);
    }

    secResultado.classList.remove('oculto');
}

function criarCardCor({ cor, hex, tipo }) {
    const card = document.createElement('div');
    card.className = 'card-cor';

    const textoCor = corTextoContraste(hex);

    card.innerHTML = `
        <div class="amostra" style="background:${hex}">
            <span style="color:${textoCor}">${hex}</span>
        </div>
        <div class="card-info">
            <b>${cor}</b>
            <small>${tipo}</small>
        </div>
    `;

    card.onclick = () => copiarHex(hex);

    return card;
}

// ============================================================
// UTILS
// ============================================================

function mostrarLoader(v) {
    loader.style.display = v ? 'block' : 'none';
}

function mostrarErro(msg) {
    msgErro.textContent = msg;
    msgErro.style.display = 'block';
    setTimeout(() => msgErro.style.display = 'none', 4000);
}

function ocultarResultado() {
    secResultado.classList.add('oculto');
}

function resetarSelect(sel, txt) {
    sel.innerHTML = `<option value="">${txt}</option>`;
}

function criarOption(v, t) {
    const o = document.createElement('option');
    o.value = v;
    o.textContent = t;
    return o;
}

function agruparPorTipo(cores) {
    return cores.reduce((acc, c) => {
        if (!acc[c.tipo]) acc[c.tipo] = [];
        acc[c.tipo].push(c);
        return acc;
    }, {});
}

function copiarHex(hex) {
    navigator.clipboard.writeText(hex);
    alert('HEX copiado: ' + hex);
}

function corTextoContraste(hex) {
    const r = parseInt(hex.substr(1,2),16);
    const g = parseInt(hex.substr(3,2),16);
    const b = parseInt(hex.substr(5,2),16);
    const l = (0.299*r + 0.587*g + 0.114*b)/255;
    return l > 0.5 ? '#000' : '#fff';
}

// ============================================================
// API
// ============================================================

async function chamarAPI(params) {
    const url = `${API}?${new URLSearchParams(params)}`;

    const res = await fetch(url);

    if (!res.ok) throw new Error('Erro no servidor');

    const json = await res.json();

    if (!json.sucesso) throw new Error(json.erro);

    return json.dados;
}