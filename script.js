const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const noTexts = [
    "Pakka?",
    "Fir se soch lo ek baar!",
    "Nhi bnogi na?",
    "Last chance!",
    "Q nhi bnnaa chahti ho🥺",
    "Maan bhi jao aab please😭😭😭🙏🙏🙏?"
];

let noClicks = 0;

// ORIGINAL grow logic
let padX = 40;
let padY = 18;

noBtn.addEventListener("click", () => {
    if (noClicks < noTexts.length) {
        noBtn.innerText = noTexts[noClicks];

        padX += 25;
        padY += 6;
        yesBtn.style.padding = `${padY}px ${padX}px`;

        noClicks++;
    }

    if (noClicks === noTexts.length) {
        noBtn.style.display = "none";
        message.innerHTML =
            "Aise kaise nhi bnogi jldi Yes kro aab kuchh nhi ho skta h❤️";
    }
});

yesBtn.addEventListener("click", () => {

    // Confetti blast
    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const hearts = ["💖", "💕", "💗", "💘", "💝", "❤️"];
        confetti.innerText = hearts[Math.floor(Math.random() * hearts.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    document.querySelector(".container").innerHTML = `
        <img src="tannu.jpeg" class="valentine-img">
        <h1>Hmko pta tha ye hmar krejaaaaaa💕</h1>
        <p style="font-size:18px;color:#e75480;">
        Tum meri zindagi ka sabse khoobsurat hissa ho.
        Jab se tum meri life me aayi ho, har din ek nayi muskurahat lekar aata hai.
        <br><br>
        Tum sirf meri Valentine nahi ho…
        tum meri dua ho, meri khushi ho, meri aadat ho, aur meri poori duniya ho.
        <br><br>
        Tumhare bina sab kuch adhoora lagta hai,
        aur tumhare saath har pal ek sapne jaisa lagta hai.
        <br><br>
        Main hamesha tumhara saath nibhaunga —
        har khushi me, har mushkil me, har pal… sirf tumhare liye.🥰❤️
        </p>
    `;
});