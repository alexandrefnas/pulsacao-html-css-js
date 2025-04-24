// // Ajusta o tamanho dos círculos dependendo do tamanho do círculo central
// window.onload = function() {
//     const centralCircle = document.querySelector('.central');
//     const smallCircles = document.querySelectorAll('.circle:not(.central)');
    
//     // Tamanho do círculo central
//     const centralSize = centralCircle.offsetWidth;
    
//     // Define o tamanho dos círculos pequenos (1/4 do tamanho do círculo central)
//     smallCircles.forEach(circle => {
//       const smallSize = centralSize / 4;
//       circle.style.width = `${smallSize}px`;
//       circle.style.height = `${smallSize}px`;
//     });
//   };

// Metronomo Digital (Icremento)
let metronomeInterval;
let playMetronomo = false;
let audio2 = new Audio("./src/audios/hickory.mp3")

function calculateInterval(bpm) {
    return 60000 / bpm; // Intervalo em segundos
  }
  
document.getElementById("start").addEventListener("click", () => {
    if (!playMetronomo) {
        // console.log(playMetronomo);
        playMetronomo = true;
        const bpm = document.getElementById("bpm").value;
        const interval = calculateInterval(bpm);

        metronomeInterval = setInterval(() => {
            // Toca o som da batida
            audio2.currentTime = 0;
            audio2.play();

            // Muda a cor do indicador
            document.getElementById("central").style.backgroundColor = "#ff0000";
            setTimeout(() => {
                document.getElementById("central").style.backgroundColor = "#008000";
            }, interval / 2);
        }, interval);

        document.getElementById("bpm").disabled = true;
    }
    else {
        console.log(playMetronomo);
        playMetronomo = false;
        clearInterval(metronomeInterval);
        document.getElementById("central").style.backgroundColor = "#008000"; 
        document.getElementById("bpm").disabled = false;
    }
  
});