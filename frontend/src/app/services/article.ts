// #1 Marks this class as an injectable Angular service.
import { Injectable } from '@angular/core';
// #2 HttpClient is Angular's HTTP API for backend requests.
import { HttpClient } from '@angular/common/http';
// #3 Observable represents asynchronous HTTP responses.
import { Observable } from 'rxjs';

// #4 API data shape for one article/product item.
export interface Article {
  // #4.1 Unique article identifier.
  id: number;
  // #4.2 Display name.
  name: string;
  // #4.3 Unit price.
  price: number;
  // #4.4 Quantity in stock.
  stock: number;
  // #4.5 Image URL/path.
  image: string;
}

// #5 Service responsible for CRUD calls to the articles backend API.
@Injectable({
  // #5.1 Register service in the application root injector (singleton).
  providedIn: 'root',
})
export class ArticleService {
  // #6 Base backend URL used by all service requests.
  private readonly baseUrl = 'http://127.0.0.1:8000';

  // #7 Inject HttpClient to perform HTTP requests.
  constructor(private http: HttpClient) {}

  // #8 Fetches all articles from GET /articles.
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}/articles`);
  }

  // #9 Deletes one article by id using DELETE /articles/:id.
  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/articles/${id}`);
  }

  // #10 Alias used by some components to fetch all items.
  getAll(): Observable<Article[]> {
    return this.getArticles();
  }

  // #11 Creates a new article using POST /articles.
  create(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}/articles`, article);
  }

  // #12 Updates an existing article using PUT /articles/:id.
  update(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.baseUrl}/articles/${article.id}`, article);
  }

  // #13 Alias used by some components to delete by id.
  delete(id: number): Observable<void> {
    return this.deleteArticle(id);
  }
}
