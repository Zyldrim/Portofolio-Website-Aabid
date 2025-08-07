document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.classList.remove('hidden');
      form.reset();
      alert("Terima kasih! Tapi ini cuma form demo ya 😄 Untuk menghubungi saya, silakan klik social link yang tersedia.");
    });
  }
});



