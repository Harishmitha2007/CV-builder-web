document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded");

    // 🌙 Theme Toggle
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // 🔐 Login Form
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

    // 📝 Signup Form
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

    // 📄 Resume Form → SEND TO PHP + DATABASE
    const resumeForm = document.getElementById("resumeForm");

    if (resumeForm) {
        resumeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let skills = document.getElementById("skills").value;

            // ⚠️ Validation
            if (!name || !email || !phone || !skills) {
                alert("Please fill all fields");
                return;
            }

            fetch("https://harishmithacv.infinityfreeapp.com/save.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&skills=${encodeURIComponent(skills)}`
            })
            .then(res => res.text())
            .then(data => {
                console.log("Server Response:", data);

                alert(data);

                if (data.includes("Saved")) {
                    localStorage.setItem("resumeData", JSON.stringify({
                        name,
                        email,
                        phone,
                        skills
                    }));

                    window.location.href = "resume.html";
                }
            })
            .catch(err => {
                console.error("Error:", err);
                alert("Server error");
            });
        });
    }

    // 📦 Load resume data
    const storedData = JSON.parse(localStorage.getItem("resumeData"));

    if (storedData) {
        const name = document.getElementById("rName");
        const email = document.getElementById("rEmail");
        const phone = document.getElementById("rPhone");
        const skills = document.getElementById("rSkills");

        if (name) name.innerText = storedData.name;
        if (email) email.innerText = storedData.email;
        if (phone) phone.innerText = storedData.phone;
        if (skills) skills.innerText = storedData.skills;
    }

});

// 🔓 Modals
function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function openSignup() {
    document.getElementById("signupModal").style.display = "flex";
}

function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}
