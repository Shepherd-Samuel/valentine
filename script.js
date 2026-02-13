let slideIndex = 0;
let slideshowInterval;

function startSlideshow() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add("active");
    slides[slideIndex - 1].style.display = "block";
}

window.onload = () => {
    startSlideshow(); 
    slideshowInterval = setInterval(startSlideshow, 3000);
};

function moveButton() {
    const btn = document.getElementById('noButton');
    const padding = 50;
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding) + (padding / 2);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding) + (padding / 2);
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

setInterval(() => {
    const container = document.getElementById('hearts-bg');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);

const quotes = [
    "\"You are my today and all of my tomorrows.\"",
    "\"In your smile, I see something more beautiful than stars.\"",
    "\"Every love story is beautiful, but ours is my favorite.\""
];
let qIdx = 0;
setInterval(() => {
    const q = document.getElementById('romantic-quote');
    if (q) {
        q.style.opacity = 0;
        setTimeout(() => {
            qIdx = (qIdx + 1) % quotes.length;
            q.innerText = quotes[qIdx];
            q.style.opacity = 1;
        }, 1000);
    }
}, 5000);

function celebrate() {
    clearInterval(slideshowInterval);
    const music = document.getElementById('romanticSong');
    const video = document.getElementById('valVideo');
    const slides = document.querySelectorAll('.mySlides');

    Array.from(slides).forEach(s => {
        s.classList.remove('active');
        s.style.display = "none";
    });
    
    video.style.display = 'block';
    video.play();
    music.play();

    const collage = document.getElementById('collage-container');
    collage.classList.replace('collage-hidden', 'collage-active');
    
    // Trigger opacity for collage images
    setTimeout(() => {
        document.querySelectorAll('.collage-img').forEach(img => {
            img.style.opacity = '1';
        });
    }, 100);

    const content = document.getElementById('mainContent');
    content.innerHTML = `
        <h1 class="romantic-text" style="animation: fadeInEffect 2s;">YES! Forever Yours! ❤️</h1>
        <p class="love-note" style="color: white; font-size: 1.2rem;">
            You've made me the happiest person in Machakos! <br>
            Can't wait for our Valentine's date tomorrow.
        </p>
        <div style="font-size: 55px; margin-top: 10px; filter: drop-shadow(0 0 10px #ff4d6d);">💍🌹✨</div>
    `;
    
    document.getElementById('mainCard').style.boxShadow = "0 0 60px rgba(255, 77, 109, 0.7)";
    document.getElementById('noButton').style.display = 'none';
}