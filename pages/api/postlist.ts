import { NextApiRequest, NextApiResponse } from "next";

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "Hello, world!",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is my second post.",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { message: string }>
) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    const id = Date.now(); // 현재 시간을 id로 사용

    const post = { id, title, content };
    posts.push(post);

    res.status(200).json(post);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
