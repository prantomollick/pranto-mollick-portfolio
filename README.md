# Personal Portfolio

## Project Overview

This repository contains the source code for a personal portfolio website. The site is built as a modern web application to showcase projects, skills, and professional experience. It leverages the latest web technologies to provide a fast and responsive user experience.

## Technical Stack

The project is developed using the following key technologies:

- **Framework:** Next.js (React Framework for production)
- **Frontend Library:** React
- **Language:** JavaScript / TypeScript (Specify which one or both if applicable)
- **Styling:** Tailwind CSS (Based on the HTML class analysis)
- **Component Architecture:** React functional components and potentially hooks for state management and side effects.
- **Routing:** Next.js File-system based routing
- **Deployment:** Vercel (Common for Next.js, indicated by the previous URL)
- **Version Control:** Git

## Architecture

The application follows a component-based architecture using React. Next.js provides the framework for server-side rendering or static site generation (depending on configuration), routing, API routes (if used), and optimized builds.

Key architectural patterns and features utilized:

- **Component-Based UI:** The user interface is broken down into reusable React components.
- **File-System Routing:** Pages are defined by files in the `pages` or `app` directory (depending on Next.js version).
- **API Routes (Optional):** Potential use of Next.js API routes for handling contact form submissions or other backend logic.
- **Static Site Generation (SSG) / Server-Side Rendering (SSR):** Leveraging Next.js capabilities for performance (Specific rendering strategy can be mentioned if known).
- **Module Bundling:** Handled by Next.js (based on Webpack/SWC).
- **CSS Framework:** Utility-first CSS framework (Tailwind CSS) for styling.

## Project Structure

A typical Next.js project structure might look like this:

```

.
|-- README.md
|-- app
|   |-- favicon.ico
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components
|   |-- Project.tsx
|   |-- about.tsx
|   |-- contact.tsx
|   |-- experience.tsx
|   |-- header.tsx
|   |-- intro.tsx
|   |-- projects.tsx
|   |-- section-divider.tsx
|   |-- section-heading.tsx
|   `-- skills.tsx
|-- context
|   --- active-section-context.tsx
|-- hooks
|   --- use-section-in-view.ts
|-- lib
|   `-- data.ts
|-- next-env.d.ts
|-- next.config.mjs
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- public
|   |-- corpcomment.png
|   |-- cv.pdf
|   |-- pranto.png
|   |-- rmtdev.png
|   `-- wordanalytics.png
|-- server-actions
|   `-- send-email.ts
|-- tailwind.config.ts
|-- tsconfig.json
`-- types
    `-- section-name-type.ts

````


## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/prantomollick/pranto-mollick-portfolio.git
    ```

2. Navigate to the project directory:
    ```bash
    cd pranto-mollick-portfolio
    ```

3. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Development

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
````

This will start a local development server, typically at `http://localhost:3000`, with hot-reloading enabled.

## Building for Production

To build the project for production deployment:

```bash
npm run build
# or
yarn build
```

This command creates an optimized build of your application in the `.next` folder.

## Deployment

The application can be easily deployed to platforms like Vercel, Netlify, or other Node.js compatible hosting services.

* **Vercel:** Connect your GitHub repository to Vercel for automatic deployments on every push.
* **Other platforms:** Consult their documentation for deploying Next.js applications.


## Contact

How to reach you for collaborations, job opportunities, or questions.
*   Pranto Mollcik - [prantomollick01@gmail.com](mailto:prantomollick01@gmail.com).
*   LinkedIn - [@prantomollick](https://www.linkedin.com/in/prantomollick/)
*   GitHub - [@prantomollick](https://github.com/prantomollick)
*   Website - [prantomollick.com](https://prantomollick.com)

