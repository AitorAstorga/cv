function updateText(language) {
    // Update the selected language in localStorage
    localStorage.setItem('language', language);

    var url = 'https://aitorastorga.github.io/cv/lang/' + language + '.json';

    // Load the text for the selected language
    fetch(url)
        .then(response => response.json())
        .then(text => {
            // Loop over all the keys in the text object
            Object.keys(text).forEach(key => {
                // Find the elements associated with the key
                var elements = $('[data-text=' + key + ']');

                // Update the text of the relevant elements
                elements.text(text[key]);
            });
        })
        .catch(error => console.error(error));
}

// Call the updateText function when the page loads
$(document).ready(function () {
    updateText('en');
});
