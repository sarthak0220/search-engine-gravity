document.getElementById('luckyButton').addEventListener('click', applyGravity);

function applyGravity() {
    // Select all relevant elements (logo, search bar, buttons, etc.)
    const elementsToFall = document.querySelectorAll('.logo-container, .search-container, .navbar, .history-container');

    // Apply gravity effect (add the 'falling' class)
    elementsToFall.forEach(element => {
        element.classList.add('falling');
    });
}

// Search functionality (as per your previous implementation)
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const searchHistoryList = document.getElementById('searchHistoryList');
const clearHistoryButton = document.getElementById('clearHistoryButton');

// Load search history from local storage
window.onload = function() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    displaySearchHistory(searchHistory);
};

// Save search to history
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== "") {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory(searchHistory);
        searchInput.value = '';
    }
});

// Display search history
function displaySearchHistory(history) {
    searchHistoryList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        searchHistoryList.appendChild(li);
    });
}

// Clear search history
clearHistoryButton.addEventListener('click', () => {
    localStorage.removeItem('searchHistory');
    searchHistoryList.innerHTML = '';
});
