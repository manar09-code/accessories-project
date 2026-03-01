# 📱 Phone Accessories App

This project is a **full-stack web application** for managing phone accessories. It consists of:

- **Frontend**: Angular 20 application
- **Backend**: FastAPI application

The app allows users to view, add, and delete phone accessory articles.

---

## 🖥️ Folder Structure


project-root/
│
├─ frontend_accessories/ # Angular 20 app
│ ├─ src/app/
│ │ ├─ components/
│ │ │ ├─ dashboard/ # Dashboard page
│ │ │ ├─ products/ # Products page
│ │ │ └─ login/ # Login page
│ │ ├─ services/
│ │ │ ├─ article.service.ts
│ │ │ └─ authentication.service.ts
│ │ └─ app.ts # Main Angular module
│ └─ assets/ # Screenshots
│
├─ backend_accessories/ # FastAPI app
│ ├─ main.py # API endpoints
│ └─ requirements.txt # Python dependencies
│
└─ README.md # Project overview


---

## ⚡ Frontend (Angular) Setup

1. Open **PowerShell** in the `frontend_accessories` folder.
2. Install dependencies:

```powershell
npm install

Run the Angular app:

ng serve --open

The app will open at http://localhost:4200

Frontend Pages

Dashboard Page: Overview of articles, total stock, and top articles.

Products Page: Manage and view products.

Login Page: Authentication.

🖥️ Backend (FastAPI) Setup

Open PowerShell in the backend_accessories folder.

Create a virtual environment (optional but recommended):

python -m venv venv
.\venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run the FastAPI server:

python -m uvicorn main:app --reload --port 8000

The API will run at http://127.0.0.1:8000

Backend Endpoints
Endpoint	Method	Description
/articles	GET	Get all articles
/articles/{id}	GET	Get a single article by ID
/articles	POST	Add a new article
/articles/{id}	DELETE	Delete an article by ID
🔗 Frontend & Backend Interaction

Frontend communicates with backend via HTTP requests.

Angular pages fetch data using ArticleService.

FastAPI provides JSON responses with article data.

📸 Screenshots

All screenshots are in frontend_accessories/assets/:

dashboard.png – Dashboard overview

products.png – Products page

login.png – Login page

📝 Notes

The app is Windows-compatible.

All design is consistent across sidebar, top menu, and pages.

Ensure FastAPI backend is running before using the Angular frontend.

✅ Author / Submission

Prepared for academic purposes.

Demonstrates full-stack development using Angular and FastAPI.
