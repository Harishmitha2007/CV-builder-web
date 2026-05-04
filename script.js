const resumeForm = document.getElementById("resumeForm");

if (resumeForm) {
    resumeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let skills = document.getElementById("skills").value;

        let formData = new URLSearchParams();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("skills", skills);

        fetch("https://harishmithacv.infinityfreeapp.com/save.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        })
        .then(res => res.text())
        .then(data => {
            console.log("Server:", data);
            alert(data);

            if (data.includes("Saved")) {
                window.location.href = "resume.html";
            }
        })
        .catch(err => {
            console.error(err);
            alert("Request failed");
        });
    });
}
