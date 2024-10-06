import { Image } from "./Image";

export interface Post {
    id: number;
    category_id:number;
    title: string;
    body: string;
    description: Text;
    view_count: number;
    photos: Image[]
  }