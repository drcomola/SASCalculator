let simplifiedParams = { compensazione: 0, decompensazione: 0 };
let advancedParams = { val16: 0, val26: 0, val36: 0, val46: 0 };

function saveSimplified() {
  const compensazione = parseFloat(document.getElementById("compensazione").value);
  const decompensazione = parseFloat(document.getElementById("decompensazione").value);
  simplifiedParams = { compensazione, decompensazione };
  document.getElementById("result").innerText = `Semplificato Salvato: ${JSON.stringify(simplifiedParams)}`;
  const modal = bootstrap.Modal.getInstance(document.getElementById("simplifiedModal"));
  modal.hide();
}

function saveAdvanced() {
  const val16 = parseFloat(document.getElementById("val16").value) || 0;
  const val26 = parseFloat(document.getElementById("val26").value) || 0;
  const val36 = parseFloat(document.getElementById("val36").value) || 0;
  const val46 = parseFloat(document.getElementById("val46").value) || 0;

  advancedParams = { val16, val26, val36, val46 };
  const result = (val36 + val46) - (val16 + val26);
  document.getElementById("result").innerText = `Avanzato Salvato: ${JSON.stringify(advancedParams)}, Risultato: ${result}`;
  const modal = bootstrap.Modal.getInstance(document.getElementById("advancedModal"));
  modal.hide();
}
