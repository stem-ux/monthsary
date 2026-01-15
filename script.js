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
// YOUR PHOTOS
const photos = [
  "photos/pic1.jpg",
  "photos/pic2.jpg",
  "photos/pic3.jpg",
  "photos/pic4.jpg"
];
let photoIndex = 0;

function createFallingPhoto() {
  const photo = document.createElement("img");
  photo.className = "falling-photo";
  photo.src = photos[photoIndex];
  photoIndex = (photoIndex + 1) % photos.length;

  // Random horizontal start position
  photo.style.left = Math.random() * (window.innerWidth - 100) + "px";
  photo.style.width = 100 + "px";
  photo.style.position = "fixed";
  photo.style.top = "-120px";
  photo.style.zIndex = 5;
  photo.style.pointerEvents = "none";

  // Random rotation and sway
  const rotation = Math.random() * 30 - 15; // -15° to +15°
  const sway = Math.random() * 50 - 25; // -25px to +25px horizontal drift

  document.body.appendChild(photo);

  // Animate using requestAnimationFrame for natural movement
  const duration = 7000 + Math.random() * 3000; // 7-10 seconds
  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = elapsed / duration;

    // Vertical fall
    photo.style.top = -120 + progress * (window.innerHeight + 200) + "px";

    // Horizontal sway (natural drifting)
    photo.style.left = (parseFloat(photo.style.left) + Math.sin(progress * Math.PI * 2) * sway) + "px";

    // Rotation
    photo.style.transform = `rotate(${rotation * Math.sin(progress * Math.PI)}deg)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      photo.remove();
    }
  }

  requestAnimationFrame(animate);
}

// Create a new falling photo every 2 seconds
setInterval(createFallingPhoto, 2000);

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






