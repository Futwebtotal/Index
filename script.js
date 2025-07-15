document.addEventListener('DOMContentLoaded', function() {
    const tickerContent = document.getElementById('ticker-content');
    
    // Simulación de datos para el Ticker
    const liveUpdates = [
        "Juventus 1 - 0 Milán (Min 45')",
        "¡GOL! Bayern anota. Bayern 2 - 1 Dortmund (Min 67')",
        "Tarjeta amarilla para PSG. (Min 75')",
        "Partido pausado: Ajax vs PSV (Min 81')"
    ];
    
    let updateIndex = 0;

    // Función para simular el Live Ticker
    function updateTicker() {
        if (tickerContent) {
            tickerContent.innerHTML = `<p>${liveUpdates[updateIndex]}</p>`;
            updateIndex = (updateIndex + 1) % liveUpdates.length;
        }
    }

    // Actualiza el ticker cada 4 segundos
    setInterval(updateTicker, 4000);
    
    // Llama a la función una vez al inicio
    updateTicker();
});
