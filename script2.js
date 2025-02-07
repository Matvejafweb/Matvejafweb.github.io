function showReason(element) {
    if (!element.classList.contains("expanded")) {
        element.classList.add("expanded");
        element.innerText = element.getAttribute("data-reason");
    } else {
        element.classList.remove("expanded");
        element.innerText = "💗";
    }
    // Проверяем, открылись ли все карточки
    let allOpened = document.querySelectorAll(".love-reason.expanded").length === document.querySelectorAll(".love-reason").length;
    let loveContainer = document.querySelector('.love-container')

    if (allOpened) {
        setTimeout(() => {
            loveContainer.style.display = 'none';
            document.body.innerHTML += '<div class="final-message">На самом деле все здесь не поместиться! ❤️</div>';
            
            setTimeout(() => {
                document.location = 'index3.html'
            }, 4000)

        }, 2000);
    }
}

