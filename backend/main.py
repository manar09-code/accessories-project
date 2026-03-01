# main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# 1️⃣ Create FastAPI app
app = FastAPI(title="API Accessoires Téléphoniques")

# 2️⃣ Enable CORS for Angular frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Angular app origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 3️⃣ Article model
class Article(BaseModel):
    id: int           # Unique ID
    name: str         # Accessory name
    price: float      # Price in euros
    stock: int        # Stock quantity

# 4️⃣ In-memory storage
articles: List[Article] = [
    Article(id=1, name="Coque iPhone 14", price=25.0, stock=50),
    Article(id=2, name="Chargeur USB-C", price=15.0, stock=100),
    Article(id=3, name="Écouteurs Bluetooth", price=45.0, stock=30),
]

# 5️⃣ Root endpoint
@app.get("/")
def root():
    return {"message": "FastAPI Accessories API is running!"}

# 6️⃣ Endpoints

# Get all articles
@app.get("/articles", response_model=List[Article])
def get_articles():
    return articles

# Get a single article by ID
@app.get("/articles/{article_id}", response_model=Article)
def get_article(article_id: int):
    for article in articles:
        if article.id == article_id:
            return article
    raise HTTPException(status_code=404, detail="Article not found")

# Add a new article
@app.post("/articles", response_model=Article)
def add_article(article: Article):
    # Ensure unique ID
    if any(a.id == article.id for a in articles):
        raise HTTPException(status_code=400, detail="Article ID already exists")
    articles.append(article)
    return article

# Delete an article by ID
@app.delete("/articles/{article_id}", response_model=dict)
def delete_article(article_id: int):
    global articles
    for article in articles:
        if article.id == article_id:
            articles = [a for a in articles if a.id != article_id]
            return {"message": f"Article with ID {article_id} deleted successfully"}
    raise HTTPException(status_code=404, detail="Article not found")