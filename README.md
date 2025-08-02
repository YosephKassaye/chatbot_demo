#  AI Chatbot with OpenAI, FastAPI, and Frontend

This is a simple end-to-end chatbot application using the OpenAI API as the LLM engine. The backend is built with FastAPI and the frontend is a lightweight HTML/JavaScript interface.

---

##  Project Structure

```
ChatBoatProject/
├── chatbot/
│   ├── Backend/
│   │   └── main.py               # FastAPI backend
│   ├── frontend/
│   │   ├── index.html            # Web UI
│   │   ├── script.js             # JS to call backend API
│   │   └── style.css             # Basic styling
├── .env                          # Your OpenAI API key
├── requirements.txt              # Python dependencies
└── README.md
```

---

##  Features

- Chat with OpenAI’s GPT-3.5 model
- FastAPI backend to handle messages
- Static HTML + JS frontend for interaction
- Environment variable support with `.env`

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/chatboatproject.git
cd ChatBoatProject
```

---

### 2. Set up your environment

Install required packages:

```bash
pip install -r requirements.txt
```

Create a `.env` file in the root directory:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

>  Do **not** share this API key.

---

### 3. Run the FastAPI backend

```bash
cd chatbot
uvicorn Backend.main:app --reload
```

Visit the interactive API docs at:  
[http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 4. Run the frontend

####  Option A: Open directly

Navigate to:

```
chatbot/frontend/index.html
```

Right-click and **Open in Browser**.

####  Option B: Serve with Python

```bash
cd chatbot/frontend
python -m http.server 5500
```

Then visit: [http://localhost:5500](http://localhost:5500)

---

## 📬 API Endpoint

| Method | URL               | Body (JSON)             | Description              |
|--------|-------------------|-------------------------|--------------------------|
| POST   | `/chat`           | `{ "message": "hi" }`   | Get response from GPT-3.5 |

---

## 📸 Screenshot

> Add a screenshot of your frontend UI here if needed.

---

##  Notes

- Make sure your backend and frontend are running on the same machine for local testing.
- The CORS policy in FastAPI is configured to allow all origins (dev mode).
- Only supports one-turn messages (no memory/threading).

---

##  Tech Stack

- Python 3.10+
- FastAPI
- OpenAI Python SDK (v1.x)
- HTML + JavaScript
- dotenv (`.env` support)

---

##  Deployment Ideas

- Backend: Render, Railway, Heroku, or Azure App Service
- Frontend: Netlify, Vercel, GitHub Pages (for static assets)

---

## 🛡 License

This project is for educational/demo purposes. Use responsibly and protect your API key.
