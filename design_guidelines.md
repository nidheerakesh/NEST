# Nest Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based Design inspired by Notion's clean productivity aesthetic, Calm's peaceful wellness interface, and Instagram's social warmth.

**Core Philosophy:** Create a living, breathing interface that feels like opening a cozy digital sanctuary—peaceful, personal, and emotionally intelligent. Every interaction should reduce stress, not add to it.

## Color System

### Mood-Adaptive Palette
**Primary Base Colors (adapts based on recent moods):**
- Peaceful/Default: 160 45% 88% (soft sage)
- Happy/Energized: 45 80% 85% (warm peach)
- Tired/Low: 220 30% 85% (cool lavender)
- Focused/Productive: 200 40% 88% (calm sky blue)

**Supporting Colors:**
- Background (Light): 30 20% 98% (warm cream)
- Background (Dark): 220 15% 15% (deep charcoal with slight warmth)
- Text Primary: 220 20% 25% (soft black)
- Text Secondary: 220 15% 50% (medium gray)
- Accent/CTA: 340 60% 70% (gentle coral pink)

**Mood Indicator Colors:**
- ☀️ Happy: 50 85% 75%
- 🌧️ Tired: 210 40% 70%
- 🌸 Peaceful: 280 45% 80%
- 🔥 Energized: 15 80% 65%

## Typography

**Font Families:**
- Primary: 'Inter' (body, UI elements) - clean, modern readability
- Accent: 'DM Sans' (headings, emphasis) - friendly, slightly rounded
- Monospace: 'JetBrains Mono' (time displays, stats)

**Scale:**
- Hero/Welcome: text-4xl md:text-5xl font-light (DM Sans)
- Section Headers: text-2xl md:text-3xl font-medium
- Card Titles: text-lg font-semibold
- Body: text-base font-normal
- Metadata: text-sm text-secondary
- Micro (status): text-xs

## Layout System

**Spacing Philosophy:** Use Tailwind units 2, 4, 8, 12, 16 for consistent rhythm
- Micro spacing: p-2, gap-2 (tight elements)
- Component padding: p-4, p-6 (cards, inputs)
- Section spacing: py-8, py-12, py-16 (vertical rhythm)
- Container max-width: max-w-7xl for main content

**Grid Patterns:**
- Dashboard: 3-column grid on lg, 2-col on md, 1-col on mobile
- Timetable: Full-width responsive table/calendar view
- Friend Cards: 2-3 columns for status cards
- Habit Trackers: Grid with equal-height cards

## Component Library

### Navigation
- Top navigation with subtle shadow (shadow-sm)
- Logo with small emoji/icon
- Profile dropdown with mood indicator
- Minimal, translucent sidebar for secondary navigation

### Cards & Containers
- Rounded corners: rounded-2xl for main cards, rounded-xl for nested
- Soft shadows: shadow-md with colored tints matching mood
- Frosted glass effect for overlays: backdrop-blur-md bg-white/80
- Hover: subtle scale (hover:scale-[1.02]) and shadow increase

### Timetable Display
- Timeline view with color-coded class blocks
- Current time indicator with gentle pulse animation
- Free slots highlighted with subtle pattern
- Edit mode: inline editing with smooth transitions

### Mood & Habit Tracking
- Large emoji selectors with haptic-like visual feedback
- Color blob backgrounds that subtly shift
- Streak counters with celebratory micro-animations
- Progress rings using SVG with gradient fills

### Task Management
- Checkbox with satisfying completion animation
- Vibe tag pills: rounded-full with icon + label
- Drag handles with subtle texture
- Subtask indentation with connecting lines

### Pomodoro Timer
- Circular progress indicator with breathing animation
- Themed backgrounds (forest, cafe, library themes)
- Break screen with encouraging messages in handwritten-style font
- Gentle chime sound indicators

### Friend Connection
- Avatar grid with status rings (green=free, yellow=busy, red=in class)
- Mood emoji overlays on avatars
- "When we're all free" group calendar view
- Quick study session planner with availability matrix

### AI Assistant
- Chat bubble interface with warm, conversational tone
- Suggestion cards with gentle color gradients
- Context-aware prompts in floating pill buttons
- Typing indicator with personality

## Images & Visual Assets

**Hero Section:**
- Warm, illustrated scene of cozy study space (desk with plants, soft lighting)
- Abstract gradient backgrounds with subtle grain texture
- No hero image needed - use mood-adaptive color fields instead

**Icons:**
- Heroicons for UI elements
- Custom emoji set for mood/vibe indicators
- Illustrated icons for features (hand-drawn aesthetic)

**Decorative Elements:**
- Subtle noise texture overlays (opacity-[0.03])
- Organic blob shapes in backgrounds
- Floating particle effects (very minimal)

## Animations

**Use Sparingly - Only Where Meaningful:**
- Mood selection: Scale + color shift on click
- Task completion: Checkbox fill + confetti burst (once per task)
- Page transitions: Gentle fade (duration-200)
- Timetable updates: Smooth height/position changes
- Friend status changes: Soft color pulse

**Prohibited:**
- Continuous looping animations
- Aggressive parallax scrolling
- Distracting background movements

## Page-Specific Layouts

### Dashboard (Home)
- Welcome header with personalized greeting + current mood
- 3-column grid: Today's classes | Tasks/Habits | Friends' status
- Quick action bar: Add task, Log mood, Start timer
- AI suggestion card at bottom if relevant

### Timetable Page
- Week view with color-coded classes
- Batch selector dropdown (if admin uploaded multiple)
- Edit mode toggle for personal adjustments
- Export/sync options

### Friends Page
- Grid of friend cards with moods and availability
- "Plan Together" CTA for group study sessions
- Filter by available/busy/in class

### Profile & Settings
- Mood history timeline visualization
- Habit streak calendar
- Batch info display with edit capability
- Theme customization (preset mood palettes)

## Accessibility & Polish

- WCAG AA contrast ratios maintained
- Focus states: ring-2 ring-offset-2 with mood-adaptive colors
- Dark mode with inverted mood-adaptive colors
- Generous tap targets (min 44px)
- Loading states: skeleton screens with shimmer, not spinners
- Empty states: Encouraging illustrations with gentle copy