// === Testimonial Carousel ===
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.querySelector(".testimonial-next");
const prevBtn = document.querySelector(".testimonial-prev");

function showSlide(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? "block" : "none";
  });
}

if (testimonials.length > 0) {
  showSlide(currentSlide);

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % testimonials.length;
      showSlide(currentSlide);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
      showSlide(currentSlide);
    });
  }
}

// === Broker Comparison ===
const compareBtn = document.getElementById("compare-btn");

if (compareBtn) {
  compareBtn.addEventListener("click", () => {
    const broker1 = document.getElementById("broker1").value;
    const broker2 = document.getElementById("broker2").value;

    if (broker1 && broker2 && broker1 !== broker2) {
      alert(`Comparing brokers:\n${broker1} vs ${broker2}`);
      // Replace with actual comparison logic if needed
    } else {
      alert("Please select two different brokers to compare.");
    }
  });
}

// === QR Scan / Download Alert ===
const qrScan = document.getElementById("qr-scan");

if (qrScan) {
  qrScan.addEventListener("click", () => {
    alert("Redirecting to app download...");
  });
}

// On The Go QR interaction
const qrImage = document.getElementById("qr-scan");

if (qrImage) {
  qrImage.addEventListener("click", () => {
    alert("Opening download link...");
    // window.location.href = "https://your-app-download-link.com";
  });
}

// === Market Movers Table Data ===
const weekHigh = [
  ["Indian Railway Finance", "113.40", "114.00"],
  ["Firstsource Solution", "209.90", "217.00"],
  ["HCL Tech.", "1,540.80", "1,555.00"],
  ["ONGC", "223.40", "224.75"],
  ["Avanti Feeds", "545.30", "581.40"],
  ["Coforge", "6,592.70", "6,615.00"],
  ["Infibeam Avenues", "26.55", "27.50"],
  ["Tata Power", "357.75", "361.85"],
  ["Bank Of India", "129.10", "130.10"],
  ["Tata Consumer Products", "1,159.00", "1,165.55"],
  ["Zomato", "139.55", "141.50"],
  ["Tata Motors", "816.45", "818.55"],
  ["Rail Vikas Nigam", "203.25", "207.00"],
  ["IRCTC", "951.20", "962.00"],
  ["Union Bank Of India", "131.20", "132.50"]
];

const weekLow = [
  ["Mukesh Babu Fin Serv", "149.10", "+20%"],
  ["Jupiter Infomedia", "50.20", "+19.98%"],
  ["Jigar Cables", "66.45", "+19.95%"],
  ["Dhanlaxmi Bank", "36.30", "+19.8%"],
  ["CNI Research", "4.00", "+19.76%"],
  ["Manomay Tex India", "193.10", "+19.68%"],
  ["Eastern Logica Info", "1,329.80", "+19.41%"],
  ["Ansal Buildwell", "119.99", "+19.38%"],
  ["Upsurge Investment", "55.60", "+19.34%"],
  ["Palred Technologies", "210.60", "+18.38%"],
  ["Service Care", "67.50", "+17.33%"],
  ["Zodiac Ventures", "23.94", "+16.03%"],
  ["Mitcon Consultancy", "105.85", "+16.06%"],
  ["Ashiana Housing", "311.35", "+14.97%"],
  ["Xelpmoc Design", "127.70", "+14.63%"]
];

const highTable = document.getElementById("highTableBody");
const lowTable = document.getElementById("lowTableBody");

if (highTable && lowTable) {
  weekHigh.forEach(([company, price, high]) => {
    highTable.innerHTML += `
      <tr>
        <td style="padding: 12px 20px;">${company}</td>
        <td style="padding: 12px 20px;">${price}</td>
        <td style="padding: 12px 20px;">${high}</td>
      </tr>`;
  });

  weekLow.forEach(([company, price, change]) => {
    lowTable.innerHTML += `
      <tr>
        <td style="padding: 12px 20px;">${company}</td>
        <td style="padding: 12px 20px;">${price}</td>
        <td style="padding: 12px 20px;">
          <span style="color: #2ecc71; background: #eafaf0; padding: 4px 8px; border-radius: 5px;">
            ${change}
          </span>
        </td>
      </tr>`;
  });
}

window.addEventListener("load", () => {
  const banner = document.getElementById("cookieBanner");
  if (banner) {
    setTimeout(() => {
      banner.style.display = "block";
    }, 2000);
  }

  const acceptBtn = document.getElementById("acceptCookies");
  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      banner.style.display = "none";
    });
  }
});