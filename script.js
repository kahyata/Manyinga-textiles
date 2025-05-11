document.addEventListener('DOMContentLoaded', () => {
    const productImages = document.querySelector('.product-images');
    const dots = document.querySelectorAll('.dot');
    const productItems = document.querySelectorAll('.product-item');
    const itemsPerGroup = 4; // Items visible initially (1–4)

    // Update active dot based on scroll position
    productImages.addEventListener('scroll', () => {
        const scrollLeft = productImages.scrollLeft;
        const itemWidth = productItems[0].offsetWidth + 10; // Item width (80px) + gap (10px)
        const groupWidth = itemWidth * itemsPerGroup; // Width of one group (e.g., 4 items)
        const activeIndex = Math.round(scrollLeft / groupWidth); // 0 for 1–4, 1 for 5–7

        // Ensure activeIndex is within bounds (0 or 1 for 2 dots)
        const clampedIndex = Math.min(activeIndex, dots.length - 1);

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === clampedIndex);
        });
    });

    // Click dot to scroll to corresponding group
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const itemWidth = productItems[0].offsetWidth + 10; // Item width + gap
            const groupWidth = itemWidth * itemsPerGroup; // Width of one group
            productImages.scrollTo({
                left: index * groupWidth, // Scroll to start of group (0 for 1–4, groupWidth for 5–7)
                behavior: 'smooth'
            });
        });
    });
});