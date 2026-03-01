# Accessoires Téléphoniques - Full Stack Project

This project is a full-stack application for managing phone accessories. It consists of a **FastAPI backend** and an **Angular frontend**.

---

## Project Overview

- **Frontend (Angular 20)**: Provides a user interface with pages for Dashboard, Products, and Login.  
- **Backend (FastAPI)**: Handles API endpoints for CRUD operations on articles.  
- **Data**: In-memory list of articles in backend for demo purposes.  
- **Design**: Responsive sidebar menu, topbar with menu button, and consistent theme across pages.

### Features

- **Dashboard Page**
  - Displays total stock, total value, top 4 articles by value, and low stock count.
  - Lists all articles fetched from the API.
- **Products Page**
  - View products and interact with the API.
- **Login Page**
  - Authenticate users (if implemented).  
- **Sidebar Menu**
  - Collapsible, consistent across pages.

---

## Folder Structure


accessoires-project/
├── backend/ # FastAPI backend
│ └── main.py
│ └── requirements.txt
├── frontend/ # Angular frontend
│ └── app.ts
│ └── dashboard.ts
│ └── products.ts
│ └── login.ts
│ └── services/
│ └── assets/ # Screenshots and diagram
│ ├── dashboard.png
│ ├── products.png
│ ├── login.png
│ └── api-diagram.png
├── README.md # This file


---

## Backend Instructions (FastAPI)

1. Navigate to the backend folder:

```bash
cd backend

(Optional) Create a virtual environment:

python -m venv venv

Activate the virtual environment:

Windows:

venv\Scripts\activate

macOS/Linux:

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Run the FastAPI server:

python -m uvicorn main:app --reload --port 8000

Test the API endpoints:

Method	Endpoint	Description
GET	/articles	Get all articles
GET	/articles/{id}	Get a single article by ID
POST	/articles	Add a new article
DELETE	/articles/{id}	Delete an article by ID
Frontend Instructions (Angular 20)

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the Angular development server:

ng serve

Open in browser:

http://localhost:4200
Screenshots

All screenshots are in the assets folder:

Page	Screenshot
Dashboard	

Products	

Login	
Frontend ↔ Backend Interaction Diagram

Explanation:

The Angular frontend sends HTTP requests to the FastAPI backend.

Backend serves JSON responses for articles.

Frontend displays data on Dashboard and Products pages.

All actions (e.g., fetching or deleting articles) are done via API calls.

Notes

Ensure the FastAPI server is running before interacting with the Angular frontend.

CORS is enabled in FastAPI to allow requests from Angular.

Sidebar menu design is consistent across Dashboard and Products pages.

License

This project is for educational purposes only.
