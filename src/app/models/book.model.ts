
export interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string; 
  status: 'lido' | 'lendo' | 'toBeRead';
  }