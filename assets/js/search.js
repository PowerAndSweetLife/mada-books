const hotelsData = [
  { name: 'Hôtel A', url: 'hotel-a.html' },
  { name: 'Hôtel B', url: 'hotel-b.html' },
  { name: 'Hôtel C', url: 'hotel-c.html' },
  // ... plus d'hôtels
];

const searchInput = document.getElementById('search');
const autocompleteList = document.getElementById('autocomplete-list');

searchInput.addEventListener('input', function() {
  const inputText = this.value.toLowerCase();
  autocompleteList.innerHTML = '';

  if (inputText.length === 0) {
    autocompleteList.style.display = 'none';
    return;
  }

  const matchingHotels = hotelsData.filter(hotel =>
    hotel.name.toLowerCase().includes(inputText)
  );

  matchingHotels.forEach(hotel => {
    const item = document.createElement('div');
    item.innerHTML = hotel.name;
    item.className = 'autocomplete-item';
    item.addEventListener('click', function() {
      window.location.href = hotel.url;
    });
    autocompleteList.appendChild(item);
  });

  autocompleteList.style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (!searchInput.contains(event.target)) {
    autocompleteList.style.display = 'none';
  }
});