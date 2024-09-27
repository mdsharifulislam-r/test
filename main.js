const carvoCountries = ["KINGSTON", "OCHI", "MOBAY", "ST. ANN"];
let currentCountryIndex = 0;
const countryElement = document.getElementById('carvo-dynamic-country');

// Function to change the country name instantly, no typing effect
function rotateCountryNames() {
    currentCountryIndex = (currentCountryIndex + 1) % carvoCountries.length;  // Loop through the countries
    countryElement.textContent = carvoCountries[currentCountryIndex];  // Update the text content instantly
}

// Change the country name every 2 seconds (2000 milliseconds)
setInterval(rotateCountryNames, 2000);


// carousel logos
document.addEventListener("DOMContentLoaded", function () {
    const carvoLogos = [
        "https://carvocarshare.com/wp-content/uploads/2024/09/audi.png",
        "wp-content/uploads/2024/09/bmw.png",
        "wp-content/uploads/2024/09/toyota.png",
        "wp-content/uploads/2024/09/honda.png",
        "wp-content/uploads/2024/09/hyundai.png",
        "wp-content/uploads/2024/09/haval.png",
        "wp-content/uploads/2024/09/nissan.png"
    ];

    let carvoLogoIndex = 0; // Start from the first logo
    const carvoCarousel = document.getElementById('carvo-logo-carousel');

    // Function to rotate the logos
    function rotateCarvoLogos() {
        // Get all image elements in the carousel
        const carouselImages = carvoCarousel.querySelectorAll('img');

        // Loop through the 3 visible logos and update their src
        carouselImages.forEach((img, index) => {
            const logoIndex = (carvoLogoIndex + index) % carvoLogos.length;  // Get the correct logo index
            img.src = carvoLogos[logoIndex];  // Set the image source
            console.log(carvoLogos[logoIndex]); // Debug: Log the logo URL
        });

        // Increment the main index to start the next rotation
        carvoLogoIndex = (carvoLogoIndex + 1) % carvoLogos.length;  // Keep it within bounds of the array
    }

    // Start rotating the logos every 500 milliseconds (half second)
    setInterval(rotateCarvoLogos, 500);
});



// Calculator Functionality
function calculateEarnings() {
    const numCars = document.getElementById('numCars').value;
    const earningsPerCar = 1260000; // Average yearly earnings per car
    const totalEarnings = numCars * earningsPerCar;
    document.getElementById('result').textContent = `You could earn $${totalEarnings.toLocaleString()} JMD per year with ${numCars} car(s).`;
}

// Listen for "Enter" key press in the number of cars input field
document.getElementById('numCars').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        calculateEarnings();    // Call the calculator function when Enter is pressed
    }
})
;

//Signup Form
const steps = document.querySelectorAll('.step');
const stepIndicators = document.querySelectorAll('.step-indicator');
let currentStep = 0;

// Function to update step visibility and active indicator
function updateStep(step) {
    steps.forEach((s, index) => {
        s.classList.toggle('active', index === step);
        stepIndicators[index].classList.toggle('active', index === step);
    });
}

// Event listener for Next buttons
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep(currentStep);
        }
    });
});

// Event listener for Back buttons
document.querySelectorAll('.prev-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep(currentStep);
        }
    });
});

// Event listener for clicking on step indicators (circles)
stepIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentStep = index;
        updateStep(currentStep);
    });
});

// Form submission and message display
document.getElementById('hostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('signupMessage').textContent = 'Form successfully submitted!';
    // Optionally: Reset the form and go back to the first step
    this.reset();
    currentStep = 0;
    updateStep(currentStep);
});

//button appears when dates are selected
document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const pickupDate = document.getElementById('pickup-date');
    const returnDate = document.getElementById('return-date');
    const submitBtn = document.getElementById('submit-dates-btn');
    const divider = document.querySelector('.carvo-divider'); // Get the divider element

    // Function to check if both dates are selected
    function checkDates() {
        console.log("Pickup Date:", pickupDate.value, "Return Date:", returnDate.value); // Debugging

        if (pickupDate.value && returnDate.value) {
            submitBtn.classList.add('show'); // Show the button by adding the 'show' class
            divider.classList.add('fade-out'); // Fade out the divider
        } else {
            submitBtn.classList.remove('show'); // Hide the button if either date is missing
            divider.classList.remove('fade-out'); // Remove fade-out to make the divider visible again
        }
    }

    // Attach event listeners
    pickupDate.addEventListener('change', checkDates);
    returnDate.addEventListener('change', checkDates);
});

//Dark text for calendar on ios
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Flatpickr on the date inputs
    flatpickr("#pickup-date", {
        dateFormat: "Y-m-d", // Format you prefer
         disableMobile: "true",
        onChange: function(selectedDates, dateStr, instance) {
            // You can handle date change here if needed
        }
    });

    flatpickr("#return-date", {
        dateFormat: "Y-m-d", // Format you prefer
         disableMobile: "true",
        onChange: function(selectedDates, dateStr, instance) {
            // You can handle date change here if needed
        }
    });
});

// profile section

const profilemenu = document.querySelector(".button-nav")
const profilebutton = document.querySelector(".profilebutton")

profilebutton.addEventListener('click',function (){
  profilemenu.classList.toggle("active")
})