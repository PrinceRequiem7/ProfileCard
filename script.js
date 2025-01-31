function updateUTCTime() {
    const now = new Date();
    
    // Get UTC hours, minutes, and seconds
    let hours = now.getUTCHours().toString().padStart(2, '0');
    let minutes = now.getUTCMinutes().toString().padStart(2, '0');
    let seconds = now.getUTCSeconds().toString().padStart(2, '0');

   
    // Format the time as HH:MM:SS (UTC)
    let utcTime = `${hours}:${minutes}:${seconds}`;

    // Update the element with data-testid="currentTimeUTC"
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = utcTime;
}

// Update time every second
setInterval(updateUTCTime, 1000);

// Initial call to display time immediately
updateUTCTime();



