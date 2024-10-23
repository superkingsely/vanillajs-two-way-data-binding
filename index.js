// Selecting the input and preview elements
const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const namePreview = document.getElementById('name-preview');
const bioPreview = document.getElementById('bio-preview');

// Function to update the name preview
nameInput.addEventListener('input', function () {
    // If input is empty, show placeholder text
    if (nameInput.value.trim() === "") {
        namePreview.textContent = "[Your Name]";
    } else {
        namePreview.textContent = nameInput.value;
    }
});

// Function to update the bio preview
bioInput.addEventListener('input', function () {
    // If textarea is empty, show placeholder text
    if (bioInput.value.trim() === "") {
        bioPreview.textContent = "[Your Bio]";
    } else {
        bioPreview.textContent = bioInput.value;
    }
});
