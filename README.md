# Accessoires Téléphoniques - Full Stack Project

This project is a full-stack application for managing phone accessories. It consists of a **FastAPI backend** and an **Angular frontend**.

---

## Project Overview

- **Frontend (Angular 20)**: Provides a user interface with pages for Dashboard, Products, Articles, and Menu.
- **Backend (FastAPI)**: Handles API endpoints for CRUD operations on articles.
- **Data**: In-memory list of articles in backend for demo purposes.
- **Design**: Responsive sidebar, topbar with menu, and consistent theme across pages.

### Features

- View all articles
- View single article details
- Add a new article
- Delete an article
- Dashboard statistics:
  - Total stock
  - Total value
  - Top 4 articles by value
  - Low stock count

---

## Folder Structure


/fastapi_accessoires/ # Backend (FastAPI)
main.py
requirements.txt
/frontend_accessoires/ # Frontend (Angular)
app.ts
dashboard.ts
article.ts
authentication.ts
assets/ # Screenshots and diagram
dashboard.png
products.png
articles.png
menu.png
api-diagram.png


---

## Backend Instructions

1. Navigate to the backend folder:
```bash
cd fastapi_accessoires

Create a virtual environment (optional but recommended):

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

Test the endpoints (example):

Get all articles: http://127.0.0.1:8000/articles

Get single article: http://127.0.0.1:8000/articles/1

Add an article: POST to /articles

Delete an article: DELETE /articles/{id}

Frontend Instructions

Navigate to the frontend folder:

cd frontend_accessoires

Install dependencies:

npm install

Run the Angular app:

ng serve

Open in browser:

http://localhost:4200
Screenshots

All screenshots are in the assets folder:

Dashboard Page: dashboard.png

Products Page: products.png

Articles Page: articles.png

Menu Page: menu.png

API Diagram

A simple diagram showing the interaction between frontend and backend:

Notes

Ensure the FastAPI server is running before using the Angular frontend.

CORS is enabled in FastAPI to allow Angular to make requests.

License

This project is for educational purposes only.

