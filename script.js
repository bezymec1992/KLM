// open menu on mobile, toggle 'open' class on body when click on burger
const burger = document.querySelector('.burger');
const body = document.body;

burger.addEventListener('click', () => {
  body.classList.toggle('open');
});

// Remove 'open' class when clicking on a nav-link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', () => {
    body.classList.remove('open');
  });
});

const accordions = document.querySelectorAll(".accordion");

//accordions
accordions.forEach((item) => {
  item.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
      } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
});

//form
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const overlay = document.getElementById('overlay');

// Запрет прокрутки
function disableScroll() {
   document.body.style.overflow = 'hidden';
}

// Разрешить прокрутку
function enableScroll() {
  document.body.style.overflow = '';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Проверка имени
  if (!nameInput.value.trim()) {
    nameError.style.visibility = 'visible';
    valid = false;
  } else {
    nameError.style.visibility= 'hidden';
  }

  // Проверка email
  if (!emailInput.value.trim()) {
    emailError.style.visibility = 'visible';
    valid = false;
  } else {
    emailError.style.visibility = 'hidden';
  }

  // Если все поля заполнены, показать попап и затемнение
  if (valid) {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    disableScroll();
    form.reset();
  }
});

// Закрытие попапа
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  overlay.style.display = 'none';
  enableScroll();
});


//swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

