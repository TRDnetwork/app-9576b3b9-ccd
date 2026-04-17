document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const loading = document.querySelector('.loading');
  const themeToggle = document.getElementById('theme-toggle');

  // Check for saved theme preference, otherwise use OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  // Apply theme
  if (initialTheme) {
    document.documentElement.setAttribute('data-theme', initialTheme);
  }

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Handle smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Ensure app is visible after load
  try {
    // Simulate any init logic here if needed
  } catch (error) {
    console.error('Error during initialization:', error);
  } finally {
    // Always hide loading and show app
    if (loading) loading.style.display = 'none';
    if (app) app.classList.add('loaded');
  }
});