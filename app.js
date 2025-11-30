const screens = ["intro", "memory", "photos", "letters", "us", "happy", "another"];
let step = Number(sessionStorage.getItem("step")) || 0;

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

if (step === 0) show("intro");
else show(screens[step]);

document.getElementById("startBtn").onclick = () => next();

document.querySelectorAll(".next-btn").forEach(btn => {
  btn.onclick = () => next();
});

function next() {
  step++;
  sessionStorage.setItem("step", step);
  show(screens[step]);

  if (step === screens.length - 1) {
    document.getElementById("panel").style.display = "flex";
  }
}

function goTo(id) {
  show(id);
}

document.getElementById("secretBtn").onclick = () => {
  setTimeout(() => {
    window.open("https://discord.gg/YOUR_LINK_HERE");
  }, 1200);
};
