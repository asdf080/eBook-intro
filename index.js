// 탑 메뉴
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

document.addEventListener('scroll', function() {
  for(let p of document.querySelectorAll('article p')){
    if (p.getBoundingClientRect().top - window.innerHeight+100 <= 0) {
      p.classList.add('Scrovisible');
    } else {
      p.classList.remove('Scrovisible');
    }
  }

  let fea = document.querySelector('#feather')
  if (fea.getBoundingClientRect().top - window.innerHeight <= 0) {
    fea.classList.add('fallAni');
  } else fea.classList.remove('fallAni');
});

// #Art2
window.addEventListener('scroll', () => {
  let FloatBtn = document.querySelector('.FloatBtn');

  if (window.pageYOffset > 250) { 
    FloatBtn.style.display = 'block';
  } else {
    FloatBtn.style.display = 'none';
  }

  if (window.pageYOffset > 950) {
    FloatBtn.classList.add('fixed');
  } else {
    FloatBtn.classList.remove('fixed');
  }
});

// Intersection Observer를 설정합니다.
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 만약 요소가 화면에 보인다면 클래스 추가
    if (entry.isIntersecting) {
      entry.target.classList.add('animated-path');
    } else entry.target.classList.remove('animated-path');
  });
}, { threshold: 0.4 }); // threshold: 1.0은 요소가 100% 화면에 보여야 콜백이 실행됨을 의미합니다.

// #Art3 내의 모든 svg 요소에 대해 observer를 적용합니다.
document.querySelectorAll('#Art3 svg').forEach(svg => {
  observer.observe(svg);
});

// Art5
function animateNumber(elementId, finalNumber, duration, startNumber, increment) {
  let currentNumber = startNumber;
  const element = document.querySelector(elementId);

  const interval = duration / Math.abs(finalNumber - startNumber) * Math.abs(increment);
  const timer = setInterval(() => {
    currentNumber += increment;
    element.textContent = currentNumber;

    if ((increment < 0 && currentNumber <= finalNumber) || (increment > 0 && currentNumber >= finalNumber)) {
      clearInterval(timer);
      element.textContent = finalNumber;
    }
  }, interval);
}

let observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      switch(entry.target.id) {
        case 'CO2num1':
          animateNumber('#CO2num1', 5, 500, 50, -3);
          break;
        case 'CO2num2':
          animateNumber('#CO2num2', 50, 500, 1, 3);
          break;
      }
    }
  });
}, { threshold: 1.0 });

document.querySelectorAll('#CO2num1, #CO2num2').forEach(el => {
  observer2.observe(el);
});

// Art6
let observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // 만약 요소가 화면에 보인다면 클래스 추가
    if (entry.isIntersecting) {
      entry.target.classList.add('rotate');
    } else entry.target.classList.remove('rotate');
  });
}, { threshold: 0.4 }); // threshold: 1.0은 요소가 100% 화면에 보여야 콜백이 실행됨을 의미합니다.

document.querySelectorAll('#Art6 img').forEach(svg => {
  observer3.observe(svg);
});