
const toggleTheme  = document.getElementById('toggle-theme'); 
const toggleIcon   = document.getElementById('toggle-icon');
const toggleText   = document.getElementById('toggle-text'); 
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;

toggleTheme.addEventListener("click",() => {
	  document.body.classList.toggle('Dark');
	if (toggleIcon.src.includes("moon.svg")) {
		toggleIcon.src= "assets/icons/sun.svg";		
		toggleText.textContent = "Light Mode"	
		rootStyles.setProperty('--bg-card-color', "hsl(0, 0%, 39%)");
	} else {
        toggleIcon.src = "assets/icons/moon.svg";
		toggleText.textContent = 'Dark Mode';	
		rootStyles.setProperty('--bg-card-color',"hsl(0, 0%, 31%)");
	}
});

toggleColors.addEventListener('click', (e) => {
	rootStyles.setProperty('--primary-color', e.target.dataset.color);
	
});

