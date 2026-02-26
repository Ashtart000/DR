const flatsRooms = document.querySelectorAll('.flats__rooms');

flatsRooms.forEach(room => {
    room.addEventListener('click', () => {
        const wrapper = room.nextElementSibling;

        // закриваємо всі інші
        document.querySelectorAll('.flats__wrapper').forEach(w => {
            if (w !== wrapper) w.classList.remove('active');
        });

        // закриваємо інші стрілки
        document.querySelectorAll('.flats__rooms').forEach(r => {
            if (r !== room) r.classList.remove('active');
        });

        // перемикаємо цей блок
        wrapper.classList.toggle('active');
        room.classList.toggle('active'); // додаємо клас для стрілки
    });
});


const modal = document.querySelector('.img-modal');
const modalImg = modal.querySelector('img');

// всі зображення квартир
const flatImages = document.querySelectorAll('.flats__item img');

flatImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';     // показуємо модалку
        modalImg.src = img.src;            // ставимо джерело картинки
    });
});

// закриття модалки при кліку на фон
modal.addEventListener('click', () => {
    modal.style.display = 'none';
});



const wrapper = document.querySelector('.location__img__wrapper');
const btnLeft = document.querySelector('.location__arrow--left');
const btnRight = document.querySelector('.location__arrow--right');

const totalItems = wrapper.children.length;
let currentIndex = 0;

btnRight.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});






