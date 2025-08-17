<picture>
  <source srcset="Frontend/public/logo/logoMuted.png" media="(prefers-color-scheme: dark)">
  <img src="Frontend/public/logo/logoColor.png" alt="Logo" height="100">
</picture>
<br></br>

**Filog** is a dynamic blogging platform, thoughtfully designed to provide a streamlined, secure, and immersive experience for bloggers and readers. Developed with **ReactJS** on the frontend and a custom **Node.js + TypeScript** backend, Filog enables users to create, share, and interact with blog content through an intuitive and visually pleasing interface. Filog emphasizes robust security, user-controlled access, and a scalable structure suitable for both single users and extensive communities.


## Table of Contents

* [Features](#features)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Challenges and Solutions](#challenges-and-solutions)

## Features

* **User Authentication and Profile Management:** Secure account creation, login, logout, and profile customization. Filog uses secure authentication with Google OAuth and custom methods, ensuring each user can authenticate safely.

* **Blog Creation and Management:** Users can create, edit, and delete blog posts with options to add text, images, and other media.

* **Interactions and Engagement:** Users can like and comment on posts, follow other profiles, and view posts from followed users. Every interaction is securely stored and processed in the backend.

* **Customizable Modals for UX Enhancements:** Reusable modals enable notifications, forms, and alerts, adding to a streamlined user experience.

* **GSAP Animations:** The interface includes smooth animations for an engaging visual experience, crafted to work well across various devices without relying on heavy 3D libraries like Three.js.

* **Avatar Management:** Using the updated DiceBear API, each user receives a unique avatar, enhancing visual identity on the platform.

* **Open Graph Protocol (OGP) Integration:** We have integrated Open Graph functionality to improve how Filog blog posts are shared on social media platforms. By utilizing **Vercel Functions** with Server-Side Rendering (SSR), we generate dynamic Open Graph meta tags for each blog post. This ensures that shared links will display rich previews such as post titles, descriptions, and images, enhancing the user experience when posts are shared on platforms like Facebook, Twitter, and LinkedIn.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/dev-raghvendramisra/filog.git
   cd filog
   ```

Install Dependencies:

```bash
npm install
```

Environment Setup: Configure your .env file with the necessary backend credentials :

```bash
VITE_BACKEND_URL=your_backend_url
VITE_JWT_SECRET=your_jwt_secret
```

Start the Development Server:

```bash
npm run dev
```

# Filog Project Structure and Key Functions

## Project Structure

Filog’s project structure is organized into cohesive modules:

* **Redux Slices**: Includes `auth`, `alert`, `blog`, `form`, `users`, `userPosts`, `search`, etc slices for state management.
* **Configuration Directory**: The `conf` directory holds configuration settings, managed through the `conf.js` file.
* **Services**: Organized into classes and modularized for reusability, such as authentication and interaction services.

## Tech used

![auto](https://skillicons.dev/icons?i=react,redux,tailwind,mongodb,docker,express,nodejs,typescript)

## Challenges and Solutions

### 1. Issue: Managing User Access and Action Authorization

* **Problem**: Giving users direct access to document updates could lead to unauthorized modifications or expose sensitive data.
* **Solution**: Introduced an intermediate authorization layer in the backend that verifies user permissions and securely handles actions like following, liking, and commenting.

### 2. Issue: Securing Follow/Unfollow, Like/Unlike Actions

* **Problem**: Actions like follow/unfollow and like/unlike require secure handling to prevent unauthorized actions.
* **Solution**: Used structured API routes with JWT-based authorization and strict backend checks to validate and process interactions securely, ensuring data integrity.

### 3. Issue: Reducing Loading Time by Managing Avatar Creation

* **Problem**: Generating unique avatars for users initially slowed down profile creation.
* **Solution**: Integrated **DiceBear API** directly into the profile setup, generating avatars asynchronously based on user ID. This minimized delay in the setup process and ensured every user had a unique avatar without requiring extensive processing time.

### 4. Issue: Handling Simultaneous Follow Actions

* **Problem**: When multiple users attempt to follow the same profile at once, it can cause update conflicts.
* **Solution**: We implemented optimistic updates on the frontend and conflict resolution logic on the backend using atomic update operations in MongoDB. This ensures accurate and consistent user relationship data without risking duplication or data loss.

### Why This is Useful

By migrating from BaaS to a fully custom backend, we gained greater control over authentication, data integrity, and scalability. This structure gives Filog the flexibility to evolve, support advanced use cases, and deliver a consistent, secure experience even under high user interaction.
