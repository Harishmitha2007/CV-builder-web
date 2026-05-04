document.addEventListener("DOMContentLoaded", function () {

    const resumeForm = document.getElementById("resumeForm");

    if (!resumeForm) return;

    resumeForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let skills = document.getElementById("skills").value;

        try {
            let response = await fetch("https://harishmithacv.infinityfreeapp.com/save.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    name,
                    email,
                    phone,
                    skills
                })
            });

            let data = await response.text();
            console.log("Server:", data);
            alert(data);

        } catch (err) {
            console.error("Network Error:", err);
            alert("Request failed (server not reachable)");
        }
    });

});
