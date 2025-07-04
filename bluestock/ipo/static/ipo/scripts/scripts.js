
document.addEventListener("DOMContentLoaded", () => {
    fetch("navbar.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      });
  
   
    const ipoData = [
      { name: "Company One", price: "₹100", date: "2025-06-20" },
      { name: "Company Two", price: "₹200", date: "2025-06-22" },
      { name: "Company Three", price: "₹150", date: "2025-06-25" }
    ];
  
    const ipoContainer = document.getElementById("ipo-container");
    const modal = document.getElementById("modal");
    const companyNameText = document.getElementById("companyName");
    const closeBtn = document.querySelector(".close-btn");
  
   
    ipoData.forEach(ipo => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow";
      card.innerHTML = `
        <h3 class="text-lg font-semibold">${ipo.name}</h3>
        <p>Price: ${ipo.price}</p>
        <p>Date: ${ipo.date}</p>
        <button class="apply-btn bg-blue-500 text-white px-3 py-1 rounded mt-2">Apply</button>
      `;
      ipoContainer.appendChild(card);
  
      // Apply button
      const applyBtn = card.querySelector(".apply-btn");
      applyBtn.addEventListener("click", () => {
        companyNameText.textContent = ipo.name;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });
    });
  
    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  
    // Close on click outside
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  
    // Search functionality
    document.getElementById("searchInput").addEventListener("input", (e) => {
      const keyword = e.target.value.toLowerCase();
      document.querySelectorAll("#ipo-container > div").forEach(card => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(keyword) ? "block" : "none";
      });
    });
  });