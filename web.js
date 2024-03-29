// 로딩
window.addEventListener('load', function() {
  const loaderWrapper = document.getElementById('loader-wrapper');

  document.getElementById('left-panel').style.transform = 'translateX(-100%)';
  document.getElementById('right-panel').style.transform = 'translateX(100%)';

  setTimeout(() => {
      loaderWrapper.style.display = 'none';
  }, 800);
});

// 야간모드
let clickNum = 0;
function nightDayHandler() {
  clickNum++;
  if (clickNum % 2 === 1) {
    document.querySelector("body").style.background = "#111";
    document.querySelector(".carousel__nav").style.background = "#111";
    document.querySelector("#main_nav").style.background =
      "rgba(11, 11, 11, 0.2)";
    for (let p of document.querySelectorAll(
      "strong, h3, li, span, .carousel-item__title, .carousel-item__btn"
    )) {
      p.style.color = "white";
    }
    for (let p of document.querySelectorAll("section p")) {
      p.style.color = "#cacaca";
    }
    for (let p of document.querySelectorAll(".carousel-item__subtitle")) {
      p.style.color = "#bbb";
    }
    for (let p of document.querySelectorAll(".carousel-item")) {
      p.style.background = "#111";
    }
    for (let p of document.querySelectorAll(".pop_inner")) {
      p.style.background = "#222";
    }
    for (let p of document.querySelectorAll(".carousel__icon")) {
      p.style.fill = "#cacaca";
    }
    for (let p of document.querySelectorAll(".purpleTxt")) {
      p.style.color = "#8276f4";
    }
  } else if (clickNum % 2 === 0) {
    document.querySelector("body").style.background = "";
    document.querySelector("#main_nav").style.background = "";
    document.querySelector(".carousel__nav").style.background = "";
    for (let p of document.querySelectorAll(
      "strong, h3, li, span, a, p, .carousel-item__title, .carousel-item__btn, .carousel-item__subtitle"
    )) {
      p.style.color = "";
    }
    for (let p of document.querySelectorAll(".carousel-item, .pop_inner")) {
      p.style.background = "";
    }
    for (let p of document.querySelectorAll(".carousel__icon")) {
      p.style.fill = "";
    }
  }
}

// 스크롤 p/깃털
document.addEventListener("scroll", function () {
  for (let p of document.querySelectorAll("article p")) {
    if (p.getBoundingClientRect().top - window.innerHeight + 50 <= 0) {
      p.classList.add("Scrovisible");
    } else {
      p.classList.remove("Scrovisible");
    }
  }

  let fea = document.querySelector("#feather");
  if (fea.getBoundingClientRect().top - window.innerHeight <= 0) {
    fea.classList.add("fallAni");
  } else fea.classList.remove("fallAni");
});

// #Art2
window.addEventListener("scroll", () => {
  let FloatBtn = document.querySelector(".FloatBtn");
  if (window.pageYOffset > 400) {
    FloatBtn.style.display = "block";
    FloatBtn.style.animation = "slideUp 0.5s ease forwards";
  } else {
    FloatBtn.style.animation = "slideDown 0.5s ease forwards";
    FloatBtn.addEventListener("animationend", () => {
      if (window.pageYOffset <= 400) {
        FloatBtn.style.display = "none";
      }
    });
  }

  if (window.pageYOffset > 1280) {
    FloatBtn.classList.add("fixed");
  } else {
    FloatBtn.classList.remove("fixed");
  }
});

// 팝업 열기
document.querySelector(".btn_open").addEventListener("click", function () {
  var popWrap = document.querySelector(this.getAttribute("href"));
  popWrap.style.display = "block";
  popWrap.style.animation = "popUpSlide 0.5s ease-out forwards";
});

// 팝업 닫기
function closePopup(popWrap) {
  popWrap.style.animation = "fadeOut 0.5s ease-out forwards";
  popWrap.addEventListener(
    "animationend",
    function () {
      popWrap.style.display = "none";
    },
    { once: true }
  );
}

document
  .querySelector(".pop_wrap .btn_close")
  .addEventListener("click", function () {
    closePopup(this.closest(".pop_wrap"));
  });

document.querySelector(".pop_wrap").addEventListener("click", function (event) {
  if (!event.target.closest(".pop_inner")) {
    closePopup(this);
  }
});

// Art3
let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // 만약 요소가 화면에 보인다면 클래스 추가
      if (entry.isIntersecting) {
        entry.target.classList.add("animated-path");
      } else entry.target.classList.remove("animated-path");
    });
  },
  { threshold: 0.4 }
); // threshold: 1.0: 100% 화면에 보여야 콜백이 실행

document.querySelectorAll("#Art3 svg").forEach((svg) => {
  observer.observe(svg);
});

// Art5
function animateNumber(elementId, finalNumber, duration, startNumber, increment) {
  let curNum = startNumber;
  const element = document.querySelector(elementId);

  const interval =
    (duration / Math.abs(finalNumber - startNumber)) * Math.abs(increment);
  const timer = setInterval(() => {
    curNum += increment;
    element.textContent = curNum;

    if (
      (increment < 0 && curNum <= finalNumber) ||
      (increment > 0 && curNum >= finalNumber)
    ) {
      clearInterval(timer);
      element.textContent = finalNumber;
    }
  }, interval);
}

let observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case "CO2num1":
            animateNumber("#CO2num1", 5, 500, 50, -3);
            break;
          case "CO2num2":
            animateNumber("#CO2num2", 50, 500, 1, 3);
            break;
        }
      }
    });
  },
  { threshold: 1.0 }
);

document.querySelectorAll("#CO2num1, #CO2num2").forEach((el) => {
  observer2.observe(el);
});

// Art6
let observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 만약 요소가 화면에 보인다면 클래스 추가
      if (entry.isIntersecting) {
        entry.target.classList.add("rotate");
      } else entry.target.classList.remove("rotate");
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll("#Art6 img").forEach((svg) => {
  observer3.observe(svg);
});

// top 버튼
document.querySelector(".goTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// 캐러셀
$(function () {
  $(".carousel-item").eq(0).addClass("active");
  var total = $(".carousel-item").length;
  var current = 0;
  $("#moveRight").on("click", function () {
    var next = current;
    current = current + 1;
    setSlide(next, current);
  });
  $("#moveLeft").on("click", function () {
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }
    $(".carousel-item").eq(prev).removeClass("active");
    $(".carousel-item").eq(slide).addClass("active");
    setTimeout(function () {}, 800);
  }
});


// top 버튼2
let goTop2 = document.querySelector(".goTop2");

goTop2.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  this.classList.remove("ready");
  this.classList.add("scrolling");
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset === 0 && goTop2) {
    goTop2.classList.remove("scrolling");
    goTop2.classList.add("ready");
  }
});

// 컨페티
var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 25,
  colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: Math.floor(Math.random() * 31) + 50,
    scalar: 1.2,
    shapes: ['star']
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle']
  });
}

function multiShoot() {
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
  setTimeout(shoot, 300);
  setTimeout(shoot, 400);
  setTimeout(shoot, 500);
  setTimeout(shoot, 600);
  setTimeout(shoot, 700);
}

console.log(`
      ROCKET SCIENCE

            ##
           #  #
          #    #
         #      #
        #   ##   #
       #  #    #  #
       #  #    #   #
     ##     ##     ##
    # #            # #
   #  #            #  #
  #   #            #   #
 #    #            #    #
 #  # #            # #  #
 # #   #          #   # #
 #      # # # # ##      #

         #      #
          #    #
           #  #
            ##

`)
