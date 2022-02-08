const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile menu. For at gøre det, skal jeg bruge en function
// Den skal tænkes som aktiv, ikke aktiv
const mobileMenu = () => {
  menu.classList.toogle('is-active');
  menuLinks.classList.toogle('active');
}



// for egentlig at toogle den, skal jeg bruge en eventListener

menu.addEventListener('click', mobileMenu);

// vis aktiv menu når du scroller

const highlightMenu = () => {
  const element = document.querySelector('.hightlight')
  const hjemMenu = document.querySelector('#hjem-page')
  const takeMenu = document.querySelector('#takeaway-page')
  const reservérMenu = document.querySelector('#Reservér-page')
  const kontaktMenu = document.querySelector('#kontakt-page')

  let scrollPos = window.scrollY;

//  console.log(scrollPos);

  // tilføjer highlight class til mine items

  if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    takeMenu.classList.remove('highlight');
    return;
  }

else if (window.innerWidth > 960 && scrollPos < 1400) {
  reservérMenu.classList.add('highlight');
  hjemMenu.classList.remove('highlight');
  kontaktMenu.classList.remove('highlight');
  return;
}

else if (window.innerWidth > 960 && scrollPos < 2345) {
  kontaktMenu.classList.add('highlight');
  reservérMenu.classList.remove('highlight');
  return;
}


if((element && window.innerWidth < 960 && scrollPos < 600) || element) {
  element.classList.remove('highlight');
 }


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// luk mobil menu når du klikker på et menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector('er-aktiv')
  if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toogle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

}
// medarebjder section array
const imployes= [
  {name: "Alice"},
  {name: "Robert"},
  {name: "Frederik"},
  {name: "Maria"},
  {name: "Svend"},
  {name: "Erik"},
]

const sortedImployes = imployes.sort();
console.log(imployes);


// footer
const adresse = document.getElementById('adresse')
adresse.innerText = 'Volden 12 ';

const zipcode = document.getElementById('zipcode')
zipcode.innerText = '8000 Århus C';

const mobil = document.getElementById('mobil')
mobil.innerText = 'tlf. 20 61 74 59';
mobil.href = "Tel:+4520617459"

const copyright = document.getElementById('copyright')
copyright.innerText = '© Michelle V 2022. All rights reserved';


/* video */

let mVideo = getElementById('myvideo');


// formular bordbestilling

function init()
{
let bestil = document.getElementById( "bestil");
bestil.innerText =
"Skriv venligst dit navn og email adresse";
}

document.addEventListener( "DOMContentLoaded", init, false );

let form = document.getElementById( "kontakt" );
form.onsubmit = validate;

function validate()
{
  if (this.elements[ "name" ].value==="")
  {alert("Indtast venligst dit navn" ) ; return false ; }
}
