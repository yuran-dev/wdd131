// Product Array
const products = [
  { id: 'm288', name: 'Hydrogel M288' },
  { id: 'sunshine', name: 'Sunshine FX-866' },
  { id: 'ss890c', name: 'SS-890C' }
];

// Populate select options
const select = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

// Floating label for select
function checkSelect() {
  const floating = select.parentElement;
  if (select.value) {
    floating.classList.add('filled');
  } else {
    floating.classList.remove('filled');
  }
}

select.addEventListener('change', checkSelect);
checkSelect(); // Inicial
