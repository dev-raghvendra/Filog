# 🧠 Filog — Backend Showcase


## Tech Stack
![auto](https://skillicons.dev/icons?i=react,redux,tailwind,mongodb,docker,express,nodejs,typescript)

---

## 📘 Overview

Filog is a production-ready backend for a modern blogging platform.
This repository contains a complete custom backend powering authentication, posts, comments, likes, follows, avatar generation, and dynamic Open Graph (OG) image generation. The frontend (React) is present as a demo; this repository is presented as a **backend engineering case study**.

---

## 🚀 Core Features

### Authentication & Security

* JWT-based authentication with best-practice token handling.
* Google OAuth 2.0 integration for social login.
* Password hashing and input validation middleware.

### Social Blogging Functionality

* Create / Edit / Delete posts with ownership-enforced authorization.
* Commenting system and like/unlike semantics.
* Follow / unfollow user relationships.
* Atomic MongoDB updates (`$addToSet`, `$pull`) and conflict-safe patterns to prevent race conditions.

### OG & Avatar

* Server-side dynamic Open Graph image generation (Vercel functions / SSR approach documented).
* DiceBear avatar generation integrated and handled asynchronously during profile creation.

### Infrastructure & Devops

* Dockerfile for containerized builds and simple deployment.
* Environment-driven configuration (separate dev/prod flow).
* Centralized error handling and request validation.

---

## 🧱 Repo Layout (high-level)

```
Filog/
├── Backend/                 # Backend source (primary showcase)
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/           # OG generator, avatar helpers, email, etc.
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── Frontend/                # Demo React UI (marked experimental in this README)
└── README.md
```

> Note: The Frontend is a demo UI (React, GSAP animations mentioned). The backend is the production-quality portion of this project and is the primary focus.

---

## 🔍 API Summary

| Method | Endpoint                  | Description              | Auth |
| ------ | ------------------------- | ------------------------ | ---- |
| POST   | `/api/auth/register`      | Register user            | ❌    |
| POST   | `/api/auth/login`         | Login and receive JWT    | ❌    |
| GET    | `/api/users/:id`          | Get user profile         | ✅    |
| POST   | `/api/posts`              | Create post              | ✅    |
| GET    | `/api/posts/:id`          | View post                | ❌    |
| PATCH  | `/api/posts/:id`          | Edit post (owner only)   | ✅    |
| DELETE | `/api/posts/:id`          | Delete post (owner only) | ✅    |
| POST   | `/api/posts/:id/comments` | Add comment              | ✅    |
| POST   | `/api/posts/:id/like`     | Like / unlike            | ✅    |
| POST   | `/api/users/:id/follow`   | Follow / unfollow        | ✅    |

*(Add precise request/response schemas or link an OpenAPI/Swagger file if you add one.)*

---

## ⚡ Quick Local Setup

1. Clone & install

```bash
git clone https://github.com/dev-raghvendra/Filog.git
cd Filog/Backend
npm install
```

2. Create `.env` (example)

```
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
GOOGLE_CLIENT_ID=<id>
GOOGLE_CLIENT_SECRET=<secret>
PORT=4000
```

3. Run in development

```bash
npm run dev
# or
npm run build
npm start
```

Server defaults to `http://localhost:4000` (update PORT in .env as needed).

### Docker (optional)

```bash
docker build -t filog-backend .
docker run --env-file .env -p 4000:4000 filog-backend
```

---

## 🧪 Quick API Examples

```bash
# Register
curl -X POST http://localhost:4000/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"name":"Raghvendra","email":"user@example.com","password":"P@ssw0rd"}'

# Login (returns JWT)
curl -X POST http://localhost:4000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"user@example.com","password":"P@ssw0rd"}'

# Create post (replace <JWT>)
curl -X POST http://localhost:4000/api/posts \
  -H "Authorization: Bearer <JWT>" \
  -H 'Content-Type: application/json' \
  -d '{"title":"Hello","content":"This is Filog backend."}'
```

---

## 🧠 Design Decisions (why this is backend-first)

* **Stateless JWT** for horizontal scaling and simpler session handling.
* **MongoDB atomic operations** to maintain consistent follower/like counts under concurrency.
* **OG generation server-side** to provide reliable social previews (documented use of Vercel functions).
* **Async avatar creation** (DiceBear) to keep user flows snappy.
* **Dockerized** for CI/CD-friendly deployment.

---

## ✅ What I implemented (from repo)

* Custom Node.js + TypeScript backend (core logic implemented).
* Google OAuth & JWT authentication flows.
* DiceBear avatar integration.
* Server-side Open Graph generation (Vercel functions / SSR approach referenced).
* Frontend demo implemented with React + GSAP (kept as demo; not the focus).

---

## 📦 Suggested repo additions (quick wins)

1. Add `Backend/README.md` (this file) and move original README content into `Frontend/README.md` or `README-OLD.md`.
2. Add an `openapi.json` (small skeleton) and link it from this README.
3. Export a Postman collection and link it for reviewers to try the API.
4. Add a short 60–90s demo GIF showing `curl` → post creation → DB entry.
5. Mark Frontend as **Experimental / Demo** at the top to guide reviewers.

---

## 🗾 Future improvements (roadmap)

* Add Jest + Supertest integration tests for auth and post flows.
* Redis caching for hot resources and rate-limiting.
* Notifications via WebSocket / real-time updates.
* CI GitHub Action which lints, runs tests and builds Docker image.

---

## 👨‍💻 About the author

**Raghvendra Misra** — I built Filog’s backend from scratch to control auth, data integrity, and link previews. This repo showcases backend design, authentication flows, and production-minded patterns.

Repository: [https://github.com/dev-raghvendra/Filog](https://github.com/dev-raghvendra/Filog)

---

🌟 If you find this project useful or interesting, give it a star — it helps me showcase my backend work!
