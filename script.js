
// CREATE PAGE
const form = document.getElementById("resumeForm");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let skills = [];
        document.querySelectorAll('input[name="skills"]:checked')
            .forEach(skill => skills.push(skill.value));

        let languages = [];
        document.querySelectorAll('input[name="languages"]:checked')
            .forEach(lang => languages.push(lang.value));

        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("phone", document.getElementById("phone").value);
        localStorage.setItem("objective", document.getElementById("objective").value);

        localStorage.setItem("skills", skills.join(", "));
        localStorage.setItem("languages", languages.join(", "));

        localStorage.setItem("company", document.getElementById("company").value);
        localStorage.setItem("role", document.getElementById("role").value);
        localStorage.setItem("mode", document.getElementById("mode").value);
        localStorage.setItem("duration", document.getElementById("duration").value);

        localStorage.setItem("certifications", document.getElementById("certifications").value);

        localStorage.setItem("github", document.getElementById("github").value);
        localStorage.setItem("linkedin", document.getElementById("linkedin").value);
        localStorage.setItem("leetcode", document.getElementById("leetcode").value);
        localStorage.setItem("hackerrank", document.getElementById("hackerrank").value);

        window.location.href = "resume.html";

    });

}

// RESUME PAGE
if(document.getElementById("rName")){

    document.getElementById("rName").textContent =
        localStorage.getItem("name");

    document.getElementById("rEmail").textContent =
        localStorage.getItem("email");

    document.getElementById("rPhone").textContent =
        localStorage.getItem("phone");

    document.getElementById("rObjective").textContent =
        localStorage.getItem("objective");

    document.getElementById("rLanguages").textContent =
        localStorage.getItem("languages");

    document.getElementById("rSkills").textContent =
        localStorage.getItem("skills");

    document.getElementById("rCompany").textContent =
        localStorage.getItem("company");

    document.getElementById("rRole").textContent =
        localStorage.getItem("role");

    document.getElementById("rMode").textContent =
        localStorage.getItem("mode");

    document.getElementById("rDuration").textContent =
        localStorage.getItem("duration");

    document.getElementById("rCertificates").textContent =
        localStorage.getItem("certifications");

    document.getElementById("rGithub").textContent =
        localStorage.getItem("github");

    document.getElementById("rLinkedin").textContent =
        localStorage.getItem("linkedin");

    document.getElementById("rLeetcode").textContent =
        localStorage.getItem("leetcode");

    document.getElementById("rHackerrank").textContent =
        localStorage.getItem("hackerrank");

}
