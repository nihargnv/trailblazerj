console.log("It's Working")

burger = document.querySelector(".burger");
navbar = document.querySelector(".navList");
nav = document.querySelector(".navigation");

burger.addEventListener('click', () => {
    navbar.classList.toggle('navListOpen');
    nav.classList.toggle('vh-40');
});

let slideIndex = 0;
        const slides = document.querySelectorAll(".carousel-slide");

        function showSlide(index) {
            slides.forEach((slide) => {
                slide.style.transform = `translateX(-${index * 100}%)`;
            });
        }

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            showSlide(slideIndex);
        }

        showSlide(slideIndex);

        // Auto-change slides every 2 seconds
        setInterval(() => {
            nextSlide();
        }, 300770);

        