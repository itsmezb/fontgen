const fonts = [
  "ABeeZee",

  "Abel",

  "Abhaya Libre",

  "Aguafina Script",

  "Aladin",

  "Alegreya Sans SC",

  "Allan",

  "Amatic SC",

  "Barriecito",

  "Barrio",

  "Basic",

  "Bellefair",

  "Belleza",

  "Beth Ellen",

  "Bree Serif",

  "Buda",

  "Bungee",

  "Cagliostro",

  "Cairo",

  "Cambay",

  "Cambo",

  "Cardo",

  "Carrois Gothic SC",

  "Caudex",

  "Caveat",

  "Comic Neue",

  "Cousine",

  "Cutive Mono",

  "Darker Grotesque",

  "David Libre",

  "Dekko",

  "Didact Gothic",

  "DM Mono",

  "Dosis",

  "Duru Sans",

  "Dynalight",

  "Economica",

  "Eczar",

  "El Messiri",

  "Encode Sans Expanded",

  "Encode Sans Semi Condensed",

  "Englebert",

  "Enriqueta",

  "Esteban",

  "Expletus Sans",

  "Fahkwang",

  "Fanwood Text",

  "Farsan",

  "Federo",

  "Fira Code",

  "Fira Mono",

  "Fira Sans",

  "Fjalla One",

  "Fondamento",

  "Gaegu",

  "Gafata",

  "Gayathri",

  "Geo",

  "Gidugu",

  "Glegoo",

  "Gloria Hallelujah",

  "Gravitas One",

  "Harmattan",

  "Heebo",

  "Homenaje",

  "IBM Plex Mono",

  "IBM Plex Sans",

  "Iceberg",

  "Inria Sans",

  "Istok Web",

  "Itim",

  "Jacques Francois",

  "Jaldi",

  "Jomhuria",

  "Jomolhari",

  "Josefin Sans",

  "Josefin Slab",

  "Julee",

  "Julius Sans One",

  "K2D",

  "Kavivanar",

  "Kelly Slab",

  "Kite One",

  "Kodchasan",

  "KoHo",

  "Kosugi",

  "Kotta One",

  "Kreon",

  "Linden Hill",

  "Literata",

  "Lora",

  "Loved by the King",

  "Lusitana",

  "Magra",

  "Major Mono Display",

  "Mali",

  "Mansalva",

  "Marko One",

  "Martel Sans",

  "Mate SC",

  "McLaren",

  "Medula One",

  "Meera Inimai",

  "Merriweather Sans",

  "Michroma",

  "Mina",

  "Miriam Libre",

  "Mirza",

  "Mitr",

  "Monoton",

  "Montserrat",

  "Montserrat Alternates",

  "Montserrat Subrayada",

  "Mouse Memoirs",

  "Mukta",

  "Mukta Mahee",

  "Mukta Malar",

  "Nanum Gothic Coding",

  "Nanum Pen Script",

  "Niconne",

  "Nobile",

  "Nothing You Could Do",

  "Nova Mono",

  "Nova Script",

  "Nova Slim",

  "Nunito Sans",

  "Odibee Sans",

  "Oleo Script",

  "Oleo Script Swash Caps",

  "Oranienbaum",

  "Orbitron",

  "Orienta",

  "Oswald",

  "Overlock SC",

  "Overpass Mono",

  "Oxanium",

  "Padauk",

  "Paprika",

  "Patrick Hand",

  "Pavanam",

  "Philosopher",

  "Playfair Display SC",

  "Pompiere",

  "Poor Story",

  "Pragati Narrow",

  "Prosto One",

  "PT Mono",

  "PT Sans Caption",

  "PT Serif Caption",

  "Purple Purse",

  "Quando",

  "Quantico",

  "Quattrocento Sans",

  "Quintessential",

  "Racing Sans One",

  "Rancho",

  "Ranga",

  "Ravi Prakash",

  "Redressed",

  "Reenie Beanie",

  "Rokkitt",

  "Rozha One",

  "Rubik",

  "Rubik Mono One",

  "Sail",

  "Saira",

  "Salsa",

  "Sanchez",

  "Sarpanch",

  "Scheherazade",

  "Schoolbell",

  "Shadows Into Light Two",

  "Share Tech Mono",

  "Short Stack",

  "Signika Negative",

  "Simonetta",

  "Snippet",

  "Source Code Pro",

  "Source Sans Pro",

  "Spectral SC",

  "Sree Krushnadevaraya",

  "Sriracha",

  "Stylish",

  "Sunflower",

  "Syncopate",

  "Tenor Sans",

  "Tillana",

  "Trirong",

  "Trochut",

  "Ubuntu",

  "Unna",

  "Work Sans",

  "Yatra One",
];

function randomFont() {
  return fonts[Math.floor(Math.random() * fonts.length)];
}

function myFunction() {
  let fontName = (document.getElementById(
    "usr-input"
  ).style.fontFamily = randomFont());
  document.getElementById("demoName").innerHTML = fontName;
}

function mouseDown() {
  document.getElementById("demo").style.backgroundColor = "rgba(40,20,80,.6)";
  document.getElementById("demo").style.width = "215px";
}

function mouseUp() {
  document.getElementById("demo").style.backgroundColor =
    "rgba(43, 48, 100, 0.4)";
  document.getElementById("demo").style.width = "220px";
}

function keyPress() {
  document.getElementById("control-panel").style.display = "block";
  document.getElementById("control-panel").style.opacity = 1;
}

$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#menu").toggleClass("active");
});
