# Asme - Floating Header Component

A modern, responsive floating header component built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

## ✨ Features

- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile
- 🎨 **Modern Design** - Glassmorphic floating header with backdrop blur
- ♿ **Accessible** - WCAG compliant with proper ARIA attributes
- 🎭 **Mobile Menu** - Smooth slide-out navigation for smaller screens
- 🔧 **TypeScript** - Full type safety throughout
- 🎯 **Tailwind CSS** - Utility-first styling with custom theme
- 📦 **shadcn/ui** - Production-ready components

## 📁 Project Structure

```
src/
├── components/
│   └── ui/
│       ├── floating-header.tsx  # Main header component
│       ├── button.tsx           # Button component
│       └── sheet.tsx            # Mobile menu component
├── lib/
│   └── utils.ts                 # Helper functions
├── App.tsx                      # Demo page
├── main.tsx                     # React entry
└── index.css                    # Global styles
```

## 🎯 Component Props

The `FloatingHeader` component is self-contained and requires no props. To customize:

1. **Edit navigation links** in `floating-header.tsx`:
   ```typescript
   const links = [
     { label: 'Features', href: '#' },
     // Add your links here
   ];
   ```

2. **Change styling** using Tailwind classes in the JSX

3. **Update button text** and actions as needed

## 📦 Dependencies

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Styling
- **Radix UI** - Headless components
- **lucide-react** - Icons
- **Vite 5** - Build tool

## 🎨 Customization

### Update Colors
Edit `src/index.css` to modify CSS custom properties:
```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... more colors ... */
}
```

### Modify Responsive Breakpoints
Edit `tailwind.config.js` to change breakpoints.

### Change Icons
Replace lucide-react icons in `floating-header.tsx`:
```typescript
import { YourIcon } from 'lucide-react';
```

## 🌙 Dark Mode

The project supports dark mode out of the box. Add this to enable:
```html
<!-- In index.html or with JavaScript -->
<html class="dark">
```

## 📱 Breakpoints

- Mobile: < 1024px
- Desktop: ≥ 1024px

Adjust in the `hidden lg:flex` classes to change where the menu switches.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the 'dist' folder
```

### Other Platforms
1. Run `npm run build`
2. Upload the `dist` folder to your hosting

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [Vite Guide](https://vitejs.dev)

## 📝 License

ISC

## 🆘 Need Help?

See `INTEGRATION_GUIDE.md` for detailed setup and customization information.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**







