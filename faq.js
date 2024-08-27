const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-item.open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.accordion-title i'); // Select the icon element

    if (item.classList.contains('open')) {
        content.removeAttribute('style');
        item.classList.remove('open');
        icon.classList.remove('fa-chevron-up'); // Change the icon to down arrow
        icon.classList.add('fa-chevron-down');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        item.classList.add('open');
        icon.classList.remove('fa-chevron-down'); // Change the icon to up arrow
        icon.classList.add('fa-chevron-up');
    }
}
