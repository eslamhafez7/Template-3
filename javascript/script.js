let scrollup = () => {
    let scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") 
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener('scroll', scrollup);

let scrollupButton =document.getElementById("scroll-up");
scrollupButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});