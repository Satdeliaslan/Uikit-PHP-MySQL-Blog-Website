// Lighting Effect Scripts
//made by Satdeliaslan 
const fip = document.getElementById("first-interaction-page");
const light = document.getElementById("light");
fip.addEventListener('mousemove', e => {
    light.style.setProperty('--x', e.clientX + 'px')
    light.style.setProperty('--y', e.clientY + 'px')
})
fip.addEventListener('mouseleave',e => {
    light.style.visibility = "hidden";
    fip.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(http://localhost/futech/img/home/12.jpg)";
    fip.style.backgroundSize = "cover";
    fip.style.setProperty('--text_color','rgba(128, 126, 126, 0.2)');
})
fip.addEventListener('mouseenter',e => {
    light.style.visibility = "initial";
    fip.style.background = "url(http://localhost/futech/img/home/12.jpg)";
    fip.style.backgroundSize = "cover";
    fip.style.cursor = "none";
    fip.style.setProperty('--text_color', 'white');
})
