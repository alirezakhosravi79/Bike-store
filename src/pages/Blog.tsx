import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Bike for You",
    excerpt:
      "Learn how to select the perfect bicycle based on your needs, terrain, and riding style.",
    image: blog1,
  },
  {
    id: 2,
    title: "Top 5 Maintenance Tips for Your Bike",
    excerpt:
      "Keep your bike in top condition with these essential maintenance tips every cyclist should know.",
    image: blog3,
  },
  {
    id: 3,
    title: "Benefits of Cycling Daily",
    excerpt:
      "Discover how daily cycling improves your health,Discover how daily cycling improves your health reduces stress, and enhances productivity.",
    image: blog2,
  },
];

function Blog() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Blog</h2>
        <p className="text-gray-400">
          Explore cycling tips, maintenance guides, and lifestyle inspiration for all riders.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <span className="text-orange-500 font-semibold hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
