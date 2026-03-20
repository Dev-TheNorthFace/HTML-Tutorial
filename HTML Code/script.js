function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

function toggleTheme() {
    document.body.classList.toggle("light");
}

let currentSlide = 0;
const slides = document.getElementById("slides");

if (slides) {
    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slides.children.length) currentSlide = 0;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }, 3000);
}

function addTask() {
    const input = document.getElementById("taskInput");
    const li = document.createElement("li");

    li.textContent = input.value;
    li.onclick = () => li.remove();

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function appendCalc(val) {
    document.getElementById("calcDisplay").value += val;
}

function calculateResult() {
    try {
        document.getElementById("calcDisplay").value =
            eval(document.getElementById("calcDisplay").value);
    } catch {
        alert("Erreur");
    }
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    if (name.length < 2) {
        alert("Nom invalide");
    } else {
        alert("Envoyé !");
    }
});