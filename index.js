window.addEventListener('scroll', () => {
  var FloatBtn = document.querySelector('.FloatBtn');

  // 100px 이상 스크롤 시 버튼 표시
  if (window.pageYOffset > 230) { 
    FloatBtn.style.display = 'block';
  } else {
    FloatBtn.style.display = 'none';
  }

  if (window.pageYOffset > 850) {
    FloatBtn.classList.add('fixed');
  } else {
    FloatBtn.classList.remove('fixed');
  }
});

