// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#e8491d';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.margin = '20px auto';
    button.style.display = 'block';
    
    // Add click event listener
    button.addEventListener('click', function() {
        alert('Hello! You clicked the button!');
    });
    
    // Add the button to the home section
    const homeSection = document.querySelector('#home');
    homeSection.appendChild(button);
    
    // Bonus: Change header color on mouseover
    const header = document.querySelector('header');
    header.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e8491d';
    });
    
    header.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#35424a';
    });
});