// #1 Marks this class as an injectable Angular service.
import { Injectable } from '@angular/core';

// #2 Placeholder core article service (currently no logic implemented).
@Injectable({
  // #2.1 Register service in root injector as a singleton.
  providedIn: 'root',
})
export class Article {}
