const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
