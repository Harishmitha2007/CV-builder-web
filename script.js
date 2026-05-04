document.addEventListener("DOMContentLoaded", function () {

    const resumeForm = document.getElementById("resumeForm");

    if (resumeForm) {
        resumeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let skills = document.getElementById("skills").value;

            if (!name || !email || !phone || !skills) {
                alert("Please fill all fields");
                return;
            }

            fetch("save.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&skills=${encodeURIComponent(skills)}`
            })
            .then(res => res.text())
            .then(data => {
                console.log(data);
                alert(data);
            })
            .catch(err => {
                console.log(err);
                alert("Request failed");
            });
        });
    }

});
