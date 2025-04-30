import { useParams } from "react-router-dom";
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Bike for You",
    content: `Choosing the right bike involves knowing your riding style and the terrain...`,
    image: blog1,
  },
  {
    id: 2,
    title: "Top 5 Maintenance Tips for Your Bike",
    content: `Regular maintenance keeps your bike safe and efficient. Here are 5 essential tips...`,
    image: blog3,
  },
  {
    id: 3,
    title: "Benefits of Cycling Daily",
    content: `Daily cycling improves cardiovascular health, reduces stress, and boosts energy...`,
    image: blog2,
  },
];

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="text-white text-center py-16">
        <h2 className="text-2xl font-bold">Post Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-16 px-6 max-w-3xl mx-auto">
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-300 text-lg whitespace-pre-line leading-7">{post.content}</p>
    </div>
  );
}

export default BlogPost;
