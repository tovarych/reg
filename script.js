const tg = window.Telegram.WebApp;
tg.expand(); // Расширить приложение на весь экран

const form = document.getElementById('catalogForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};

    // Сбор данных формы в объект
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Добавляем в данные новый ключ "type" с значением "shop"
    data["type"] = "shop";

    // Преобразуем данные в JSON строку
    const jsonData = JSON.stringify(data);

    try {
        // Отправка данных в Telegram Bot
        tg.sendData(jsonData);
        console.log('Данные успешно отправлены:', jsonData);
    } catch (error) {
        // Обработка ошибок при отправке
        console.error('Ошибка при отправке данных:', error);
    }
});
