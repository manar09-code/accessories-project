📱 Accessoires Téléphoniques - Full Stack Project

This project is a full-stack application to manage phone accessories. It consists of:

Frontend (Angular 20) – User interface with pages for Dashboard, Products, and Login.

Backend (FastAPI) – Handles API endpoints for article management.

The project demonstrates frontend-backend integration, data management, and responsive design.

🌟 Project Overview

Dashboard Page – Displays total stock, total value, top 4 articles by value, and low stock count. Fetches data from the backend.

Products Page – Lists products, allows interaction with the backend API.

Login Page – Authentication interface (if implemented).

Sidebar Menu – Collapsible, consistent theme across all pages.

Backend API – Manages articles with endpoints for GET, POST, DELETE operations.

Design – Clean, responsive, consistent styling.

📂 Folder Structure
accessoires-project/
├── backend/               # FastAPI backend
│   └── main.py
│   └── requirements.txt
├── frontend/              # Angular frontend
│   └── app.ts
│   └── dashboard.ts
│   └── products.ts
│   └── login.ts
│   └── services/
│   └── assets/            # Screenshots and diagram
│       ├── dashboard.png
│       ├── products.png
│       ├── login.png
│       └── api-diagram.png
├── README.md              # Project overview and instructions
⚡ Backend Instructions (Windows)

Open PowerShell and navigate to the backend folder:

cd backend

(Optional but recommended) Create a virtual environment:

python -m venv venv

Activate the virtual environment:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Start the FastAPI server:

python -m uvicorn main:app --reload --port 8000

Test the API endpoints in your browser or Postman:

Method	Endpoint	Description
GET	/articles	Retrieve all articles
GET	/articles/{id}	Retrieve a single article by ID
POST	/articles	Add a new article
DELETE	/articles/{id}	Delete an article by ID

Make sure the backend is running before using the Angular frontend.

⚡ Frontend Instructions (Windows)

Open PowerShell and navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Run the Angular development server:

ng serve

Open your browser:

http://localhost:4200

Ensure FastAPI backend is running so that the frontend can fetch data.

🖼 Screenshots

All screenshots are stored in frontend/assets/:

Page	Screenshot
Dashboard	

Products	

Login	
🔄 Frontend ↔ Backend Interaction

How it works:

Angular frontend sends HTTP requests to FastAPI backend.

Backend responds with JSON data for articles.

Frontend displays data in Dashboard and Products pages.

All operations (fetching, deleting, adding articles) are performed via API calls.

✅ Notes

Backend must be running to allow API calls.

CORS is enabled in FastAPI for communication with Angular.

Sidebar menu and topbar design are consistent across all frontend pages.

Project is for educational purposes.
