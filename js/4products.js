let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.addEventListener('click', () => {
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
        let target = preview.getAttribute('data-target');
        if (name === target) {
            preview.classList.add('active');
            previewContainer.style.display = 'flex';
            // Center the preview vertically within the viewport
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let windowHeight = window.innerHeight || document.documentElement.clientHeight;
            let previewHeight = preview.offsetHeight;
            let topOffset = (windowHeight - previewHeight) / 2;
            preview.style.top = `${scrollTop + topOffset}px`;
        }
        });
    });
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').addEventListener('click', () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    });
});

var addToCartButtons = document.querySelectorAll('.cart');

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Item successfully added to cart!');
    });
});