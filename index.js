// Function to fetch advice from the Advice Slip API
async function getAdvice() {
    try {
        // Step 1: Make an asynchronous request to the API
        const response = await fetch('https://api.adviceslip.com/advice');

        // Step 2: Extract JSON data from the response
        const data = await response.json();

        // Step 3: Display the fetched advice on the web page
        displayAdvice(data.slip.advice);
    } catch (error) {
        // Handle errors during the fetch operation

        // Log the error to the console
        console.error('Error fetching advice:', error);

        // Display a fallback message on the web page
        displayAdvice('Oops! Something went wrong. Please try again.');
    }
}

// Function to display advice on the web page
function displayAdvice(advice) {
    // Step 1: Get the DOM elements representing the advice container and text
    const adviceContainer = document.getElementById('adviceContainer');
    const adviceText = document.getElementById('adviceText');

    // Step 2: Update the text content of the advice text element
    adviceText.textContent = advice;
}
