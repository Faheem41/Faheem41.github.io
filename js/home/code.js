function openNav() {
    const nav = document.getElementById("nav");
    const navclose = document.getElementById("navclose");
    const container = document.getElementById("main2");
    container.style.display = "flex";
    nav.style.display = "flex";
    nav.style.position = "fixed";
    nav.style.left = "0";
    nav.style.top = "0";
    nav.style.paddingTop = "2em";
    nav.style.height = "100vh";
    nav.style.flexDirection = "column";
    nav.style.backgroundColor = "rgba(0,0,0,0.9)";
    nav.style.boxShadow = "20px 0 50px rgba(0, 0, 0, 0.4)";
    nav.style.padding = "20px";
    navclose.style.display = "block";
}


function closeNav() {
    const nav = document.getElementById("nav");
    nav.style.display = "none";
}