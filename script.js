document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("resumeForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("name", document.getElementById("name").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("phone", document.getElementById("phone").value);
        formData.append("skills", document.getElementById("skills").value);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "save.php", true);

        xhr.onload = function () {
            alert(this.responseText);
        };

        xhr.onerror = function () {
            alert("Server unreachable");
        };

        xhr.send(formData);
    });

});
