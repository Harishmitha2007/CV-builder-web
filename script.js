document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded");

    // 🌙 Theme Toggle
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // 🔐 Login Form Validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;

            if (email === "" || password === "") {
                document.getElementById("loginError").innerText = "Please fill all fields";
                e.preventDefault();
            }
        });
    }

    // 📝 Signup Form Validation
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            let name = document.getElementById("signupName").value;
            let email = document.getElementById("signupEmail").value;
            let password = document.getElementById("signupPassword").value;

            if (name === "" || email === "" || password === "") {
                document.getElementById("signupError").innerText = "Please fill all fields";
                e.preventDefault();
            }
        });
    }

    // 📄 Resume Form → SAVE TO DATABASE + LOCAL STORAGE
    const resumeForm = document.getElementById("resumeForm");
    if (resumeForm) {
        resumeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let skills = document.getElementById("skills").value;

fetch("https://harishmithascv.infinityfreeapp.com/save.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `name=${name}&email=${email}&phone=${phone}&skills=${skills}`
})

            if (name === "" || email === "" || phone === "") {
                alert("Please fill all fields");
                return;
            }

            // 🔥 Send data to PHP backend
            fetch("https://harishmithascv.infinityfreeapp.com/save.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `name=${name}&email=${email}&phone=${phone}`
            })
            .then(res => res.text())
            .then(data => {
                console.log("Server Response:", data);

                if (data.includes("Saved")) {
                    alert("Data saved successfully!");

                    // Save locally also
                    localStorage.setItem("resumeData", JSON.stringify({ name, email, phone }));

                    window.location.href = "resume.html";
                } else {
                    alert("Error: " + data);
                }
            })
            .catch(err => {
                console.error(err);
                alert("Server error");
            });
        });
    }

    // 📦 Load stored resume data
    const storedData = JSON.parse(localStorage.getItem("resumeData"));

    if (storedData) {
        const name = document.getElementById("rName");
        const email = document.getElementById("rEmail");
        const phone = document.getElementById("rPhone");
       

        if (name) name.innerText = storedData.name;
        if (email) email.innerText = storedData.email;
        if (phone) phone.innerText = storedData.phone;
    }

});

// 🔓 Modal functions
function openLogin() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";
}

function openSignup() {
    const modal = document.getElementById("signupModal");
    if (modal) modal.style.display = "flex";
}

function closeSignup() {
    const modal = document.getElementById("signupModal");
    if (modal) modal.style.display = "none";
}
