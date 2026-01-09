// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").innerText =
            "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});

// Interactive Feature 1: Change header color on click
document.querySelector("header").addEventListener("click", function () {
    this.style.backgroundColor = "#1abc9c";
});

// Interactive Feature 2: Highlight skills on hover
let skills = document.querySelectorAll("#skills li");
skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.color = "#e67e22";
    });
    skill.addEventListener("mouseout", () => {
        skill.style.color = "black";
    });
});

// Interactive Feature 3: Scroll alert
window.addEventListener("scroll", () => {
    console.log("User is scrolling the page");
});
