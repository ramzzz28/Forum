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

    if (item.classList.contains('open')) {
        content.removeAttribute('style');
        item.classList.remove('open');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        item.classList.add('open');
    }
}
