// --- СЛОВАРЬ ПЕРЕВОДОВ ---
const translations = {
    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_team: "Команда",
        nav_gallery: "Галерея",
        nav_contact: "Контакты",
        
        hero_welcome: "Добро пожаловать в",
        hero_subtitle: "Место, где живет счастливое детство",
        hero_btn: "Смотреть фото",
        
        about_title: "О нашем садике",
        about_desc: "<strong>NurAI</strong> — это не просто детский сад, это второй дом для вашего ребенка. Мы создали пространство, где каждый уголок наполнен любовью.",
        about_feat1: "Индивидуальный подход к каждому малышу",
        about_feat2: "Творческие студии и спорт",
        about_feat3: "Здоровое 5-разовое питание",
        
        staff_title: "Наши воспитатели",
        role_teacher: "Старший воспитатель",
        role_coach: "Воспитатель подготовительной группы",
        role_director: "Директор",
        role_logo: "Воспитатель старшей группы",
        role_coach_2: "Воспитатель",

        offer_title: "Для развития ребенка",
        off_1_title: "Арт-студия",
        off_1_desc: "Рисование и лепка каждый день.",
        off_2_title: "Подготовка к школе",
        off_2_desc: "Математика и логика в игре.",
        off_3_title: "Музыка",
        off_3_desc: "Пение и танцы.",
        off_4_title: "Робототехника",
        off_4_desc: "Инженерия для малышей.",
        
        gallery_title: "Фотогалерея",
        gallery_more: "Смотреть<br>все фото",
        insta_sub: "Подписаться",
        
        contact_tag: "Контакты",
        contact_header: "Мы будем рады<br>встрече с вами!",
        map_campus: "Наш адрес",
        map_city: "г. Алматы",
        cont_addr_label: "Наш адрес",
        cont_addr_val: "ул. Солнечная, 12, Алматы",
        cont_call_label: "Позвоните нам",
        cont_email_label: "Пишите нам",
        
        footer_copy: "Детский сад \"NurAI\". Все права защищены.",
        
        // Для галереи
        gallery_page_title: "Жизнь в NurAI",
        gallery_page_desc: "Яркие моменты наших будней и праздников",
        filter_all: "Все фото",
        filter_int: "Интерьер",
        filter_act: "Занятия",
        filter_food: "Питание",
        btn_download: "Скачать фото",
        link_home: "На Главную",
        gallery_page_sub_title: "Яркие моменты наших будней и праздников",

        // Новости
        news_title: "Последние события",
        news_all: "Все новости",
        month_may: "Май",
        month_apr: "Апр",
        month_mar: "Мар",
        read_more: "Подробнее",
        news_1_title: "Весенний утренник",
        news_1_desc: "Праздник весны прошел ярко! Дети пели песни и танцевали.",
        news_2_title: "Обновление меню",
        news_2_desc: "Добавили больше фруктов и полезных смузи в рацион.",
        news_3_title: "Поход в зоопарк",
        news_3_desc: "Старшая группа посетила городской зоопарк.",

        news_1_full: "Этот весенний праздник стал настоящим событием! Дети подготовили замечательные выступления: пели песни о маме, танцевали танец цветов и читали стихи. Родители были в восторге! Мы также организовали небольшую выставку детских рисунков на тему 'Весна пришла'.",
        news_2_full: "Мы заботимся о здоровье ваших детей, поэтому полностью пересмотрели наше меню. Теперь в рационе еще больше свежих сезонных фруктов, овощных салатов и полезных смузи без сахара. Все блюда готовятся на пару или запекаются.",
        news_3_full: "Поездка в зоопарк стала настоящим приключением! Ребята увидели жирафов, слонов и веселых обезьянок. Экскурсовод рассказал много интересного о жизни животных в дикой природе. Дети вернулись уставшие, но очень счастливые.",

        // Аттестация
        nav_attestation: "Аттестация",
        att_title: "Аттестация",
        att_desc: "Официальные документы и отчеты",
        btn_view: "Смотреть",
        doc_plan_25: "План развития на 2025-2026 год",
        doc_report_25: "Отчет о педагогической деятельности",
        doc_result_23: "Итоги аттестации 2023",
        doc_finance_23: "Финансовый отчет",
    },
    kz: {
        nav_home: "Басты бет",
        nav_about: "Біз туралы",
        nav_team: "Ұжым",
        nav_gallery: "Галерея",
        nav_contact: "Байланыс",
        
        hero_welcome: "Қош келдіңіз",
        hero_subtitle: "Бақытты балалық шақ мекені",
        hero_btn: "Суреттерді көру",
        
        about_title: "Біздің балабақша туралы",
        about_desc: "<strong>NurAI</strong> — бұл жай ғана балабақша емес, бұл балаңыздың екінші үйі. Біз сүйіспеншілікке толы кеңістік құрдық.",
        about_feat1: "Әр балаға жеке көзқарас",
        about_feat2: "Шығармашылық студиялар және спорт",
        about_feat3: "Денсаулыққа пайдалы 5 мезгіл тамақтану",
        
        staff_title: "Біздің тәрбиешілер",
        role_teacher: "Аға тәрбиеші",
        role_director: "Директор",
        role_coach: "Дайындық тобының тәрбиешісі",
        role_coach_2: "Тәрбиеші",
        role_logo: "Аға тобының тәрбиешісі",
        
        offer_title: "Баланы дамыту үшін",
        off_1_title: "Арт-студия",
        off_1_desc: "Күнделікті сурет салу және мүсіндеу.",
        off_2_title: "Мектепке дайындық",
        off_2_desc: "Ойын түріндегі математика және логика.",
        off_3_title: "Музыка",
        off_3_desc: "Ән айту және би.",
        off_4_title: "Робототехника",
        off_4_desc: "Бүлдіршіндерге арналған инженерия.",
        
        gallery_title: "Фотогалерея",
        gallery_more: "Барлық фотоны<br>көру",
        insta_sub: "Жазылу",
        
        contact_tag: "Байланыс",
        contact_header: "Сізбен кездесуге<br>қуаныштымыз!",
        map_campus: "Біздің мекенжайымыз",
        map_city: "Ақтөбе қ.",
        cont_addr_label: "Біздің мекенжай",
        cont_addr_val: "Күншуақ көш., 12, Алматы",
        cont_call_label: "Бізге қоңырау шалыңыз",
        cont_email_label: "Бізге жазыңыз",
        
        footer_copy: "\"NurAI\" балабақшасы. Барлық құқықтар қорғалған.",
        
        // Для галереи
        gallery_page_title: "NurAI өмірі",
        gallery_page_desc: "Күнделікті өмір мен мерекелердің жарқын сәттері",
        filter_all: "Барлығы",
        filter_int: "Интерьер",
        filter_act: "Сабақтар",
        filter_food: "Тамақтану",
        btn_download: "Жүктеп алу",
        link_home: "Басты бетке",
        gallery_page_sub_title: "Күнделікті өміріміз бен мерекелеріміздің ең қызықты сәттері",

        // Новости
        news_title: "Соңғы жаңалықтар",
        news_all: "Барлық жаңалықтар",
        month_may: "Мам",
        month_apr: "Сәу",
        month_mar: "Нау",
        read_more: "Толығырақ",
        news_1_title: "Көктем мерекесі",
        news_1_desc: "Көктем мерекесі жарқын өтті! Балалар ән айтып, би биледі.",
        news_2_title: "Мәзір жаңартуы",
        news_2_desc: "Рационға көбірек жемістер мен пайдалы смузи қосылды.",
        news_3_title: "Хайуанаттар бағына саяхат",
        news_3_desc: "Ересек топ қалалық хайуанаттар бағына барды.",

        /* В РАЗДЕЛ KZ: { ... } добавьте: */
        news_1_full: "Бұл көктем мерекесі нағыз оқиғаға айналды! Балалар тамаша өнер көрсетті: аналар туралы әндер айтты, гүлдер биін биледі және өлеңдер оқыды. Ата-аналар дән риза болды! Сонымен қатар біз 'Көктем келді' тақырыбында балалар суреттерінің көрмесін ұйымдастырдық.",
        news_2_full: "Біз балаларыңыздың денсаулығына қамқорлық жасаймыз, сондықтан мәзірімізді толығымен қайта қарадық. Енді рационда жаңа піскен маусымдық жемістер, көкөніс салаттары және қантсыз пайдалы смузилер көбірек. Барлық тағамдар буға пісіріледі.",
        news_3_full: "Хайуанаттар бағына саяхат нағыз қызыққа толы болды! Балалар керіктерді, пілдерді және көңілді маймылдарды көрді. Гид жануарлардың жабайы табиғаттағы өмірі туралы көптеген қызықты мәліметтер айтты. Балалар шаршап қайтса да, өте бақытты болды.",
        
        // Аттестация
        nav_attestation: "Аттестациялау",
        att_title: "Аттестациялау",
        att_desc: "Ресми құжаттар мен есептер",
        btn_view: "Көру",
        doc_plan_25: "2025-2026 жылға арналған даму жоспары",
        doc_report_25: "Педагогикалық қызмет туралы есеп",
        doc_result_23: "2023 жылғы аттестация қорытындысы",
        doc_finance_23: "Қаржылық есеп",
    }
};

// --- ФУНКЦИЯ СМЕНЫ ЯЗЫКА ---
function changeLanguage(lang) {
    // 1. Сохраняем выбор в память браузера
    localStorage.setItem('selectedLang', lang);

    // 2. Меняем тексты на странице
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Если внутри элемента есть HTML теги (например <strong>), используем innerHTML
            el.innerHTML = translations[lang][key];
        }
    });

    // 3. Меняем активность кнопок
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Находим кнопку с нужным языком и делаем активной
    const activeBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if(activeBtn) activeBtn.classList.add('active');
}

// --- ОСНОВНОЙ КОД (ЗАПУСК ПРИ ЗАГРУЗКЕ) ---
document.addEventListener('DOMContentLoaded', () => {
    
    // А) Устанавливаем язык при загрузке
    const savedLang = localStorage.getItem('selectedLang') || 'ru';
    changeLanguage(savedLang);

    // Б) МОБИЛЬНОЕ МЕНЮ
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

    // В) СЛАЙДЕР
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

    // Г) ГАЛЕРЕЯ
    const galleryGrid = document.querySelector('.gallery-grid-full');
    if (galleryGrid) {
        // Фильтры
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

        // Лайтбокс
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        
        // Получаем текущий текст кнопки "Скачать" на нужном языке
        const currentLang = localStorage.getItem('selectedLang') || 'ru';
        const downloadText = translations[currentLang]['btn_download'];

        lightbox.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-img" id="lightbox-img" src="">
            <a href="#" class="download-btn" download target="_blank">
                <i class="fas fa-download"></i> <span data-i18n="btn_download">${downloadText}</span>
            </a>
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');
        const downloadLink = lightbox.querySelector('.download-btn');
        const closeBtn = lightbox.querySelector('.close-lightbox');

        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    const src = img.src;
                    lightboxImg.src = src;
                    downloadLink.href = src;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    
                    // Обновляем текст кнопки внутри лайтбокса при открытии (вдруг язык сменили)
                    const langNow = localStorage.getItem('selectedLang') || 'ru';
                    const btnSpan = lightbox.querySelector('[data-i18n="btn_download"]');
                    if(btnSpan) btnSpan.textContent = translations[langNow]['btn_download'];
                }
            });
        });

        const closeGallery = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
        closeBtn.addEventListener('click', closeGallery);
        lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeGallery(); });
    }
    // Д) МОДАЛЬНОЕ ОКНО НОВОСТЕЙ
    const newsModal = document.getElementById('news-modal');
    const newsButtons = document.querySelectorAll('.read-more');
    const closeNewsBtn = document.querySelector('.close-news');

    if (newsModal && newsButtons.length > 0) {
        
        // Открытие
        newsButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault(); // Чтобы страница не прыгала вверх
                
                const newsId = btn.getAttribute('data-id');
                const currentLang = localStorage.getItem('selectedLang') || 'ru';
                
                // Находим карточку новости, в которой была нажата кнопка
                const card = btn.closest('.news-card');
                const imgSrc = card.querySelector('img').src;
                const day = card.querySelector('.day').innerText;
                const month = card.querySelector('.month').innerText; // Берем текущий месяц с карточки (он уже переведен)

                // Заполняем модальное окно данными
                document.getElementById('modal-news-img').src = imgSrc;
                document.getElementById('modal-date-day').innerText = day;
                document.getElementById('modal-date-month').innerText = month;
                
                // Берем заголовок и полный текст из словаря
                document.getElementById('modal-news-title').innerText = translations[currentLang][`news_${newsId}_title`];
                document.getElementById('modal-news-text').innerText = translations[currentLang][`news_${newsId}_full`];

                // Показываем окно
                newsModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Блок прокрутки
            });
        });

        // Закрытие
        const closeNews = () => {
            newsModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        closeNewsBtn.addEventListener('click', closeNews);
        
        // Закрытие по клику на фон
        newsModal.addEventListener('click', (e) => {
            if (e.target === newsModal) closeNews();
        });
    }
});