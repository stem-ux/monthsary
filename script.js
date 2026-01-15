const card = document.getElementById("card");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const envelopeScreen = document.getElementById("envelope-screen");
const angle = Math.random() * Math.PI * 2;
const radius = Math.random() * 150 + 50;
const x = Math.cos(angle) * radius;
const y = Math.sin(angle) * radius * -1;
setTimeout(burstHearts, 300);
burstHearts();
setTimeout(burstHearts, 300);



let musicStarted = false;
let isOpen = false;
setTimeout(() => music.play(), 600);

// Open envelope
envelopeScreen.addEventListener("click", () => {
  envelopeScreen.classList.add("hide");
});

// YOUR PHOTOS
const photos = [
  "photos/pic1.jpg",
  "photos/pic2.jpg",
  "photos/pic3.jpg",
  "photos/pic4.jpg"
];

// Background loops
setInterval(createFallingPhoto, 2200);
setInterval(createFallingHeart, 900);
setInterval(createPetal, 1300);

// Create stars once
createStars(60);

card.addEventListener("click", () => {
  isOpen = !isOpen;
  message.classList.toggle("open", isOpen);

  if (!musicStarted) {
    music.volume = 0.3;
    music.play();
    musicStarted = true;
  }

  burstHearts();
});

// ===== PHOTOS =====
function createFallingPhoto() {
  const img = document.createElement("img");
  img.src = photos[Math.floor(Math.random() * photos.length)];
  img.className = "falling-photo";

  const drift = Math.random() * 40 - 20;
  const rotate = Math.random() * 20 - 10;

  img.style.left = Math.random() * 100 + "vw";
  img.style.setProperty("--x-start", "0px");
  img.style.setProperty("--x-end", drift + "px");
  img.style.setProperty("--rotate", rotate + "deg");
  img.style.animationDuration = Math.random() * 6 + 8 + "s";

  document.body.appendChild(img);
  setTimeout(() => img.remove(), 15000);
}

// ===== HEARTS =====
function createFallingHeart() {
  const heart = document.createElement("div");
  heart.className = "falling-heart";

  const emojis = ["❤️","💖","💕","💘"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.setProperty("--x-start", "0px");
  heart.style.setProperty("--x-end", Math.random() * 60 - 30 + "px");
  heart.style.fontSize = Math.random() * 10 + 14 + "px";
  heart.style.animationDuration = Math.random() * 4 + 5 + "s";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 12000);
}

// ===== PETALS =====
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.innerText = "🌸";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.setProperty("--x-start", "0px");
  petal.style.setProperty("--x-end", Math.random() * 50 - 25 + "px");
  petal.style.animationDuration = Math.random() * 6 + 7 + "s";

  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 14000);
}

// ===== STARS =====
function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(star);
  }
}

// ===== CLICK BURST =====
function burstHearts() {
  const rect = message.getBoundingClientRect();

  // Origin = center of the letter
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const emojis = ["❤️", "💖", "💕", "💘", "💞"];

  const totalHearts = 35; // MORE HEARTS 😍

  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "letter-heart";
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = originX + "px";
    heart.style.top = originY + "px";

    // FULL SCREEN SPREAD
    const angle = Math.random() * Math.PI * 2; // 360°
    const radius = Math.random() * (window.innerWidth / 1.2);

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    heart.style.setProperty("--x", x + "px");
    heart.style.setProperty("--y", y + "px");

    heart.style.fontSize = Math.random() * 20 + 24 + "px";
    heart.style.animationDuration = Math.random() * 1 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}



