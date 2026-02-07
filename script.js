// Функция для открытия слайда
function openSlide(id) {
    const content = document.getElementById('modal-content');
    const modal = document.getElementById('modal');
    
    // Здесь мы будем хранить данные и Base64 картинки
    const data = {
        robotics: {
            title: "Роботизация производства",
            img64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...", // Сюда вставим фото
            text: "Комплексные решения по автоматизации сварочных, окрасочных и сборочных линий."
        },
        // ... другие разделы
    };

    const item = data[id];
    content.innerHTML = `
        <div class="container animate__animated animate__fadeIn">
            <h1 style="color: #ff4f12; font-size: 3rem;">${item.title}</h1>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px;">
                <div class="slide-text">
                    <p style="font-size: 1.2rem;">${item.text}</p>
                </div>
                <div class="slide-image">
                    <img src="${item.img64}" style="width: 100%; border-radius: 15px; box-shadow: 0 0 30px rgba(255,79,18,0.2);">
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeSlide() {
    document.getElementById('modal').classList.remove('visible');
    document.body.style.overflow = 'auto';
}
