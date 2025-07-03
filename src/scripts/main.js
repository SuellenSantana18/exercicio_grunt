document.addEventListener('DOMContentLoaded', function () {
  const valor = document.getElementById('valor');
  const de = document.getElementById('de');
  const para = document.getElementById('para');
  const resultado = document.getElementById('resultado');

  function converterTemperatura() {
    let v = parseFloat(valor.value);
    if (isNaN(v)) return resultado.textContent = '--';

    let r = v;

    if (de.value === 'celsius') {
      if (para.value === 'fahrenheit') r = v * 9 / 5 + 32;
      else if (para.value === 'kelvin') r = v + 273.15;
    } else if (de.value === 'fahrenheit') {
      if (para.value === 'celsius') r = (v - 32) * 5 / 9;
      else if (para.value === 'kelvin') r = (v - 32) * 5 / 9 + 273.15;
    } else if (de.value === 'kelvin') {
      if (para.value === 'celsius') r = v - 273.15;
      else if (para.value === 'fahrenheit') r = (v - 273.15) * 9 / 5 + 32;
    }

    resultado.textContent = r.toFixed(2);
  }

  valor.addEventListener('input', converterTemperatura);
  de.addEventListener('change', converterTemperatura);
  para.addEventListener('change', converterTemperatura);
});
