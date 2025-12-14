# Hero Component - Quick Reference

## 📍 File Locations

```
/src/components/ui/
├── hero-with-group-of-images-text-and-two-buttons.tsx  ← Main component
└── hero-demo.tsx                                         ← Demo/preview
```

## ✨ Current Features

✅ Responsive layout (mobile first)
✅ Badge with "We're live!" text
✅ Large headline (5xl → 7xl on desktop)
✅ Description paragraph
✅ Two action buttons with icons
✅ Image placeholder grid (3 boxes with varied sizes)
✅ Full Tailwind CSS styling
✅ Uses existing Button & Badge components

## 🎯 How It's Used

The Hero component is **already integrated** in `App.tsx`:

```typescript
import { Hero } from './components/ui/hero-with-group-of-images-text-and-two-buttons';

// In JSX:
<section className="w-full">
  <Hero />
</section>
```

## 🔄 Button Behavior

| Button | Variant | Icon | Text |
|--------|---------|------|------|
| Left | outline | PhoneCall | Jump on a call |
| Right | default (primary) | MoveRight | Sign up here |

Both buttons are currently static. Add `onClick` handlers by modifying the component.

## 🎨 Customization Examples

### Change Button Text
Edit `/src/components/ui/hero-with-group-of-images-text-and-two-buttons.tsx`:

```typescript
<Button size="lg" className="gap-4" variant="outline">
  Your Custom Text Here <PhoneCall className="w-4 h-4" />
</Button>
```

### Add Images Instead of Placeholders
```typescript
<div className="bg-muted rounded-md aspect-square">
  <img src="/your-image.jpg" alt="Feature 1" className="w-full h-full object-cover rounded-md" />
</div>
```

### Make Component Dynamic (Props)
Create a new version with props:

```typescript
interface HeroProps {
  title?: string;
  description?: string;
  badge?: string;
  onCall?: () => void;
  onSignup?: () => void;
}

function Hero({ 
  title = "This is the start of something!",
  description = "Managing a small business...",
  badge = "We're live!",
  onCall,
  onSignup
}: HeroProps) {
  // ... component JSX
}
```

## 📦 Dependencies Used

| Package | Version | Purpose |
|---------|---------|---------|
| lucide-react | ^0.298.0 | Icons (PhoneCall, MoveRight) |
| Button (custom) | - | Reusable button component |
| Badge (custom) | - | Reusable badge component |

## 🚀 Next Steps

1. **Test in browser** - Run `npm run dev` to see the component
2. **Customize text** - Update headline, description, and button labels
3. **Add images** - Replace placeholder divs with actual images
4. **Connect buttons** - Add onClick handlers for call and signup actions
5. **Adjust styling** - Modify Tailwind classes as needed

## 🔗 Related Components

- **Badge:** `/src/components/ui/badge.tsx` - Used for "We're live!" tag
- **Button:** `/src/components/ui/button.tsx` - Used for CTA buttons
- **Icons:** lucide-react library - PhoneCall, MoveRight icons

## ❓ Common Questions

**Q: Can I use images in the grid?**  
A: Yes! Replace the placeholder divs with `<img>` tags.

**Q: How do I make the buttons do something?**  
A: Add `onClick` handlers to the Button components, or convert to props.

**Q: Can I change the layout?**  
A: Yes, modify the grid classes. Change `grid-cols-1 md:grid-cols-2` to different breakpoints.

**Q: How do I add animations?**  
A: Use Tailwind's animation utilities or Framer Motion for more complex animations.

---

**Last Updated:** December 12, 2025
**Status:** ✅ Production Ready




