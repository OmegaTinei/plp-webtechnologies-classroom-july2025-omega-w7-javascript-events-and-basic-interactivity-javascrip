document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------
    // Part 1 & 3: Mastering JavaScript - Form Validation and User Logic
    // ------------------------------------------------------------------

    // Select the form and result elements from the DOM
    const form = document.getElementById('bmi-form');
    const nameInput = document.getElementById('name');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultArea = document.getElementById('bmi-result-text');

    // Select error message elements
    const nameError = document.getElementById('name-error');
    const weightError = document.getElementById('weight-error');
    const heightError = document.getElementById('height-error');

    // Add an event listener to the form's submit event.
    // The 'e.preventDefault()' line prevents the page from reloading.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors
        nameError.textContent = '';
        weightError.textContent = '';
        heightError.textContent = '';
        resultArea.textContent = '';

        let isValid = true;

        // Validate Name
        const name = nameInput.value.trim();
        if (name === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        // Validate Weight
        const weight = parseFloat(weightInput.value);
        if (isNaN(weight) || weight <= 0) {
            weightError.textContent = 'Please enter a valid weight (kg).';
            isValid = false;
        }

        // Validate Height
        const height = parseFloat(heightInput.value);
        if (isNaN(height) || height <= 0) {
            heightError.textContent = 'Please enter a valid height (m).';
            isValid = false;
        }

        // If any validation failed, exit the function.
        if (!isValid) {
            return;
        }

        // --- Conditionals and Logical Operators ---
        // We use an 'if-else' statement to categorize the BMI result.
        const bmi = weight / (height * height);
        let bmiCategory = '';

        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = 'Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obesity';
        }

        // Display the result with the name and BMI category.
        resultArea.textContent = `${name}, your BMI is ${bmi.toFixed(2)}. This is considered: ${bmiCategory}.`;
        console.log(`BMI for ${name} is ${bmi.toFixed(2)}.`);
    });

    // ------------------------------------------------------------------
    // Part 2: Building Interactive Elements - Collapsible FAQ
    // ------------------------------------------------------------------

    
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Loop through each question to add a click event listener.
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Get the corresponding answer element.
            const answer = question.nextElementSibling;
            
            // Toggle the 'show' class to control the visibility of the answer.
            // This uses CSS transitions for a smooth open/close animation.
            answer.classList.toggle('show');
            question.classList.toggle('active');
        });
    });


    // ------------------------------------------------------------------
    // Part 3: JavaScript Loops - Embracing Repetition
    // ------------------------------------------------------------------

    // An array of key data principles.
    const dataPrinciples = [
        "Accuracy: Verifying data against source documents.",
        "Completeness: Ensuring all required fields are filled to avoid missing information.",
        "Timeliness: Data must be submitted and analyzed promptly to inform immediate action.",
        "Actionability: Transforming data into insights that lead to better health outcomes."
    ];

    // Select the unordered list element from the DOM.
    const principlesList = document.getElementById('principles-list');

    // Use a forEach loop to iterate over the dataPrinciples array.
    // This is an elegant way to handle arrays in JavaScript.
    if (principlesList) { // Added a check to prevent errors if the element doesn't exist
        dataPrinciples.forEach(principle => {
            // Create a new list item element for each principle.
            const listItem = document.createElement('li');
            // Set the text content of the list item.
            listItem.textContent = principle;
            // Append the new list item to the list in the HTML.
            principlesList.appendChild(listItem);
        });
    }
});
