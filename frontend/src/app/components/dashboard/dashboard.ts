// #1 Angular component + lifecycle hook types.
import { Component, OnInit } from '@angular/core';
// #2 CommonModule enables structural directives in the template.
import { CommonModule } from '@angular/common';
// #3 HttpClientModule makes HTTP providers available in this standalone component tree.
import { HttpClientModule } from '@angular/common/http';
// #4 Service and data type used to fetch/manage article data.
import { ArticleService, Article } from '../../services/article';

// #5 Dashboard component that shows product metrics and quick actions.
@Component({
  // #5.1 Standalone configuration.
  standalone: true,
  // #5.2 CommonModule for template directives, HttpClientModule for API calls used by service.
  imports: [CommonModule, HttpClientModule],
  // #5.3 Template and style files for dashboard UI.
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {
  // #6 Raw article list loaded from backend.
  articles: Article[] = [];
  // #7 Loading flag used to show/hide spinner or disabled state.
  loading = false;
  // #8 User-facing message when API calls fail.
  errorMessage = '';

  // #9 Inject the article service to load/delete records.
  constructor(private service: ArticleService) {}

  // #10 Lifecycle hook: load data once component is initialized.
  ngOnInit(): void {
    this.loadArticles();
  }

  // #11 Calls backend API to fetch all dashboard articles.
  loadArticles(): void {
    // #11.1 Start loading state and clear previous errors.
    this.loading = true;
    this.errorMessage = '';

    // #11.2 Subscribe to HTTP observable to handle async API response.
    this.service.getArticles().subscribe({
      // #11.3 Success path: store data and stop loading.
      next: (data: Article[]) => {
        console.log('DATA RECEIVED:', data);
        this.articles = data;
        this.loading = false;
      },
      // #11.4 Error path: log issue, show message, and stop loading.
      error: (err: any) => {
        console.error('API ERROR:', err);
        this.errorMessage = 'Unable to load dashboard data right now.';
        this.loading = false;
      },
    });
  }

  // #12 Computed property: total stock units across all articles.
  get totalStock(): number {
    return this.articles.reduce((sum, item) => sum + item.stock, 0);
  }

  // #13 Computed property: total inventory value (price * stock for each article).
  get totalValue(): number {
    return this.articles.reduce((sum, item) => sum + item.price * item.stock, 0);
  }

  // #14 Computed property: count of items considered low stock.
  get lowStockCount(): number {
    return this.articles.filter(item => item.stock < 5).length;
  }

  // #15 Computed property: top 4 items by inventory value.
  get topArticles(): Article[] {
    return [...this.articles]
      .sort((a, b) => b.price * b.stock - a.price * a.stock)
      .slice(0, 4);
  }

  // #16 Deletes one article on backend, then updates local list.
  delete(id: number): void {
    this.service.deleteArticle(id).subscribe({
      // #16.1 Remove deleted item from local array so UI updates immediately.
      next: () => {
        this.articles = this.articles.filter(a => a.id !== id);
      },
      // #16.2 Keep existing list and log error if delete fails.
      error: (err: any) => {
        console.error('Delete error:', err);
      },
    });
  }
}
