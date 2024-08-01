document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('timer');
    let timeLeft = 60;

    function updateTimer() {
        timerElement.textContent = `Time Remaining: ${timeLeft} seconds`;
        if (timeLeft > 0) {
            timeLeft -= 1;
            setTimeout(updateTimer, 1000);
        } else {
            submitQuiz();  // Automatically submit when time runs out
        }
    }

    function resetQuiz() {
        // Reset timer
        timeLeft = 60;
        timerElement.textContent = `Time Remaining: ${timeLeft} seconds`;
    
        // Optionally clear the selected answer or prepare for the next question
        document.getElementById('quizForm').reset();
    
        // Restart the timer
        updateTimer(); // This will start the countdown again
    }
    
    
    function submitQuiz() {
        const formData = new FormData(document.getElementById('quizForm'));
        fetch('/submit-answer', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            alert('Quiz submitted!');  // Display basic result or handle as needed
            console.log(result);
            resetQuiz();  // Reset the quiz for the next question or round
        })
        .catch(error => {
            console.error('Error submitting quiz:', error);
        });
    }
    

    updateTimer();  // Start the timer when the page loads
});
