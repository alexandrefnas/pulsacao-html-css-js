// Metronomo Digital (Incremento)
let metronomeInterval;
let playMetronomo = false;
let audio2 = new Audio("../audios/hickory.mp3");
let somAtivo = false;
let divisaoativa = false;

// Função para calcular o intervalo em milissegundos
function calculateInterval(bpm) {
    return 60000 / bpm; // Intervalo em milissegundos
}

document.getElementById("som").addEventListener("click", () => {
    if (somAtivo) somAtivo = false
    else somAtivo = true
});

document.getElementById("divisao").addEventListener("click", () => {
    if (divisaoativa) divisaoativa = false
    else divisaoativa = true
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
            if (somAtivo)audio2.play();

            // Muda a cor do círculo central para vermelho e depois para verde
            document.getElementById("central").style.backgroundColor = "#ADFF2F";

            // Atraso para voltar a cor para verde após meio tempo de intervalo (metade da batida)
            setTimeout(() => {
                document.getElementById("central").style.backgroundColor = "#FFFFFF";
            }, interval / 2); // Meio do intervalo para voltar ao verde

            // Ciclo para fazer os círculos menores mudarem de cor
            changeColorOfCircles(quarterInterval);

        }, interval);

        document.getElementById("bpm").disabled = true;
    } else {
        playMetronomo = false;
        clearInterval(metronomeInterval);
        document.getElementById("central").style.backgroundColor = "#FFFFFF"; 
        document.getElementById("bpm").disabled = false;
    }
});


// Função para fazer os círculos menores mudarem de cor
function changeColorOfCircles(quarterInterval) {
    if(!divisaoativa) return
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        // Cada círculo vai mudar de cor para vermelho durante seu tempo de "piscada"
        setTimeout(() => {
            circle.style.backgroundColor = "#FF0000"; // Torna o círculo vermelho
        }, index * quarterInterval); // Sequencial para cada círculo

        // Depois do tempo do quarto intervalo, volta a cor original
        setTimeout(() => {
            // circle.style.backgroundColor = "#3498db"; // Torna o círculo azul novamente
            circle.style.backgroundColor = "#FFFFFF";
        }, (index + 1) * quarterInterval);
    });
}
