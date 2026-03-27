# Master Portfolio Creation Prompt

Copy and paste this entire prompt into any AI Coding Assistant (e.g., Antigravity, Claude, GPT-4o) to recreate this exact premium portfolio.

---

## **Objective**
Build a high-performance, premium, and futuristic React-based portfolio for **Jeevan Kumar Achyutha**. The theme is "Futuristic Cybersecurity/AI" with neon accents, dark mode (#030014), and glassmorphism.

## **Technical Stack (The Foundation)**
- **Framework:** Vite + React (v18+)
- **Styling:** Tailwind CSS (Modern Glassmorphism)
- **UI Components:** Material UI (for specific Tabs, Modals) & Lucide React (for icons)
- **Animations:** AOS (Animate on Scroll) for scroll effects, custom CSS for "Glitch/Neon" borders
- **Interactivity:** Framer Motion or simple Tailwind group-hovers
- **Backend:** Firebase (Firestore for projects and a Guestbook/Comments section)

## **Visual & Design Language**
1. **Background:** A deep space dark mode (`#030014`) with a 3D animated particle background or "blob" animation.
2. **Typography:** Use **Poppins** (Google Fonts) with bold gradients for headings.
3. **Glassmorphism:** All cards and sections should use `bg-white/5`, `backdrop-blur-xl`, and `border-white/10`.
4. **The "Glitch Effect":** Implement a custom CSS animation called `glitch-border` that shifts border colors (Purple, Cyan, Magenta) and adds a subtle glow on hover.
5. **Color Palette:** Primary (#6366f1 - Indigo), Secondary (#a855f7 - Purple), Accent (#ff00f5 - Fuchsia).

## **Key Pages & Component Details**

### **1. Home (Hero Section)**
- **Feature:** A large, gradient heading: **"Hello, I'm Jeevan Kumar Achyutha"**.
- **Subtitle:** "Python & ML Developer" (Typing effect if possible).
- **Background Video/Image:** A subtle, futuristic background in `/public/background.mp4` or a high-res abstract wallpaper.

### **2. About (Story & Stats)**
- **Bio:** "MCA student at Swarnandhra College of Engineering and Technology (2026). Deeply passionate about AI/ML systems and Python development. Expert in deep learning models (CNN, ResNet, Xception)."
- **Stats Grid:** Three cards showing "Total Projects", "Certificates", and "Years of Experience" (fetching count from Firebase `localStorage` cache).
- **Profile Image:** `/public/AboutPhoto.jpg` with a glowing halo animation.
- **Info Tiles:** Small tiles for "🎓 Studying", "📍 Location (Ramachandhrapuram, AP)", and "🎯 Goal".

### **7. Brand Identity & Visuals**
- **Main Profile Photo:** `/public/AboutPhoto.jpg` (Plaid shirt, looking away)
- **Home Page Title:** Jeevan Kumar (Gradient: White to Purple)
- **Design Theme:** Futuristic Dark Mode (Neon/Glitch Border Effects)
- **Component Styles:** Glassmorphism, AOS Animations, Lucide Icons

---

## **Media & Assets Gallery**

### **Profile Image**
- **Path:** `/public/AboutPhoto.jpg`
- **Path:** `../public/AboutPhoto.jpg`
![Profile](file:///C:/Users/chait/OneDrive/Desktop/Portofolio%20Update%202/public/AboutPhoto.jpg)
- **Description:** Professional/Relaxed portrait.

### **Project Icons**
- **Project 1 Icon (Cloud):** `../public/cloud_load.png`
![Cloud](file:///C:/Users/chait/OneDrive/Desktop/Portofolio%20Update%202/public/cloud_load.png)
  - **Recreation Prompt:** "A premium 3D isometric cloud icon, glowing purple and cyan nodes, network lines connecting them, futuristic, glass texture, high resolution, black background."

- **Project 2 Icon (Egg):** `../public/egg_crack.png`
![Egg](file:///C:/Users/chait/OneDrive/Desktop/Portofolio%20Update%202/public/egg_crack.png)
  - **Recreation Prompt:** "A realistic egg with digital scan lines and crack detection overlays in cyan and magenta, high-tech, medical/industrial scan look, isolated on black background."

### **Tech Stack Icons**
- **Python:** `../public/python.svg`
- **Machine Learning (Custom Icon):** `../public/ml.svg`
![ML Icon](file:///C:/Users/chait/OneDrive/Desktop/Portofolio%20Update%202/public/ml.svg)
- **React:** `/public/reactjs.svg`

### **Certification Thumbnails**
- **Location:** `/public/certificates/`
- **Structure:** Thumbnails for internal certifications and participation certificates.

### **3. Portfolio (The Showcase)**
- **Structure:** Use a 3-tab layout: [Projects], [Certificates], [Tech Stack].
- **Projects:** Fetch the following two projects from Firebase:
    - **Cloud Load Distribution:** Python + Cloud Computing + AI. GitHub: [Link](https://github.com/achyuthajeevankumar/AI-powered-Load-Distribution-for-Scalable-Cloud-Systems)
    - **Egg Crack Detection:** Deep Learning + CNN + Python. GitHub: [Link](https://github.com/achyuthajeevankumar/egg_crack_detection). Live Demo: [Link](https://egg-crack-detection.onrender.com)
  - Cards should have glowing borders on hover.
- **Certificates:** A grid of images (located in `/public/certificates/`) that open in a Material UI Modal with a full-view option.
- **Tech Stack:** Display modern icons (Python, ML, CNN, JS, React) with a primary focus on Python and AI.

### **4. Contact (Connectivity)**
- **Layout:** 2-column on large screens. Left: Contact Form. Right: Real-time Guestbook.
- **Contact Form:** Use `FormSubmit.co` directed to `achyuthajeevankumar@gmail.com`.
- **Guestbook (Comments):** A real-time comment section using Firebase Firestore. Collection: `komentar`. Fields: `name`, `content`, `createdAt`.

## **Critical Interactions**
- **Smooth Scrolling:** `scroll-behavior: smooth` in `index.css`.
- **Custom Scrollbar:** Thin, indigo-colored scrollbar with a hover glow.
- **Hover Transitions:** All buttons and cards must `scale-105` on hover with a 300ms duration.
- **AOS Animations:** Use `fade-up`, `fade-right`, and `zoom-in` attributes for all sections.

---

### **Prompt Instructions for the AI Assistant:**
*"Build a React portfolio project using the tech stack above. Prioritize visual excellence and micro-animations. Ensure the 'Glitch Border' CSS is defined in the global index.css. Use the gathered bio, project links, and Firebase config to make it fully functional immediately."*
