
export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  sinopse: string;
  status: 'lido' | 'lendo' | 'toBeRead';
  rating: number;
  favorite: boolean;
  }