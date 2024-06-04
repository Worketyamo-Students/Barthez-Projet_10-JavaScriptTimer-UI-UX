/* ------------------------------- CONSTANTES ------------------------------- */
const ctrlBtn = document.querySelector(".timeCtrl");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const secondes = document.querySelector("#secondes");
const tierces = document.querySelector("#tierces");
const dateWrapper = document.querySelector(".date");

/* --------------------------- VARIABLES GLOBALES --------------------------- */
let isActive = false;
let runner;

/* ------------------------- GESTION DES EVENEMENTS ------------------------- */
ctrlBtn.addEventListener("click", ()=>{
    if(isActive === false){
        isActive = true;
        startChrono();
    }else{
        isActive = false;
        stopChrono();
    }
})

/* ------------------------ DEFINITION DES FONCTIONS ------------------------ */

/* -------------- Fonction Pour lancer le chrono -------------- */
function startChrono(){
    let h = 0, mn = 0, s = 0, t = 0;

    runner = setInterval(()=>{
        t++;
        if(t === 20){
            s++;
            t = 0;
        }
        if(s === 60){
            mn ++;
            s = 0;
        }
        if(mn === 60){
            h++;
            mn = 0;
        }
        fetchValue(h, mn, s, t);
    }, 50);

    ctrlBtn.innerText = "Stop";
    ctrlBtn.style.background = "linear-gradient(180deg, rgba(218, 42, 42, 0.2) 15.62%, rgba(0, 0, 0, 0.2) 100%)";
}

/* -------------- Fonction Pour arreter le chrono -------------- */
function stopChrono(){
    clearInterval(runner);
    ctrlBtn.innerText = "Start";
    ctrlBtn.style.background = "linear-gradient(144.48deg, #28272F 9.13%, #040404 62.89%)";
}

/* -------------- Fonction Pour afficher les infos dans le chrono -------------- */
function fetchValue(h, mn, s, t){
    if(h < 10) h = "0"+h;
    if(mn < 10) mn = "0"+mn;
    if(s < 10) s = "0"+s;
    if(t < 10) t = "0"+t;

    hours.innerText = h;
    minutes.innerText = mn;
    secondes.innerText = s;
    tierces.innerText = t;
}

/* ---------------------- PLACE AUX REGLAGE DE LA DATE ---------------------- */
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const months = ["janvier","fevrier", "mars", "avril", "mai", "juin", "juillet", "septembre", "octobre", "novembre", "decembre"];

var date = new Date();
var jourSemaine = jours[date.getDay()];
var jourMois = date.getDate();
var month = months[date.getMonth()];
var annee = date.getFullYear();

if(jourMois<10) jourMois = "0"+jourMois;

dateWrapper.innerHTML = `<b>${jourSemaine}</b>, ${jourMois} ${month} ${annee}`;
/* -------------------- FIN DE LA MANIPULATION DE LA DATE ------------------- */

