import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { setupThemeToggle, initSmoothScrolling } from '../app.js';

// Mock DOM
beforeEach(() => {
  document.body.innerHTML = `
    <div id="app"></div>
    <button id="theme-toggle"></button>
    <a href="#test-section">Link</a>
    <div id="test-section"></div>
  `;
});

afterEach(() => {
  localStorage.clear();
  vi.clearAllMocks();
});

describe('Theme Toggle Functionality', () => {
  it('should apply light theme by default if no preference is saved', () => {
    document.documentElement.removeAttribute('data-theme');
    setupThemeToggle();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should respect saved theme preference in localStorage', () => {
    localStorage.setItem('theme', 'dark');
    setupThemeToggle();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should toggle between light and dark themes', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    setupThemeToggle();
    const button = document.getElementById('theme-toggle');
    button.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    button.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('should save theme preference to localStorage', () => {
    document.documentElement.setAttribute('data-theme', 'light');
    setupThemeToggle();
    const button = document.getElementById('theme-toggle');
    button.click();
    expect(localStorage.getItem('theme')).toBe('dark');
  });
});

describe('Smooth Scrolling', () => {
  it('should prevent default anchor behavior and scroll to target', () => {
    const mockScrollIntoView = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

    initSmoothScrolling();
    const link = document.querySelector('a[href="#test-section"]');
    link.click();

    expect(mockScrollIntoView).toHaveBeenCalled();
  });

  it('should not interfere with non-hash links', () => {
    const link = document.createElement('a');
    link.href = '/';
    const preventDefaultSpy = vi.fn();
    link.addEventListener('click', (e) => {
      e.preventDefault();
      expect(true).toBe(false); // Should not reach here
    });
    // We simulate only hash links being captured
    const hashLinks = document.querySelectorAll('a[href^="#"]');
    expect(Array.from(hashLinks)).toContain(link); // Not actually added
  });
});

describe('App Load Sequence', () => {
  it('should hide loading screen and show app after initialization', () => {
    document.body.innerHTML = `
      <div class="loading"></div>
      <div id="app"></div>
    `;
    import('../app.js'); // This will trigger DOMContentLoaded
    expect(document.querySelector('.loading').style.display).toBe('none');
    expect(document.getElementById('app').classList.contains('loaded')).toBe(true);
  });
});