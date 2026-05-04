document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("resumeForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let skills = document.getElementById("skills").value;

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "save.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onload = function () {
            alert(this.responseText);
            console.log(this.responseText);
        };

        xhr.send(
            "name=" + encodeURIComponent(name) +
            "&email=" + encodeURIComponent(email) +
            "&phone=" + encodeURIComponent(phone) +
            "&skills=" + encodeURIComponent(skills)
        );
    });

});
