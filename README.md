
# Shaoli's Calculator 🕐

A modern, animated day-to-day hour calculator built with React, TypeScript, and Tailwind CSS. Calculate precise duration between any two dates and times with style!

## ✨ Features

- **Precise Calculations**: Calculate duration between any two dates and times
- **Beautiful Animations**: Smooth transitions and loading animations
- **Mobile Friendly**: Fully responsive design that works on all devices
- **Export & Share**: Export results to PDF and share via native sharing
- **Modern UI**: Glass morphism effects with gradient backgrounds
- **Accessible**: Built with accessibility in mind using shadcn/ui components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or download this repository**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser to** `http://localhost:8080`

### Build for Production
```bash
npm run build
```

## 🌐 Deploy to Vercel

1. **Upload to GitHub:**
   - Create a new repository on GitHub
   - Upload all files from this project
   - Push to your repository

2. **Deploy with Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## 📱 How to Use

1. **Set Start Date & Time**: Choose your starting date and time
2. **Set End Date & Time**: Choose your ending date and time  
3. **Calculate**: Click the calculate button to see the magic happen
4. **View Results**: See total hours plus detailed breakdown
5. **Export/Share**: Save as PDF or share your results

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **Vite** - Fast build tool and dev server
- **date-fns** - Modern date utility library
- **Lucide React** - Beautiful icons

## 📂 Project Structure

```
src/
├── components/
│   ├── HourCalculator.tsx      # Main calculator component
│   ├── DateTimePicker.tsx      # Date and time selection
│   ├── LoadingAnimation.tsx    # Loading animations
│   └── ResultDisplay.tsx       # Results with breakdown
├── lib/
│   ├── dateUtils.ts           # Date calculation utilities
│   └── exportUtils.ts         # PDF export and sharing
└── pages/
    └── Index.tsx              # Main page
```

## 🎨 Customization

The calculator is built with customization in mind:

- **Colors**: Modify the gradient colors in the Tailwind classes
- **Animations**: Adjust animation durations and effects
- **Layout**: Responsive grid system adapts to your needs
- **Branding**: Easy to update text and styling

## 💝 Created By

**Sharuck** - Made with ❤️ for Shaoli

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check the console for any error messages
2. Ensure all dependencies are installed correctly
3. Verify your Node.js version is 18 or higher

---

**Happy Calculating! 🎉**
