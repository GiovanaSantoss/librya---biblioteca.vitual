
export interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  sinopse: string;
  status: 'lido' | 'lendo' | 'toBeRead';
  rating: number;
  favorite: boolean;
  }