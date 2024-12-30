const tg = window.Telegram.WebApp;
tg.expand(); // Расширить приложение на весь экран

const form = document.getElementById('catalogForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    tg.sendData(JSON.stringify(data)); // Отправляем данные в Telegram Bot
});
