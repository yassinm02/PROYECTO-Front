export class Page<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    // Otros campos o métodos que puedas necesitar
  
    constructor(content: T[], totalPages: number, totalElements: number, size: number, number: number) {
      this.content = content;
      this.totalPages = totalPages;
      this.totalElements = totalElements;
      this.size = size;
      this.number = number;
    }
  }
  