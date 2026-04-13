/* ==========================================
   AutoColor — preview.js
   Busca foto real do carro via Wikipedia
   REST API e aplica sobreposição de cor
   usando CSS mix-blend-mode no <canvas>.
   ========================================== */

const WIKI_API = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

/* Cache para não repetir chamadas à API */
const imageCache = {};

/**
 * Busca a imagem principal do artigo da Wikipedia.
 * Retorna a URL da imagem original (alta resolução).
 *
 * @param {string} slug - Título do artigo (ex: "Fiat_Cronos")
 * @returns {Promise<string|null>}
 */
async function fetchWikiImage(slug) {
  if (imageCache[slug] !== undefined) return imageCache[slug];

  try {
    const res  = await fetch(WIKI_API + encodeURIComponent(slug));
    const data = await res.json();

    /* Prefere originalimage (maior resolução), fallback para thumbnail */
    const url = data?.originalimage?.source
             || data?.thumbnail?.source
             || null;

    imageCache[slug] = url;
    return url;
  } catch {
    imageCache[slug] = null;
    return null;
  }
}

/* ----------------------------------------
   Estado interno do preview
   ---------------------------------------- */
let previewImg   = null;  // HTMLImageElement com a foto do carro
let previewColor = null;  // { hex, name, type }
let blendMode    = 'color';
let overlayOpacity = 0.55;

/**
 * Inicializa / atualiza o preview ao selecionar um modelo.
 * Exibe um estado de carregamento enquanto busca a foto.
 *
 * @param {string} wikiSlug - Slug da Wikipedia do modelo
 */
async function loadCarPreview(wikiSlug) {
  const container  = document.getElementById('car-photo-wrap');
  const emptyState = document.getElementById('preview-empty');
  const loadState  = document.getElementById('preview-loading');
  const canvas     = document.getElementById('car-canvas');
  const opCtrl     = document.getElementById('opacity-ctrl');

  emptyState.style.display  = 'none';
  loadState.style.display   = 'flex';
  canvas.style.display      = 'none';

  const imgUrl = await fetchWikiImage(wikiSlug);

  loadState.style.display = 'none';

  if (!imgUrl) {
    emptyState.textContent = '⚠️ Foto não encontrada para este modelo.';
    emptyState.style.display = 'block';
    previewImg = null;
    return;
  }

  /* Carrega a imagem numa tag <img> para depois desenhar no canvas */
  const img = new Image();
  img.crossOrigin = 'anonymous';

  img.onload = () => {
    previewImg = img;
    canvas.style.display = 'block';
    opCtrl.style.display = 'flex';
    renderPreviewCanvas();
  };

  img.onerror = () => {
    emptyState.textContent = '⚠️ Não foi possível carregar a imagem.';
    emptyState.style.display = 'block';
    previewImg = null;
  };

  img.src = imgUrl;
}

/**
 * Renderiza a foto do carro no canvas com a cor selecionada aplicada.
 * Usa mix-blend-mode "color" para colorir o veículo de forma realista.
 */
function renderPreviewCanvas() {
  if (!previewImg) return;

  const canvas = document.getElementById('car-canvas');
  const wrap   = document.getElementById('car-photo-wrap');
  const ctx    = canvas.getContext('2d');

  /* Ajusta tamanho do canvas ao container */
  const maxW = wrap.clientWidth  || 700;
  const maxH = 440;
  const ratio = previewImg.naturalWidth / previewImg.naturalHeight;

  let w = maxW;
  let h = w / ratio;
  if (h > maxH) { h = maxH; w = h * ratio; }

  canvas.width  = Math.round(w);
  canvas.height = Math.round(h);

  /* Desenha a foto original */
  ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);

  /* Aplica cor se houver uma selecionada */
  if (previewColor) {
    ctx.globalAlpha              = overlayOpacity;
    ctx.globalCompositeOperation = blendMode;
    ctx.fillStyle                = previewColor.hex;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* Reseta para padrão */
    ctx.globalAlpha              = 1;
    ctx.globalCompositeOperation = 'source-over';
  }
}

/**
 * Atualiza a cor do overlay sem recarregar a foto.
 * Chamado ao clicar num swatch ou mudar os controles.
 *
 * @param {object} colorObj - { hex, name, type }
 */
function setPreviewColor(colorObj) {
  previewColor = colorObj;
  renderPreviewCanvas();
}

/**
 * Altera a opacidade do overlay.
 * @param {number} value - 0 a 100
 */
function setPreviewOpacity(value) {
  overlayOpacity = value / 100;
  document.getElementById('preview-opacity-val').textContent = value + '%';
  renderPreviewCanvas();
}

/**
 * Altera o blend mode e re-renderiza.
 * @param {string} mode - globalCompositeOperation
 * @param {HTMLElement} btn
 */
function setBlendMode(mode, btn) {
  blendMode = mode;
  document.querySelectorAll('.blend-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPreviewCanvas();
}

/* Re-renderiza quando o container é redimensionado */
window.addEventListener('resize', () => {
  if (previewImg) renderPreviewCanvas();
});
