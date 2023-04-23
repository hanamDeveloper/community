import { Post } from '@/types/posts.dto';
import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from './[id]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | Post[]>
) {
  const {
    query: { id },
    method,
  } = req;
  const posts = await getPosts();

  switch (method) {
    case 'GET':
      if (id === undefined) {
        res.status(200).json(posts);
      } else {
        const post = posts.find((p: any) => p.id === Number(id));
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).end();
        }
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
