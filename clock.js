window.onload = function () {
  const isim = prompt("Lütfen adınızı giriniz:");
  if (isim) {
    
    document.getElementById("myName").textContent = isim;
  }

  showTime();                // ilk çağırma
  setInterval(showTime, 1000); // her saniye tekrarla
}

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime() {
  const now = new Date();
  
  const hours   = now.getHours().toString().padStart(2,"0");
  const minutes = now.getMinutes().toString().padStart(2,"0");
  const seconds = now.getSeconds().toString().padStart(2,"0");
  const dayName = days[now.getDay()];

  const clockText = `${hours}:${minutes}:${seconds} ${dayName}`;

  // ekrana yazdır
  document.getElementById("myClock").textContent = clockText;
}
