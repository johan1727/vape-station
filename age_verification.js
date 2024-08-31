document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("ageModal");
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");

    // Mostrar la ventana modal
    modal.style.display = "block";

    yesButton.addEventListener("click", function() {
        modal.style.display = "none";
        // Aquí podrías agregar lógica para recordar la decisión del usuario
    });

    noButton.addEventListener("click", function() {
        alert("Debes ser mayor de edad para ingresar a este sitio.");
        window.location.href = "https://www.google.com"; // Redirigir a otra página
    });
});
