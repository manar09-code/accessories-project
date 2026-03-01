// #1 Angular component + initialization lifecycle hook.
import { Component, OnInit } from '@angular/core';
// #2 CommonModule enables template directives such as *ngFor/*ngIf.
import { CommonModule } from '@angular/common';
// #3 FormsModule enables ngModel for form fields.
import { FormsModule } from '@angular/forms';
// #4 Product/article model interface for typing product data.
import { Article } from '../../models/article.model';
// #5 Service responsible for backend CRUD calls.
import { ArticleService } from '../../services/article';

// #6 Products page: list, filter, create, update, and delete products.
@Component({
  // #6.1 Selector used when this component is embedded.
  selector: 'app-products',
  // #6.2 Standalone component imports its own Angular modules.
  standalone: true,
  // #6.3 CommonModule for directives, FormsModule for form bindings.
  imports: [CommonModule, FormsModule],
  // #6.4 View and style files.
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  // #7 Full products list received from API.
  products: Article[] = [];
  // #8 UI state for loading indicator.
  loading = false;
  // #9 UI state for validation/API errors.
  errorMessage = '';

  // #10 Search input text used by filteredProducts getter.
  searchTerm = '';
  // #11 Filter toggle to show only products with low stock.
  showLowStockOnly = false;

  // #12 Null means create mode; number means edit mode for that product id.
  editingId: number | null = null;
  // #13 Form model bound to create/edit form controls.
  formModel: Article = {
    id: 0,
    name: '',
    price: 0,
    stock: 0,
    image: '',
  };

  // #14 Inject article service for API interactions.
  constructor(private articleService: ArticleService) {}

  // #15 Load products when component is created.
  ngOnInit(): void {
    this.loadProducts();
  }

  // #16 Fetch all products from backend API.
  loadProducts(): void {
    this.loading = true;
    this.errorMessage = '';

    // #16.1 Subscribe to HTTP observable to process async result.
    this.articleService.getAll().subscribe({
      // #16.2 Success: replace local list and stop loading.
      next: data => {
        this.products = data;
        this.loading = false;
      },
      // #16.3 Error: show message and stop loading.
      error: () => {
        this.errorMessage = 'Unable to load products. Check your API connection.';
        this.loading = false;
      },
    });
  }

  // #17 Computed list based on search term and low-stock toggle.
  get filteredProducts(): Article[] {
    const term = this.searchTerm.trim().toLowerCase();
    return this.products.filter(item => {
      const matchesSearch = !term || item.name.toLowerCase().includes(term);
      const matchesStock = !this.showLowStockOnly || item.stock < 5;
      return matchesSearch && matchesStock;
    });
  }

  // #18 Computed metric: number of products.
  get totalProducts(): number {
    return this.products.length;
  }

  // #19 Computed metric: total inventory value.
  get totalValue(): number {
    return this.products.reduce((sum, item) => sum + item.price * item.stock, 0);
  }

  // #20 Computed metric: number of low-stock products in full list.
  get lowStockCount(): number {
    return this.products.filter(item => item.stock < 5).length;
  }

  // #21 Computed metric: low-stock count after current filters are applied.
  get filteredLowStockCount(): number {
    return this.filteredProducts.filter(item => item.stock < 5).length;
  }

  // #22 Switches form to create mode and resets fields.
  startCreate(): void {
    this.editingId = null;
    this.formModel = {
      id: 0,
      name: '',
      price: 0,
      stock: 0,
      image: '',
    };
  }

  // #23 Switches form to edit mode and copies selected product values.
  startEdit(product: Article): void {
    this.editingId = product.id;
    this.formModel = { ...product };
  }

  // #24 Validates and saves product (create or update depending on mode).
  saveProduct(): void {
    // #24.1 Build payload with trimmed text fields.
    const payload: Article = {
      ...this.formModel,
      name: this.formModel.name.trim(),
      image: this.formModel.image.trim(),
    };

    // #24.2 Basic client validation before API call.
    if (!payload.name || payload.price < 0 || payload.stock < 0) {
      this.errorMessage = 'Please fill valid product data before saving.';
      return;
    }

    // #24.3 Create mode when no editing id is selected.
    if (this.editingId === null) {
      this.articleService.create(payload).subscribe({
        // #24.3.1 Reset form and refresh list after successful create.
        next: () => {
          this.startCreate();
          this.loadProducts();
        },
        // #24.3.2 Show create error message.
        error: () => {
          this.errorMessage = 'Unable to create product.';
        },
      });
      return;
    }

    // #24.4 Edit mode: force payload id and call update endpoint.
    payload.id = this.editingId;
    this.articleService.update(payload).subscribe({
      // #24.4.1 Reset form and reload list after update.
      next: () => {
        this.startCreate();
        this.loadProducts();
      },
      // #24.4.2 Show update error message.
      error: () => {
        this.errorMessage = 'Unable to update product.';
      },
    });
  }

  // #25 Deletes a product using the API, then removes it locally.
  removeProduct(id: number): void {
    this.articleService.delete(id).subscribe({
      // #25.1 Update local list on successful delete.
      next: () => {
        this.products = this.products.filter(item => item.id !== id);
      },
      // #25.2 Show delete error message.
      error: () => {
        this.errorMessage = 'Unable to delete this product.';
      },
    });
  }
}
