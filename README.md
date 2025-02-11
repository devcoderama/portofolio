# 🚀 Personal Portfolio Website

## 📝 Description
A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase your projects, skills, and professional journey.

## 🛠 Technologies Used
- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## ✨ Features
- Responsive design
- Project showcase
- Skills section
- Contact form
- Performance optimized
- SEO friendly

## 🏗 Project Structure
```
my-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1.png
│   │   └── project-2.png
│   ├── icons/
│   │   └── favicon.ico
│   └── documents/
│       └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectList.tsx
│   │   └── skills/
│   │       └── SkillItem.tsx
│   │
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   └── contact.tsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── types/
│   │   ├── Project.ts
│   │   └── Skill.ts
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   └── helpers.ts
│   │
│   └── data/
│       ├── projects.ts
│       └── skills.ts
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── README.md
└── .gitignore
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/devcoderama/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment
Deployed on Vercel:
1. Connect GitHub repository
2. Select `main` branch
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`

## 🎨 Customization
- Update `src/data/projects.ts` with your projects
- Modify `src/data/skills.ts` with your skills
- Customize colors in `tailwind.config.js`

## 📦 Dependencies
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion (optional)

## 🚀 Optimization Techniques
- Next.js Image component
- Lazy loading
- Minimal external libraries
- Static site generation

## 📄 License
[Your License - e.g., MIT]

## 📞 Contact
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments
- Next.js Team
- Tailwind CSS
- TypeScript Community
```