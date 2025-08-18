document.addEventListener('DOMContentLoaded', function () {
  // Contact form
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

  // Dropdown toggle
  const moreBtn = document.getElementById('moreProjectsBtn');
  const dropdown = document.getElementById('dropdownMenu');
  let isOpen = false;

  if (moreBtn && dropdown) {
    moreBtn.addEventListener('click', () => {
      if (!isOpen) {
        dropdown.classList.remove('hidden');
        dropdown.classList.remove('animate-dropdown-leave');
        dropdown.classList.add('animate-dropdown-enter');
        isOpen = true;
      } else {
        dropdown.classList.remove('animate-dropdown-enter');
        dropdown.classList.add('animate-dropdown-leave');
        setTimeout(() => dropdown.classList.add('hidden'), 200);
        isOpen = false;
      }
    });

    document.addEventListener('click', (e) => {
      if (isOpen && !moreBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('animate-dropdown-enter');
        dropdown.classList.add('animate-dropdown-leave');
        setTimeout(() => dropdown.classList.add('hidden'), 200);
        isOpen = false;
      }
    });
  }
});
