# Next.js Tasks Client

A minimal **Next.js (App Router)** UI that fetches tasks from the Laravel API and renders a responsive 3‑column grid with colored status chips (Pending, In Progress, Done).

No auth headers are required. The app only sends a standard `Accept: application/json` header.

---

## Requirements

- **Node.js 18+** (Node 20+ recommended)
- **npm** (bundled with Node)
- A running Laravel API at something like `http://127.0.0.1:8000` exposing **GET `/api/tasks`**

---

## 1) Clone & install

```bash
git clone https://github.com/<your-user-or-org>/<your-nextjs-repo>.git
cd <your-nextjs-repo>
npm install
```

---

## 2) Configure environment

Create a **.env.local** file if not already there in the project root and point it to your Laravel API:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api
```

> No tokens or API keys are used. The app fetches with `Accept: application/json` only.

---

## 3) Run the app

```bash
npm run dev
# open http://localhost:3000
```

- The home page fetches data **on the server** and renders the grid.
- Because it’s a **server-side fetch**, you won’t see this API call in the browser’s Network tab (this is expected).

---

## 4) Build for production

```bash
npm run build
npm start
# open http://localhost:3000
```

---

## Project structure (relevant files)

```
src/
  app/
    layout.jsx        # App shell (imports globals.css)
    page.jsx          # Fetches tasks and renders the grid
    globals.css       # Tailwind entry
  components/
    TaskCard.jsx      # Single card UI with colored status chip
  lib/
    api.js            # getTasks() — calls Laravel /api/tasks
```


---

## API expectation

The client expects **GET** `${NEXT_PUBLIC_API_BASE_URL}/tasks` to return:
- a resource-wrapped payload `{ "data": [ ... ] }`

`src/lib/api.js` safely unwraps either shape into an array.

Example:
```json
[
  { "id": 1, "title": "Set up project", "description": "Init Laravel repo and configs", "status": "Pending" },
  { "id": 2, "title": "Design API schema", "description": "Decide fields for Task entity", "status": "In Progress" },
  { "id": 3, "title": "Implement /tasks", "description": "Return JSON list of tasks", "status": "Done" }
]
```
---
## Notes

- Status chips:
  - **Pending** → light gray
  - **In Progress** → yellow
  - **Done** → green
- No authentication or secret headers are used.

---

## Implemented Feature


## Version 1.0.0

- List all tasks with its relevent status.