const tooltip = document.querySelector('.tooltip__content');
const tooltipElements = document.querySelectorAll('[data-tooltip-text]');

const moveTooltip = (e) => {
    gsap.to(tooltip, 0.2, {
        x: e.clientX + 0.2,
        y: e.clientY + 0.2,
        ease: "power4.out",
        delay: 0.05,
    });
};

tooltipElements.forEach(elem => {
    let activeEnterTween;
    let activeExitTween;
    const color = elem.dataset.tooltipColor;
    const text = elem.dataset.tooltipText;

    elem.addEventListener("mouseover", () => {
        tooltip.innerText = text;
        tooltip.style.background = color;

        if (activeExitTween) {
            activeExitTween.kill();
        }

        activeEnterTween = gsap.to(tooltip, {
            duration: 0.8,
            scale: 1,
            opacity: 1,
            ease: "expo.out",
        });
    });

    elem.addEventListener("mouseleave", () => {
        if (activeEnterTween) {
            activeEnterTween.kill();
        }

        tooltip.innerText = null;
        activeExitTween = gsap.to(tooltip, {
            scale: 0,
            opacity: 0,
            duration: 0,
        });
    });
});