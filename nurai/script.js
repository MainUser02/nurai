document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. МОБИЛЬНОЕ МЕНЮ ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }

    // --- 2. СЛАЙДЕР (Главная) ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };
        setInterval(nextSlide, 5000);
    }

    // --- 3. ГАЛЕРЕЯ (Фильтры + Лайтбокс + Скачивание) ---
    const galleryGrid = document.querySelector('.gallery-grid-full');
    
    if (galleryGrid) {
        // А) Логика фильтров
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hide');
                        item.style.opacity = '0';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });

        // Б) Создание Лайтбокса с кнопкой скачивания
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        
        // Вставляем HTML: картинка, крестик И кнопка скачивания
        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img" id="lightbox-img" src="">
            <a href="#" class="download-btn" download target="_blank">
                <i class="fas fa-download"></i> Скачать фото
            </a>
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');
        const downloadLink = lightbox.querySelector('.download-btn'); // Находим нашу кнопку
        const closeBtn = lightbox.querySelector('.close-lightbox');

        // Открытие фото
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    const src = img.src;
                    
                    // 1. Ставим картинку в лайтбокс
                    lightboxImg.src = src;
                    
                    // 2. Обновляем ссылку для скачивания
                    downloadLink.href = src;
                    
                    // 3. Показываем лайтбокс
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Закрытие
        const closeGallery = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeBtn.addEventListener('click', closeGallery);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeGallery();
        });
    }
});