document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const pageWidth = window.innerWidth;
    let currentPage = 0;
    
    // Handle wheel scrolling
    document.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (event.deltaY > 0) {
            currentPage = Math.min(currentPage + 1, container.children.length - 1);
        } else {
            currentPage = Math.max(currentPage - 1, 0);
        }
        container.scrollLeft = currentPage * pageWidth;
    });
    
    // Handle navigation links
    const links = document.querySelectorAll('.nav-link a');
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage = index;
            container.scrollLeft = currentPage * pageWidth;
        });
    });
});
