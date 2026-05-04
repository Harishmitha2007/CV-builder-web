document.addEventListener("DOMContentLoaded", function () {

    const resumeForm = document.getElementById("resumeForm");

    if (resumeForm) {
        resumeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let skills = document.getElementById("skills").value;

            fetch("https://harishmithacv.infinityfreeapp.com/save.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    name: name,
                    email: email,
                    phone: phone,
                    skills: skills
                })
            })
            .then(res => res.text())
            .then(data => {
                console.log(data);
                alert(data);
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Request failed");
            });
        });
    }

});
