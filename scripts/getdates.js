// Function to update the current year in the footer
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to update the last modified date in the footer
function updateLastModified() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
}

// Call functions to update the footer content
updateCopyrightYear();
updateLastModified();
