import axios from "axios";
import { Post } from '@/types/posts.dto';

export const getPosts = async (): Promise<Post[]> => {
    return await axios
      .get("http://localhost:3000/api/community/list")
      .then((res) => res.data);
  };

  export const getPost = async (id: number): Promise<Post> => {
    return await axios
      .get(`http://localhost:3000/api/community/${id}`)
      .then((res) => res.data);
  };