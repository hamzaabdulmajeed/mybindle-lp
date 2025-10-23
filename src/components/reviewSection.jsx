import React, {useState} from 'react'

function ReviewSection() {

const reviews = [
  {
    rating: 5,
    comment: "MyBindle has completely changed how I connect with my friends — smooth, fun, and super easy to use!",
    user: "Emily Carter",
    profile: "https://randomuser.me/api/portraits/women/1.jpg",
    country: "United States",
  },
  {
    rating: 4,
    comment: "I love the real-time chat and community features. It feels like a digital home for my circle.",
    user: "Rajesh Kumar",
    profile: "https://randomuser.me/api/portraits/men/2.jpg",
    country: "India",
  },
  {
    rating: 5,
    comment: "The design is so clean and user-friendly. I can share moments instantly with my family!",
    user: "Sofia Martinez",
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
    country: "Spain",
  },
  {
    rating: 4,
    comment: "I really appreciate the privacy options. Feels safe to share personal updates here.",
    user: "James Wilson",
    profile: "https://randomuser.me/api/portraits/men/4.jpg",
    country: "United Kingdom",
  },
  {
    rating: 5,
    comment: "Awesome app for networking and meeting like-minded people from all over the world.",
    user: "Aya Nakamura",
    profile: "https://randomuser.me/api/portraits/women/5.jpg",
    country: "Japan",
  },
  {
    rating: 4,
    comment: "Smooth, reliable, and the UI feels premium. I recommend it to anyone who loves social media.",
    user: "Liam Brown",
    profile: "https://randomuser.me/api/portraits/men/6.jpg",
    country: "Australia",
  },
  {
    rating: 5,
    comment: "This platform is full of positivity! I’ve made great connections here.",
    user: "Fatima Ali",
    profile: "https://randomuser.me/api/portraits/women/7.jpg",
    country: "UAE",
  },
  {
    rating: 5,
    comment: "MyBindle is more than an app — it’s a community. Love the vibe here!",
    user: "Lucas Rossi",
    profile: "https://randomuser.me/api/portraits/men/8.jpg",
    country: "Brazil",
  },
  {
    rating: 4,
    comment: "I enjoy using this every day. Great for both personal and business networking!",
    user: "Marie Dupont",
    profile: "https://randomuser.me/api/portraits/women/9.jpg",
    country: "France",
  },
];
const [visibleCount, setVisibleCount] = useState(6);

const showMore = () => {
    setVisibleCount(reviews.length);
  };


  return (
    <div className='w-full min-h-[867px] bg-[#F2F2F2] py-16 grid grid-cols-1 gap-10'>
      <div className='text-center'>
        <h1 className='text-[79px] font-[600] font-bold  text-[#222222]'>What Our Users Say</h1>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 px-40">
          {reviews.slice(0, visibleCount).map((r, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-yellow-500 mb-3">
                {"⭐".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
              <p className="text-gray-700 italic mb-4">“{r.comment}”</p>
              <div className="flex items-center space-x-3">
                <img
                  src={r.profile}
                  alt={r.user}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{r.user}</h3>
                  <p className="text-gray-500 text-sm">{r.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < reviews.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMore}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full shadow transition"
            >
              See More
            </button>
          </div>
        )}
    </div>
  )
}

export default ReviewSection
