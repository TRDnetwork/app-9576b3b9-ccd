# Portfolio Pro

A responsive personal portfolio website with dynamic theme switching and interactive project showcase.

## Features
- Hero section with name, title, and call-to-action button
- About Me section with bio and skills
- Responsive grid layout for projects with hover effects
- Dark/light mode toggle with localStorage persistence
- Smooth scrolling navigation

## Prerequisites
- Modern browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for running tests)

## How to Use
1. Open `index.html` directly in your browser
2. Navigate using the header links to scroll between sections
3. Click the theme toggle (☀️/🌙) to switch between dark and light modes

## Development
```bash
# Install dependencies
npm install

# Run tests
npm test

# Preview locally
npm run preview
```

## Testing
This project includes a comprehensive test suite using Vitest:
- Theme toggle functionality
- Smooth scrolling behavior
- DOM initialization sequence
- localStorage integration

Run `npm test` to execute all tests.

## Browser Compatibility
Tested and working in:
- Chrome (latest)
- Firefox (latest)
- Safari 14+
- Edge (latest)

## Accessibility
- Supports `prefers-reduced-motion`
- Semantic HTML structure
- Proper heading hierarchy
- High contrast text in both themes

## License
MIT