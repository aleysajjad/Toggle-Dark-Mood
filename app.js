var toggleButton = document.getElementById('toggle-button');
var body = document.body;

var darkMode = localStorage.getItem('darkMode');

if (darkMode) {
    body.classList.add('dark-mode');
}

toggleButton.onclick = function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.removeItem('darkMode');
    }
}

var navigationItems = document.getElementById('navigation-items');

