document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("donateModal");
    const openButton = document.getElementById("openModal");
    const closeButton = document.getElementById("closeModal");

    if (!modal || !openButton || !closeButton) {
        console.error("Ошибка: один из элементов модального окна не найден.");
        return;
    }

    // Открытие модального окна
    openButton.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Закрытие при клике на кнопку "×"
    closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Закрытие при клике вне модального окна
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });

    // Закрытие по нажатию на клавишу Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            modal.classList.remove("show");
        }
    });
});
