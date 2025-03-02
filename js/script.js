document.addEventListener("DOMContentLoaded", function () {
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("donateModal");

    if (openModal && closeModal && modal) {
        openModal.addEventListener("click", function () {
            modal.classList.add("show");
        });

        closeModal.addEventListener("click", function () {
            modal.classList.remove("show");
        });

        // Закрытие по клику вне окна
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("show");
            }
        });
    } else {
        console.error("Ошибка: Один из элементов модального окна не найден.");
    }
});
