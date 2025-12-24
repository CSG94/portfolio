const  content = document.getElementById("content");
const links = document.querySelectorAll(".load-page");

async function loadPage(page) {
    try {
        const response = await fetch(page);
        const html = await response.text();
        content.innerHTML = html;
        content.scrollTop = 0;
    } catch (error) {
        content.innerHTML = "<p>Error al cargar el contenido</p>";
    }
}

// Click en enlaces
links.forEach(link => {
        link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        loadPage(page);
    });
});

// Cargar página inicial
loadPage("contenido/todo.html");

// Función para copiar email al portapapeles

function copiarEmail() {
    const email = "granadossanchezcristina@gmail.com";

    navigator.clipboard.writeText(email)
    .then(() => {
        alert("Email copiado al portapapeles ✔");
    })
    .catch(() => {
        alert("No se pudo copiar el email");
    });
}
