document.getElementById('toggle-button').addEventListener('click', function () {
    const navCollapse = document.getElementById('navbarSupportedContent');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    navCollapse.classList.toggle('show');
    this.setAttribute('aria-expanded', !isExpanded);
    document.getElementById('toggler-icon').innerHTML = isExpanded ? '&#9776;' : '&#10006;';
});