# AI Agent Instructions for Cody Frost's ITP Portfolio Website

## Project Overview
This is an academic portfolio website for Cody Frost's work at ITP (Interactive Telecommunications Program). It's a static HTML site showcasing course blogs and projects, hosted on AWS Amplify.

## Architecture & Tech Stack
- **Frontend**: Static HTML/CSS with minimal JavaScript
- **Hosting**: AWS Amplify (static site deployment)
- **Backend**: AWS Amplify Gen2 with TypeScript (auth + data layer, currently unused)
- **Structure**: Course-organized blog entries with media assets

## Directory Organization Pattern
The site follows a course-based content organization:
```
├── index.html                    # Main landing page with navigation
├── styles.css                    # Global stylesheet (system fonts, clean typography)
├── amplify.yml                   # Static site deployment config
├── App/                          # "Applications" course content
├── FMA/                          # "Fabricating Mechanical Automatons" course
├── CritObj/                      # "Critical Objects" course  
├── PEC/                          # Additional course directory
└── amplify/                      # AWS backend config (auth/data resources)
```

## Content Patterns
- **Blog Entries**: Self-contained HTML files with embedded CSS links to `/styles.css`
- **Naming Convention**: `[Course]Blog[#]v[version].html` (e.g., `FMABlog1v1.html`)
- **Media Assets**: Stored in `media/` subdirectories within each course folder
- **Content Structure**: Academic reflection pieces, project documentation, and multimedia

## Key Development Guidelines

### HTML Structure
- Each blog post is a standalone HTML document with standard doctype
- Always link to the global stylesheet: `<link rel="stylesheet" href="/styles.css">`
- Use semantic `<main>` wrapper for content
- Images reference local `media/` folders with descriptive alt text

### Navigation & Linking
- Main `index.html` serves as course directory and navigation hub
- Internal links use relative paths (e.g., `App/ApplicationsBlog1v1.html`)
- External links include `target="_blank"` for academic references
- Week-by-week organization clearly labeled in navigation

### AWS Amplify Configuration
- **Static Deployment**: `amplify.yml` configured for static HTML (no build process)
- **Backend Resources**: Auth and data layers defined in TypeScript but currently unused
- **Future Backend**: Schema includes basic Todo model with guest authorization

### Styling Philosophy
- **Typography**: System fonts (system-ui, Arial fallback)
- **Layout**: Centered content with max-width 700px
- **Responsive**: Simple, readable design prioritizing content
- **Colors**: Minimal palette (#222 text, #0074d9 links)

## Critical Workflows

### Adding New Blog Posts
1. Create HTML file in appropriate course directory
2. Follow naming convention: `[Course]Blog[#]v[version].html`
3. Add media assets to course's `media/` folder
4. Update `index.html` navigation with new entry
5. Ensure proper stylesheet linking and semantic HTML structure

### AWS Amplify Deployment
- Automatic deployment from Git repository
- No build step required (static files served directly)
- Backend resources available but not currently utilized in frontend

### Content Organization
- Each course gets its own top-level directory
- Maintain chronological order in navigation (Week 1, Week 2, etc.)
- Academic content should include proper citations and references
- Multimedia documentation preferred for projects and prototypes

## Important Notes for AI Agents
- This is an **academic portfolio**, not a commercial site - maintain appropriate tone
- **Preserve existing content structure** - don't reorganize without explicit request
- **Media files are locally hosted** - ensure proper relative path references
- **Backend is configured but unused** - focus on static site improvements unless backend integration specifically requested
- Never change speeling or grammar unless explicitly asked
- Never change formatting or organization unless explicitly asked
