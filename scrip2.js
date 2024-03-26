document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object to store the form data
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Display the form data (you can replace this with your desired saving mechanism)
        console.log(formData);

        // Clear the form after submission (optional)
        form.reset();
    });
});

// Adding an event litener for hamburger

document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".leftsection").style.visibility = "visible"
})

// Add an event listener for close button
document.querySelector(".cross").addEventListener("click", () => {
    var laptop = document.querySelector(".leftsection");
    var isMobile = window.matchMedia("(max-width: 1100px)").matches;
    if (isMobile) {
        laptop.style.visibility = 'hidden';
    } else {
        laptop.style.visibility = 'visible';
    }


    // document.querySelector(".leftsection").style.visibility = 'hidden'
    // document.querySelector(".leftsection").style.visibility = 'hidden'
})

    
