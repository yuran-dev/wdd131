// Array of products
const products = [
  { id: 'm288', name: 'Hydrogel Film M288' },
  { id: 'ss890c', name: 'Hydrogel Film SS-890C' },
  { id: 'sunshine', name: 'Hydrogel Film Sunshine FX' }
];

// Populate product select dynamically
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('product');
  if(select){
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }

  // Handle review counter for review.html
  const reviewCountEl = document.getElementById('reviewCount');
  if(reviewCountEl){
    let count = localStorage.getItem('reviewCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('reviewCount', count);
    reviewCountEl.textContent = count;
  }
});
