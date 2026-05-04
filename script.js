const resumeForm = document.getElementById("resumeForm");

if (resumeForm) {
    resumeForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let skills = document.getElementById("skills").value;

        try {
            let response = await fetch("save.php", {   // 🔥 IMPORTANT CHANGE
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
            console.log(data);
            alert(data);

        } catch (error) {
            console.error("Error:", error);
            alert("Request failed (network error)");
        }
    });
}
