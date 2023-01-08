// Formulaire

const buttonContact = document.querySelector(".header__button")

function contactForm () {
     const form = document.querySelector(".formContact")
     form.classList.toggle("hidden")
    
}
    

    
buttonContact.addEventListener("click", contactForm)

console.log(addEventListener)

// Progress bar age 



const daysUntilNextYear = get_days_until_next_year();
const Percent = moveProgressBar();

function get_days_until_next_year()
{
     let Date1 = new Date(); // aujourd'hui
     let Year = Date1.getFullYear();
     let Date2 = new Date((Year+1)+'-01-01'); // 1er janvier de l'année suivante
     let nbre_Jours = Math.ceil((Date2 - Date1)/(1000*60*60*24)); // .ceil : inclus aujourd'hui (sinon .floor)
     return nbre_Jours;
}
     
function moveProgressBar() {   
    
     let dayNow = 365 - daysUntilNextYear;
     let getPercent = (dayNow * 1) / 365;  
     return getPercent   
}

const progressBar = document.querySelector(".information__progressBar");
progressBar.style.width = Percent + '%';

