document.addEventListener('DOMContentLoaded', function () {
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "us",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        separateDialCode: true
    });

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = phoneInput.getNumber();
        const howDidYouHear = document.getElementById('howDidYouHear').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!firstName || !lastName || !email || !phone || !howDidYouHear) {
            alert("Please fill out all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phoneInput.isValidNumber()) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Form submission with Web3forms
        const formData = new FormData(contactForm);
        formData.append('phone', phone);  // Adding the formatted phone number to the form data

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Form submitted successfully!");
            } else {
                alert("Failed to submit form. Please try again later.");
            }
        })
        .catch(error => {
            alert("An error occurred while submitting the form. Please try again later.");
        });

    });

    phoneInputField.addEventListener('countrychange', function() {
        const selectedCountryData = phoneInput.getSelectedCountryData();
        phoneInputField.value = `+${selectedCountryData.dialCode} ${phoneInputField.value.replace(/^\+\d+\s*/, '')}`;
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
