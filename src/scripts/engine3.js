// Metronomo Digital (Incremento)
let metronomeInterval;
let playMetronomo = false;
let audio2 = new Audio("../audios/hickory.mp3");
let somAtivo = false;
// let divisaoativa = false;
let subdivisaoAtiva = false;

// Função para calcular o intervalo em milissegundos
function calculateInterval(bpm) {
  return 60000 / bpm; // Intervalo em milissegundos
}

document.getElementById("som").addEventListener("click", () => {
  if (somAtivo) somAtivo = false;
  else somAtivo = true;
});

// document.getElementById("divisao").addEventListener("click", () => {
//   if (divisaoativa) divisaoativa = false;
//   else divisaoativa = true;
// });

document.getElementById("subdivisao").addEventListener("click", () => {
  subdivisaoAtiva = !subdivisaoAtiva;
});

document.getElementById("start").addEventListener("click", () => {
  if (!playMetronomo) {
    playMetronomo = true;
    const bpm = document.getElementById("bpm").value;
    const interval = calculateInterval(bpm);
    var num = 2;

    var quarterInterval = interval / num;

    metronomeInterval = setInterval(() => {
      // Toca o som da batida
      audio2.currentTime = 0;
      if (somAtivo) audio2.play();

      if (!subdivisaoAtiva) {
        document.getElementById("central").style.backgroundColor = "#ADFF2F";

        setTimeout(() => {
          document.getElementById("central").style.backgroundColor = "#FFFFFF";
        }, interval / 2);
      } else {
        document.getElementById("central").style.backgroundColor = "#FFFFFF";
      }

      // Ciclo para fazer os círculos menores mudarem de cor
      changeColorOfCircles(interval);
    }, interval);

    document.getElementById("bpm").disabled = true;
  } else {
    playMetronomo = false;
    clearInterval(metronomeInterval);
    document.getElementById("central").style.backgroundColor = "#FFFFFF";
    document.getElementById("bpm").disabled = false;
  }
});

function changeColorOfCircles(baseInterval) {
      if (!subdivisaoAtiva) return;
  const allCircles = document.querySelectorAll(".circle");

  let subdivisoes = 3;

//   if (subdivisaoAtiva) subdivisoes = 3;

  const interval = baseInterval / subdivisoes;

  for (let i = 0; i < subdivisoes; i++) {
    setTimeout(() => {
      const circle = allCircles[i];
      if (circle) {
        circle.style.backgroundColor = "#FF0000";
      }
    }, i * interval);

    setTimeout(() => {
      const circle = allCircles[i];
      if (circle) {
        circle.style.backgroundColor = "#FFFFFF";
      }
    }, (i + 1) * interval);
  }
}
