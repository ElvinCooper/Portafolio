
const toggleTheme  = document.getElementById('toggle-theme'); 
const toggleIcon   = document.getElementById('toggle-icon');
const toggleText   = document.getElementById('toggle-text'); 
const toggleColors = document.getElementById('toggle-colors');

const rootStyles = document.documentElement.style;

/*const flagsElement = document.getElementById("flags");
const textToChange = document.querySelectorAll("[data-section]");
 const changeLanguage = async (language) => {
	const requestJson = await fetch(`./languages/${language}.json`);
	const text = await requestJson.json();
	for (const textsToChange of textToChange){
		 const section = textsToChange.dataset.section;
		 const value   = textsToChange.dataset.value;

		//console.log(section, value);
		textsToChange.innerHTML= text[section][value];
	}

 };
flagsElement.addEventListener("click", (e)=> {
	changeLanguage(e.target.parentElement.dataset.language);
});*/

toggleTheme.addEventListener('click', ()=> {
	document.body.classList.toggle('dark');
	if (toggleIcon.src.includes('moon.svg')){
		toggleIcon.src = 'assets/icons/sun.svg';
		toggleText.textContent = 'Light Mode';
	} else {
		toggleIcon.src = 'assets/icons/moon.svg';
		//toggleText.textContent = 'Portafolio Profesional'; 
	  }  
});

	  
	toggleColors.addEventListener('click', (e) => {
		rootStyles.setProperty('--primary-color', e.target.dataset.color); 
    });