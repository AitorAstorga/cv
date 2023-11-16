function createComponent(image, title, text, data_text_base) {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="col">
        <div class="my-card shadow-sm">
          <div class="row g-0">
            <div class="col d-flex align-items-center justify-content-center">
              <img src="${image}" class="my-logo-big" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body px-0">
                <h5 class="card-title">${title}</h5>
                <p data-text="${data_text_base}_b" class="card-text">${text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return template.content.cloneNode(true);
}

window.addEventListener("load", () => {
    // Get all the containers
    const containers = document.querySelectorAll(".component-container");

    // Load the text for the selected language
    fetch("../skills-data.json")
        .then((response) => response.json())
        .then((data) => {
            // Loop over all the sections
            data.forEach((section) => {
                const sectionId = section.sectionId;
                const components = section.components;

                // Get the container for the current section
                const container = document.querySelector(`#${sectionId} .component-container`);

                // Loop over all the components and add them to the container
                components.forEach((component) => {
                    // Create an instance of the component
                    const componentInstance = createComponent(component.image, component.title, component.text, component.data_text_base);

                    // Add the component to the container
                    container.appendChild(componentInstance);
                });
            });
            
            // Get the language from localStorage, or fall back to English
            var language = localStorage.getItem('language') || 'en';
            updateText(language);
        })
        .catch((error) => console.error(error));
});

