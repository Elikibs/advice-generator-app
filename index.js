async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        displayAdvice(data.slip.advice);
    } catch (error) {
        console.error('Error fetching advice:', error);
        displayAdvice('Oops! Something went wrong. Please try again.');
    }
}

function displayAdvice(advice) {
    const adviceContainer = document.getElementById('adviceContainer');
    const adviceText = document.getElementById('adviceText');
    adviceText.textContent = advice;
}
