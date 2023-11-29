document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    const cover=document.getElementById('cover');
    const popup = document.querySelector('.popup');
    const cross = document.querySelector('.cross');
    const productImage = document.querySelector('.popup img');
    const productTitle = document.querySelector('.popup .heading');
    const productDescription = document.querySelector('.popup .product-decription');

    // Add click event listener to each card
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Update popup content based on the clicked card
            productImage.src = card.querySelector('.product-image').src;
            productTitle.textContent = card.querySelector('.product-title').textContent;
            productDescription.textContent = card.querySelector('.product-description').textContent;

            // Display the popup
            popup.classList.add('show');
            cover.style.display='block';
        });
    });

    // Add click event listener to the cross icon to close the popup
    cross.addEventListener('click', () => {
        popup.classList.remove('show');
        cover.style.display='none';
    });
});
