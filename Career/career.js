function sendAppLink() {
    const phone = document.getElementById("phone").value;
    if (phone.length >= 10) {
      alert(`App link sent to ${phone}`);
    } else {
      alert("Please enter a valid phone number.");
    }
}
  