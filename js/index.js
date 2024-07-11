// 메인 첫화면 텍스트 애니메이션
const wave1 = document.querySelector(".wave1");
const wave2 = document.querySelector(".wave2");
wave1.innerHTML = wave1.textContent
.split("")
.map((letter, idx) => {
    if (letter === " ") return " ";
    return `<span style="animation-delay:${
      idx * 15
    }ms" class="letter">${letter}</span>`;
})
.join("");

wave2.innerHTML = wave2.textContent
.split("")
.map((letter, idx) => {
    if (letter === " ") return " ";
    return `<span style="animation-delay:${
      idx * 25
    }ms" class="letter">${letter}</span>`;
})
.join("");

// 스크롤 게이지 바
window.addEventListener('scroll', function() {
  // 게이지바 엘리먼트와 현재 스크롤 위치를 가져옴
  var gaugeBar = document.querySelector('.scroll_gauge');
  var scrollPosition = window.scrollY || window.pageYOffset;

  // 전체 페이지 높이와 브라우저 창 높이를 가져옴
  var pageHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;

  // 현재 스크롤 위치에서 게이지바가 차는 비율을 계산
  var fillRatio = scrollPosition / (pageHeight - windowHeight);
  
   // 계산된 비율로 게이지바 채우기
  gaugeBar.style.width = (fillRatio * 100) + '%';

});

// 네비게이션 바
const nav = document.querySelector(".nav")
const nav_menu = document.querySelectorAll(".menu a")
const m_menu = document.querySelector(".m-menu")
console.log(m_menu.children)

window.addEventListener("scroll", () => {
    if(this.window.pageYOffset >= 700) {
        nav.style.position = "fixed"
        nav.style.backgroundColor = "#fff"
        nav.style.boxShadow = "5px -10px 20px rgba(0, 0, 0, 0.8)"
        for(var i of nav_menu) {
          i.style.color = "#000"
          i.classList.add("on")
        }
        for(var i of m_menu.children) {i.style.backgroundColor = "#000"}
    } else {
        nav.style.position = "absolute"
        nav.style.backgroundColor = "unset"
        nav.style.boxShadow = "unset"
        for(var i of nav_menu) {
          i.style.color = "#fff"
          i.classList.remove("on")
        }
        for(var i of m_menu.children) {i.style.backgroundColor = "#ecf0f1"}
    }
})

$(document).ready(function(){
  $(".m-menu").click(function(){
    $(this).toggleClass("is-active");
  });
});