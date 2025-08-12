const loader = document.createElement("div");
loader.className = "loader hidden";
loader.innerHTML = `
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
`;
document.body.appendChild(loader);

const style = document.createElement("style");
style.textContent = `
.loader {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(255, 255, 255, 0.6);
  display: flex; justify-content: center; align-items: center;
  gap: 8px; z-index: 9999;
}
.hidden { display: none; }
.dot {
  width: 12px; height: 12px;
  background: #333;
  border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
}
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
@keyframes bounce {
  to { transform: translateY(-8px); }
}
`;
document.head.appendChild(style);

export function showLoader() {
  loader.classList.remove("hidden");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 2000);
}