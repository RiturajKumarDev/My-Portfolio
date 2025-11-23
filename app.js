function menuBar() {
    let nav = document.querySelector("nav");
    let menuBtn = document.querySelector(".menu-btn");
    if (menuBtn.innerText == 'X')
        menuBtn.innerText = '☰';
    else
        menuBtn.innerText = 'X';
    nav.classList.toggle("show");
}

let menuList = document.querySelectorAll(".list");
menuList.forEach((a) => {
    a.addEventListener(("click"), () => {
        menuList.forEach((b) => {
            if (a == b) {
                b.style.color = 'rgb(53, 51, 51)';
                b.style.backgroundColor = 'cyan';
                b.style.boxShadow = "0 0 20px var(--main-bg-color)";
            }
            else {
                b.style.backgroundColor = 'transparent';
                b.style.color = 'white';
                b.style.boxShadow = "0 0 0";
            }
        });
    });
});
