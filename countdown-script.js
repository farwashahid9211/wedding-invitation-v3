(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    // Set your target wedding date and time here (Format: "MM/DD/YYYY HH:MM:SS")
    const weddingDate = "12/30/2026 18:30:00"; // Dec 30, 2026 at 6:30 PM

    const countDown = new Date(weddingDate).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDown - now;

        // Calculate time units
        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Action when the wedding date is reached
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("headline").innerText = "It's the Wedding Day!";
            
            // Optional: Hide countdown numbers when finished
            const countdownEl = document.getElementById("countdown");
            if (countdownEl) countdownEl.style.display = "none";
        }
    }, 1000); // Set to 1000 so it updates smoothly every second
}());