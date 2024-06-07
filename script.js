document.querySelectorAll('.box, .box1, .box2, .box3').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('hovered');
    });
    box.addEventListener('mouseleave', () => {
        box.classList.remove('hovered');
    });
});
