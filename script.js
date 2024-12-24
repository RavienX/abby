document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const message = document.getElementById('message');
    const personImage = document.getElementById('person-image');
    const letters = greeting.querySelectorAll('span');

    greeting.classList.remove('hidden');

    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('popup-letter');
        }, index * 200); // 200ms delay between each letter
    });

    // Show and animate the message after the greeting animation
    setTimeout(() => {
        message.classList.remove('hidden');
        message.style.opacity = 1;
        message.classList.add('float');
    }, letters.length * 200 + 1000); // Wait for all letters + 1 second

    // Show the person's image
    setTimeout(() => {
        personImage.classList.remove('hidden');
        personImage.style.opacity = 1;
    }, letters.length * 200 + 4000); // Wait for all animations + 4 seconds
});