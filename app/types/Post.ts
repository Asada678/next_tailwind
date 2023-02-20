export type PostType = {
  title: string;
  id: string;
  createdAt?: string;
  user: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
  Comment?: {
    createdAt: string;
    id: string;
    postId: string;
    title: string;
    message: string;
    userId: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};
