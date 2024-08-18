import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const response = await fetch(`/api/projects/${id}`);
          const data = await response.json();
          setProject(data);
          setReviews(data.reviews || []);
        } catch (error) {
          console.error('Error fetching project:', error);
          const dummyProjects = [
            {
              id: '1',
              title: 'Project Alpha',
              description:
                'A comprehensive cybersecurity solution designed to enhance threat detection and response capabilities.',
              imageUrl:
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              reviews: [
                { name: 'John Doe', rating: 4, comment: 'Great project!' },
              ],
            },
          ];
          const foundProject = dummyProjects.find((p) => p.id === id);
          setProject(foundProject);
          setReviews(foundProject?.reviews || []);
        }
      };
      fetchProject();
    }
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews((prev) => [...prev, newReview]);
      setNewReview({
        name: '',
        rating: 0,
        comment: '',
      });
    } else {
      alert('Please complete all fields before submitting.');
    }
  };

  const renderStars = (rating, clickable = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? 'text-yellow-500' : 'text-gray-500'}
          onClick={() => clickable && handleRatingChange(i)}
          style={{ cursor: clickable ? 'pointer' : 'default' }}
        />
      );
    }
    return stars;
  };

  if (!project) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-300 mb-8">{project.description}</p>
        </div>
        <div>
          <div className="bg-gray-800 p-4 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  value={newReview.name}
                  onChange={handleReviewChange}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg mb-3"
                  required
                />
              </div>
              <div className="mb-2">
                <div className="flex mb-3">
                  {renderStars(newReview.rating, true)}
                </div>
              </div>
              <div className="mb-2">
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  placeholder="Your Review"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg mb-3"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-ten hover:bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center mb-1">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-ten">{review.name}</span>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No reviews yet. Be the first to leave one!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
