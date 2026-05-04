document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("resumeForm");

    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let skills = document.getElementById("skills").value;

        try {
            let res = await fetch("https://harishmithacv.infinityfreeapp.com/save.php", {
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

            let data = await res.text();
            console.log(data);
            alert(data);

        } catch (err) {
            console.error("FAILED:", err);
            alert("Request failed: server not reachable");
        }
    });

});
