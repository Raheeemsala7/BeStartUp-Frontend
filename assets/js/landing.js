var options = {
  strings: ["Business Planner", " Article Generator", "Content Improver", "Ad Creation", "Blog Content"],
  typeSpeed: 100,
  backSpeed: 0,
  backDelay: 1000,
  startDelay: 500,
  loop: true,
  showCursor: false,
  onStringTyped: function () {
    setTimeout(function () {
      document.getElementById('typed-output').style.opacity = '0';
      document.getElementById('typed-output').style.visibility = 'hidden';
    }, 1000);
  },
  preStringTyped: function () {
    document.getElementById('typed-output').style.opacity = '  1';
    document.getElementById('typed-output').style.visibility = ' visible';
  }
};

var typed = new Typed("#typed-output", options);


document.addEventListener("DOMContentLoaded", function () {
  let swiper;
  let swiper2;

  function initSwiper() {
    if (window.innerWidth <= 767) {
      if (!swiper) {
        swiper = new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          grabCursor: true,
          slidesPerView: 3,
          spaceBetween: 20,
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true); 
        swiper = null;
      }
    }


    swiper2 = new Swiper('#mySwiper', { 
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      grabCursor: true,
      spaceBetween: 20,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
  initSwiper();
  window.addEventListener('resize', initSwiper);
});

document.addEventListener("DOMContentLoaded", function () {
  const featuresOriginal = document.querySelector('.features');
  const featuresAlternate = document.querySelector('.features-alternate');

  function toggleFeatures() {
    if (window.innerWidth <= 767) {
      featuresOriginal.style.display = 'none ';
      featuresAlternate.style.display = 'flex'; 
    } else {
      featuresAlternate.style.display = 'none ';
      featuresOriginal.style.display = 'grid';
    }
    if (window.innerWidth <= 991) {
      document.querySelector(".section-cards .cards").style.display = 'none ';
    } else {
      document.querySelector(".section-cards .cards").style.display = 'grid';
      featuresAlternate.style.display = 'none ';
    }
  }
  toggleFeatures();

  window.addEventListener('resize', toggleFeatures);
});


function showSteps() {
  var button = document.getElementById('replaceButton');
  button.remove();

  var stepsContent = document.getElementById('stepsContent');
  stepsContent.style.display = 'block';
}

const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress');
const progressPercentage = document.querySelector('.percentage');

steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    steps.forEach(s => s.classList.remove('active'));

    step.classList.add('active');

    const percentage = (index + 1) * 20; // النسبة بناءً على ترتيب الخطوة
    progressBar.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;
  });
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const isOpen = answer.classList.contains("open");

  document.querySelectorAll(".info-card").forEach(ans => {
    ans.classList.remove("open");
  });
  document.querySelectorAll(".faq-question").forEach(q => {
    q.querySelector("span").innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M3 13.5625H24M13.5 3.0625V24.0625" stroke="#8646F4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;;
  });

  if (isOpen) {
    answer.classList.remove("open");
    element.querySelector(".icon").classList.remove("open");
    element.querySelector("span").innerHTML = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector" d="M3 13.5625H24M13.5 3.0625V24.0625" stroke="#8646F4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  } else {
    answer.classList.add("open");
    element.querySelector(".icon").classList.add("open");
  }
}


const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const prices = [document.getElementById("price1"), document.getElementById("price2"), document.getElementById("price3")];

monthlyBtn.addEventListener("click", () => {
  prices.forEach(price => {
    price.innerHTML = `$19<span>/month</span>`;
  });
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");
});

yearlyBtn.addEventListener("click", () => {
  prices.forEach(price => {
    price.innerHTML = `$199<span>/month</span>`;
  });
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
});





