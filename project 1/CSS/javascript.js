document.addEventListener("DOMContentLoaded", function() {
    function addUpdate(title, content) {
        const updatesContainer = document.getElementById("updates-container");
        const updateElement = document.createElement("div");
        updateElement.classList.add("update");
        updateElement.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <small>Posted on: ${new Date().toLocaleString()}</small>
        `;
        updatesContainer.prepend(updateElement);
    }
    addUpdate("First Update", "This is the first newsroom update.");
});