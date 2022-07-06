window.onload = function() {
    window.addEventListener("scroll", function(e) {
        scrollEvent();
    });
}

let scrollEvent = function() {
    // 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const scroll = (innerHeight * 0.9) + scrollY;

    // 애니메이션 효과를 넣을 DOM 객체 배열
    const itemList = document.querySelectorAll(".client ul li");

    Array.prototype.forEach.call(itemList, function(li) {
        // 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
        if(li.offsetTop < scroll) {
            li.classList.remove("animatable");
            li.classList.add("animated");
        }
    });
}

if(window.matchMedia("(max-width: 1217px)").matches) {
    const elems = document.getElementsByTagName("li");
    for(let i = 0; i < elems.length; i++) {

    }
}