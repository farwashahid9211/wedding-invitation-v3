
        const doorContainer = document.getElementById('doorContainer');

        // Toggle open/close state on screen tap or click
        doorContainer.addEventListener('click', () => {
            doorContainer.classList.toggle('open');
            
            // Call your function here so clicking the door triggers the transition
            goToNextPage();
        });

        

        function goToNextPage() {
            // Add a bounce effect before navigating
            gsap.to('.tap-hint', {
                scale: 1.2,
                yoyo: true,
                repeat: 1,
                duration: 0.3,
                onComplete: () => {
                    // Change this URL to your next page
                    window.location.href = "content.html";
                    
                    // For demonstration, we'll just show an alert
                    
                }
            });
        }
   
        