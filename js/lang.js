function updateText(language) {
    // Update the selected language in localStorage
    localStorage.setItem('language', language);

    let url = '../lang/' + language + '.json';

    // Load the text for the selected language
    fetch(url)
        .then(response => response.json())
        .then(text => {
            // Loop over all the keys in the text object
            Object.keys(text).forEach(key => {
                // Find the elements associated with the key
                let elements = $('[data-text=' + key + ']');

                // Update the text of the relevant elements
                elements.text(text[key]);
            });
            
            // Update the selected language button's style
            updateSelectedLanguageButton(language);
        })
        .catch(error => console.error(error));
}

// Call the updateText function when the page loads
$(document).ready(function () {
    // Get the language from localStorage, or fall back to English
    let language = localStorage.getItem('language') || 'en';
    updateText(language);
});

function updateSelectedLanguageButton(language) {
    // Remove the "langSelected" class from all language buttons
    const buttons = document.querySelectorAll('.langOption');
    buttons.forEach(button => {
      button.classList.remove('langSelected');
    });
  
    // Add the "langSelected" class to the selected language button
    const selectedButton = document.querySelector(`${language}`);
    selectedButton.classList.add('langSelected');
  }
  