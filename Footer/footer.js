document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    if (!localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'block';
    }
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      banner.style.display = 'none';
    });
  });