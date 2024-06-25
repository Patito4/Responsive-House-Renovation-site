function animateHeroText() {
    const heroText = document.querySelector(".hero-section-text"),
    heroSubText = document.querySelector(".hero-section-text-wrapper");
    
    setTimeout(() => heroText.classList.add("animate-hero-section-text"), 1000);
    setTimeout(() => heroSubText.classList.add("animate-hero-section-text-wrapper"), 2500);
}

export default animateHeroText;