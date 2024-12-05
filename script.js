// Serverstatus prüfen
const serverIP = "ogcraftnet.playit.gg";
const serverIndicator = document.getElementById("server-indicator");
const serverStatusText = document.getElementById("server-status-text");

async function checkServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        if (data.online) {
            serverIndicator.style.backgroundColor = "var(--accent-color)";
            serverStatusText.textContent = `Online (${data.players.online} Spieler)`;
        } else {
            serverIndicator.style.backgroundColor = "var(--error-color)";
            serverStatusText.textContent = "Offline";
        }
    } catch (error) {
        serverIndicator.style.backgroundColor = "var(--error-color)";
        serverStatusText.textContent = "Status nicht verfügbar";
    }
}

// Automatisches Aktualisieren des Serverstatus
checkServerStatus();
setInterval(checkServerStatus, 60000); // Jede Minute prüfen
