document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded");

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

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

 
    const resumeForm = document.getElementById("resumeForm");
    if (resumeForm) {
        resumeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const data = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                skills: document.getElementById("skills").value
            };

            console.log("Saving Data:", data);

            localStorage.setItem("resumeData", JSON.stringify(data));

            window.location.href = "resume.html";
        });
    }

  
    const storedData = JSON.parse(localStorage.getItem("resumeData"));

    if (storedData) {
        const name = document.getElementById("rName");
        const email = document.getElementById("rEmail");
        const skills = document.getElementById("rSkills");

        if (name) name.innerText = storedData.name;
        if (email) email.innerText = storedData.email;
        if (skills) skills.innerText = storedData.skills;
    }

});

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
