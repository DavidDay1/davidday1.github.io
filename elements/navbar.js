window.addEventListener('DOMContentLoaded', () => {
  console.log('Navbar loaded');
  const navbar = `
    <nav class="bg-gray-900 h-20 flex justify-center items-center text-lg sticky top-0 z-50">
      <div class="container flex justify-between items-center h-20 max-w-screen-xl mx-auto px-12">
        <a href="/" id="navbar__logo" class="text-transparent text-2xl bg-clip-text bg-gradient-to-t from-pink-500 to-red-300 font-bold">
          David Day
        </a>
        <div class="md:hidden cursor-pointer" id="mobile-menu">
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white mb-1"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </div>
        <ul class="hidden md:flex items-center space-x-6 text-white">
          <li><a href="/school.html" class="hover:text-pink-500 transition duration-300">School</a></li>
          <li><a href="/" class="hover:text-pink-500 transition duration-300">Skills</a></li>
          <li><a href="/" class="hover:text-pink-500 transition duration-300">About Me</a></li>
          <li>
            <a href="/" class="px-4 py-2 rounded bg-pink-500 text-white hover:bg-blue-700 transition duration-300">
              Experience
            </a>
          </li>
          <li>
            <button id="theme-toggle" class="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-500 transition duration-300">
              Toggle Theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `;
  document.getElementById('navbar').innerHTML = navbar;

  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
