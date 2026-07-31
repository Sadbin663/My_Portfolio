

window.onload = function () {

    const btn = document.getElementById("theme-toggle");

    if (!btn) return;

    btn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            btn.textContent = "☀️";
        } else {
            btn.textContent = "🌙";
        }

    });

};