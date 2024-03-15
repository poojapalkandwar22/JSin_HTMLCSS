
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())  //it takes response from server and takes JSON data from it.
    .then(data => {                  //You can do whatever you want to in the code from tha obtained data.
        const productsContainer = document.getElementById('products-container'); 
        data.forEach(product => {                                                             
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('product-details');

            const title = document.createElement('h3');
            title.classList.add('product-title');
            title.textContent = product.title;
            
            const sr = document.createElement('p');
            title.classList.add('serial-num');
            title.textContent = 'id:-'+product.id;

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = '$' + product.price;

            const category = document.createElement('p');
            category.classList.add('product-category');
            category.textContent = 'Category: ' + product.category;

            const rating = document.createElement('p');
            rating.classList.add('product-rating');
            rating.textContent = 'Rating: ' + product.rating.rate;

            detailsDiv.appendChild(title);   
            detailsDiv.appendChild(price);   
            detailsDiv.appendChild(category);
            detailsDiv.appendChild(rating);
            detailsDiv.appendChild(sr);

            productDiv.appendChild(image);
            productDiv.appendChild(detailsDiv);

            productsContainer.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});
