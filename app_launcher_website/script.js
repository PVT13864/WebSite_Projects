
function filterApps() {
    const search = document.getElementById("search").value.toLowerCase();
    const apps = document.querySelectorAll(".app-card");

    apps.forEach(app => {
        const text = app.textContent.toLowerCase();
        app.style.display = text.includes(search) ? "block" : "none";
    });
}
