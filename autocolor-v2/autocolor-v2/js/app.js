/* ==========================================
   AutoColor — app.js
   Lógica principal: seleção de veículo,
   cores e coordenação dos módulos.
   ========================================== */

window.selectedColor = null;

/* ---------- Seleção de Veículo ---------- */

function updateModels() {
  const brand    = document.getElementById('brand').value;
  const modelSel = document.getElementById('model');
  const yearSel  = document.getElementById('year');

  modelSel.innerHTML = '<option value="">Selecione o modelo</option>';
  yearSel.innerHTML  = '<option value="">Selecione o ano</option>';
  modelSel.disabled  = true;
  yearSel.disabled   = true;
  resetColorUI();

  if (!brand || !DB[brand]) return;

  Object.keys(DB[brand]).forEach(name => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = name;
    modelSel.appendChild(opt);
  });
  modelSel.disabled = false;
}

function updateYears() {
  const brand   = document.getElementById('brand').value;
  const model   = document.getElementById('model').value;
  const yearSel = document.getElementById('year');

  yearSel.innerHTML = '<option value="">Selecione o ano</option>';
  yearSel.disabled  = true;
  document.getElementById('colors-section').style.display = 'none';

  if (!brand || !model || !DB[brand][model]) return;

  DB[brand][model].years.forEach(y => {
    const opt = document.createElement('option');
    opt.value = opt.textContent = y;
    yearSel.appendChild(opt);
  });
  yearSel.disabled = false;
}

function loadColors() {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const year  = document.getElementById('year').value;
  if (!brand || !model || !year) return;

  const entry  = DB[brand][model];
  const colors = entry.colors;
  const grid   = document.getElementById('color-grid');
  grid.innerHTML = '';

  colors.forEach(c => {
    const sw = document.createElement('div');
    sw.className          = 'color-swatch';
    sw.style.background   = c.hex;
    sw.setAttribute('data-name', c.name.split(' ').slice(1).join(' ') || c.name);
    sw.title              = c.name;
    sw.onclick            = () => selectColor(c, sw);
    grid.appendChild(sw);
  });

  document.getElementById('colors-section').style.display = 'block';

  /* Info bar */
  document.getElementById('car-info-bar').style.display = 'flex';
  document.getElementById('info-brand').textContent = brand;
  document.getElementById('info-model').textContent = model;
  document.getElementById('info-year').textContent  = year;
  document.getElementById('info-count').textContent = colors.length + ' opções';

  /* Carrega a foto real do carro via Wikipedia */
  loadCarPreview(entry.wikiSlug);

  /* Seleciona a primeira cor automaticamente */
  selectColor(colors[0], grid.children[0]);
}

/* ---------- Seleção de Cor ---------- */

function selectColor(colorObj, swatchEl) {
  window.selectedColor = colorObj;

  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  swatchEl.classList.add('selected');

  document.getElementById('sel-dot').style.background = colorObj.hex;
  document.getElementById('sel-name').textContent     = colorObj.name;
  document.getElementById('sel-type').textContent     = colorObj.type;
  document.getElementById('selected-display').style.display = 'block';

  /* Atualiza preview da foto */
  setPreviewColor(colorObj);

  /* Re-aplica na câmera se houver foto capturada */
  if (capturedImageData) applyCameraColor();
}

/* ---------- Tabs ---------- */

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab').forEach(t  => t.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tabId).classList.add('active');
}

/* ---------- Helpers ---------- */

function resetColorUI() {
  window.selectedColor = null;
  document.getElementById('colors-section').style.display   = 'none';
  document.getElementById('selected-display').style.display = 'none';
  document.getElementById('car-info-bar').style.display     = 'none';
  document.getElementById('preview-empty').style.display    = 'flex';
  document.getElementById('preview-loading').style.display  = 'none';
  document.getElementById('car-canvas').style.display       = 'none';
  document.getElementById('opacity-ctrl').style.display     = 'none';
  document.getElementById('blend-ctrl').style.display       = 'none';
  /* Reseta preview */
  previewImg   = null;
  previewColor = null;
}
