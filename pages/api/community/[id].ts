import fs from 'fs';
import { NextApiHandler } from 'next';

export const getPosts = async () => {
  const rawData = fs.readFileSync("posts.json");
  const jsonData = JSON.parse(rawData.toString());
  return jsonData.posts;
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  try {
    const posts = await getPosts();
    const post = posts.filter((post: any) => {
      console.log(post)
      return Number(post.id) === Number(req.query.id)
    })
    res.status(200).json(post[0]);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default handler;
