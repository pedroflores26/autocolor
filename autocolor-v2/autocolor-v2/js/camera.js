/* ==========================================
   AutoColor — camera.js
   Controle de câmera e sobreposição de cor
   via Canvas API
   ========================================== */

let stream            = null;
let capturedImageData = null;
let camBlendMode      = 'multiply';

/* ---------- Câmera ---------- */

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false,
    });

    const video = document.getElementById('video');
    video.srcObject     = stream;
    video.style.display = 'block';

    document.getElementById('cam-idle').style.display    = 'none';
    document.getElementById('btn-capture').style.display = 'inline-flex';
    document.getElementById('live-badge').style.display  = 'flex';
    document.getElementById('btn-start').style.display   = 'none';
    document.getElementById('btn-reset').style.display   = 'inline-flex';

  } catch (err) {
    alert('Não foi possível acessar a câmera.\nVerifique as permissões do navegador.\n\n' + err.message);
  }
}

function capturePhoto() {
  const video  = document.getElementById('video');
  const canvas = document.getElementById('canvas-output');

  canvas.width  = video.videoWidth  || 640;
  canvas.height = video.videoHeight || 480;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  capturedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  video.style.display          = 'none';
  canvas.style.display         = 'block';
  document.getElementById('live-badge').style.display   = 'none';
  document.getElementById('btn-capture').style.display  = 'none';
  document.getElementById('btn-apply').style.display    = 'inline-flex';
  document.getElementById('cam-controls').style.display = 'block';

  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
  if (window.selectedColor) applyCameraColor();
}

function applyCameraColor() {
  if (!capturedImageData) return;
  if (!window.selectedColor) { alert('Selecione uma cor primeiro!'); return; }

  const canvas  = document.getElementById('canvas-output');
  const ctx     = canvas.getContext('2d');
  const opVal   = parseInt(document.getElementById('cam-opacity').value) / 100;

  document.getElementById('cam-opacity-val').textContent = Math.round(opVal * 100) + '%';

  ctx.putImageData(capturedImageData, 0, 0);
  ctx.globalAlpha              = opVal;
  ctx.globalCompositeOperation = camBlendMode;
  ctx.fillStyle                = window.selectedColor.hex;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha              = 1;
  ctx.globalCompositeOperation = 'source-over';
}

function setCamBlend(mode, btn) {
  camBlendMode = mode;
  document.querySelectorAll('.cam-blend-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyCameraColor();
}

function resetCamera() {
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
  capturedImageData = null;

  document.getElementById('video').style.display          = 'none';
  document.getElementById('canvas-output').style.display  = 'none';
  document.getElementById('cam-idle').style.display       = 'block';
  document.getElementById('btn-capture').style.display    = 'none';
  document.getElementById('btn-apply').style.display      = 'none';
  document.getElementById('btn-reset').style.display      = 'none';
  document.getElementById('cam-controls').style.display   = 'none';
  document.getElementById('live-badge').style.display     = 'none';
  document.getElementById('btn-start').style.display      = 'inline-flex';
}
