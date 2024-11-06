window.addEventListener('DOMContentLoaded', () => {
  console.log('Navbar loaded');

  // Create the navbar container
  const navbar = document.createElement('nav');
  navbar.classList.add('bg-gray-900', 'h-20', 'flex', 'justify-center', 'items-center', 'text-lg', 'sticky', 'top-0', 'z-50');

  // Create the navbar inner container
  const navbarContainer = document.createElement('div');
  navbarContainer.classList.add('container', 'flex', 'justify-between', 'items-center', 'h-20', 'max-w-screen-xl', 'mx-auto', 'px-12');

  // Create the logo
  const logo = document.createElement('a');
  logo.href = '/';
  logo.id = 'navbar__logo';
  logo.classList.add('text-transparent', 'text-2xl', 'bg-clip-text', 'bg-gradient-to-t', 'from-pink-500', 'to-red-300', 'font-bold');
  logo.textContent = 'David Day';

  // Create the mobile menu button
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('md:hidden', 'cursor-pointer');
  mobileMenu.id = 'mobile-menu';
  
  const bar1 = document.createElement('span');
  bar1.classList.add('block', 'w-6', 'h-0.5', 'bg-white', 'mb-1');
  const bar2 = document.createElement('span');
  bar2.classList.add('block', 'w-6', 'h-0.5', 'bg-white', 'mb-1');
  const bar3 = document.createElement('span');
  bar3.classList.add('block', 'w-6', 'h-0.5', 'bg-white');

  mobileMenu.appendChild(bar1);
  mobileMenu.appendChild(bar2);
  mobileMenu.appendChild(bar3);

  // Create the navbar links
  const navList = document.createElement('ul');
  navList.classList.add('hidden', 'md:flex', 'items-center', 'space-x-6', 'text-white');

  const links = [
    { href: '/school.html', text: 'School' },
    { href: '/', text: 'Skills' },
    { href: '/', text: 'About Me' },
    { href: '/', text: 'Experience', class: 'px-4 py-2 rounded bg-pink-500 text-white hover:bg-blue-700' }
  ];

  links.forEach(link => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.textContent = link.text;
    anchor.classList.add('hover:text-pink-500', 'transition', 'duration-300');
    if (link.class) anchor.classList.add(...link.class.split(' '));
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
  });

  // Add the theme toggle button
  const themeToggleLi = document.createElement('li');
  const themeToggleButton = document.createElement('button');
  themeToggleButton.id = 'theme-toggle';
  themeToggleButton.classList.add('px-4', 'py-2', 'rounded', 'bg-gray-700', 'text-white', 'hover:bg-gray-500', 'transition', 'duration-300');
  themeToggleButton.textContent = 'Toggle Theme';
  themeToggleLi.appendChild(themeToggleButton);
  navList.appendChild(themeToggleLi);

  // Append everything to the navbar container
  navbarContainer.appendChild(logo);
  navbarContainer.appendChild(mobileMenu);
  navbarContainer.appendChild(navList);
  navbar.appendChild(navbarContainer);

  // Insert the navbar into the DOM
  document.getElementById('navbar').appendChild(navbar);

  // Theme toggle functionality
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Apply the theme based on localStorage on page load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Set the theme in localStorage based on the current class
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
