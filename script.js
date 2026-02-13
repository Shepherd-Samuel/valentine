let slideIndex = 0;
let slideshowInterval;
const noMessages = ["Wrong button! 💔", "Try again... 🥺", "Are you sure? 😭", "You're breaking my heart! 🥀", "Nice try! 😉"];

function startSlideshow() {
    let slides = document.getElementsByClassName("mySlides");
    if (!slides.length) return;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
    slides[slideIndex - 1].style.display = "block";
}

window.onload = () => {
    startSlideshow();
    slideshowInterval = setInterval(startSlideshow, 3000);
};

// Unified Escape & Heartbreak Logic
function handleNo() {
    moveButton();
    showHeartbreak();
}

function moveButton() {
    const btn = document.getElementById('noButton');
    const padding = 60;
    // Calculate boundaries to keep it visible but far enough
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - padding) + (padding / 2);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - padding) + (padding / 2);
    
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function showHeartbreak() {
    const container = document.getElementById('no-messages-container');
    const msg = document.createElement('div');
    msg.className = 'no-msg';
    msg.innerHTML = noMessages[Math.floor(Math.random() * noMessages.length)];
    
    // Position message near the cursor/tap
    msg.style.left = (Math.random() * 60 + 20) + 'vw';
    msg.style.top = (Math.random() * 60 + 20) + 'vh';
    
    container.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
}

// Background Hearts
setInterval(() => {
    const container = document.getElementById('hearts-bg');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 600);

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

    // Transition Media
    slides.forEach(s => { s.classList.remove('active'); s.style.display = "none"; });
    video.style.display = 'block';
    video.play();
    music.play().catch(() => console.log("Music waiting for interaction"));

    // Activate Collage
    const collage = document.getElementById('collage-container');
    collage.classList.replace('collage-hidden', 'collage-active');
    setTimeout(() => {
        document.querySelectorAll('.collage-img').forEach(img => img.style.opacity = '1');
    }, 100);

    // Final UI Update
    document.getElementById('mainContent').innerHTML = `
        <h1 class="romantic-text" style="animation: fadeUp 1.5s ease-out;">I Knew It! ❤️</h1>
        <p class="love-note" style="color: white; font-size: 1.2rem;">
            You've made me the happiest person in the world! <br>
            Happy Valentine's Day, My Love. 💍✨
        </p>
        <div style="font-size: 60px; margin-top: 15px; filter: drop-shadow(0 0 10px #ff4d6d);">🌹🥂❤️</div>
    `;
    
    document.getElementById('mainCard').style.boxShadow = "0 0 70px rgba(255, 77, 109, 0.8)";
    document.getElementById('noButton').style.display = 'none';
}
