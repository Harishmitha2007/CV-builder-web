document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("resumeForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("name", document.getElementById("name").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("phone", document.getElementById("phone").value);
        formData.append("skills", document.getElementById("skills").value);

    
    });

});
