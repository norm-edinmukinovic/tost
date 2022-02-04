/// Kontrolisanje kretanje pointera, da li je pointer došao na mjesto DIVa. Ako je pointrer došao na mjesto DIVa onda da priže new--expand i first class.
const handleMouseEnter = (e) => {
  if (!e.target.dataset.expand) {
    return;
  }

  navsVisited += 1;

  if (navsVisited === 1) {
    expandMenu.classList.add("new--expand");
    menus.forEach((menu) => menu.classList.add("first"));
    indicator.classList.add("first");
  } else {
    expandMenu.classList.remove("new--expand");
    menus.forEach((menu) => menu.classList.remove("first"));
    indicator.classList.remove("first");
  }

  navLinks.forEach((navLink) => {
    if (navLink === e.target) {
      navLink.classList.add("hover");
      currentNav = navLink;
    } else {
      navLink.classList.remove("hover");
    }
  });




///računanje širine prikaza
  const targetMenu = document.querySelector(`#${e.target.dataset.expand}`);
  const targetCoords = targetMenu.getBoundingClientRect();
  const { width: targetWidth, height: targetHeight } = targetCoords;

  expandMenu.style.width = targetWidth + "px";
  expandMenu.style.height = targetHeight + "px";

  const prevMenu = targetMenu.previousElementSibling;



///Pokretanje animacije u suprotnom smjeru
  targetMenu.classList.remove("prev");

  if (prevMenu) {
    prevMenu.classList.add("prev");
  }


  

/// Prikaz aktivnog linka 
  menus.forEach((menu) => {
    if (menu.id === targetMenu.id) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });

  expandMenu.classList.add("expand");
};




///Provjerava da li je pointer napustio mjesto DIVa
const handleMouseLeave = (e) => {
  if (isMouseOnMenu || e.y > 50) {
    return;
  }

  forceInitialState();
};





/// Ako pointer napusti DIV, vraća ga u početno stanje 
const forceInitialState = () => {
  expandMenu.classList.remove("expand", "active");
  currentNav.classList.remove("hover");
  menus.forEach((menu) => menu.removeAttribute("class"));
  indicator.style.opacity = "0";
  currentNav = null;
  navsVisited = 0;
};


const expandMenu = document.querySelector(".header__expandMenu");
const menus = expandMenu.querySelectorAll(".menu__container > *");
const navLinks = document.querySelectorAll(".nav--link");
const indicator = document.querySelector(".tip");
let isMouseOnMenu = false;
let currentNav;
let navsVisited = 0;

const {
  height: menuHeight,
  width: menuWidth,
} = expandMenu.getBoundingClientRect();

navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseenter", handleMouseEnter);
});


expandMenu.addEventListener("mouseleave", (e) => {
  if (e.y > 70) {
    isMouseOnMenu = false;
    forceInitialState();
  }
});











  function edinToast(x) {
    var el = document.createElement("div");    
    var y = document.getElementById("toast-container");
    var c = document.createElement("closebtn");
    var element = document.createElement('div');

    c.className="toast_close";
    el.className = "toast";
    element.className = "div"

    el.innerHTML = x;
    c.innerText = "X";

    y.append(el, element);
    el.append(c);

    el.className = "toast show";

    setTimeout(function() {el.remove(), element.remove();}, 5000);

    c.onclick = (event) => {
        el.remove();
        element.remove();
        
    };   
    
};
