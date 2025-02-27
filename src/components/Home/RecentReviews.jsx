import React, { useState } from "react";
import {
  Star,
  ThumbsUp,
  Calendar,
  MessageCircle,
  User,
  Flag,
} from "lucide-react";

function RecentReviews() {
  // Sample review data
  const [reviews, setReviews] = useState([
    {
      _id: "rev123",
      reviewer: {
        _id: "user1",
        name: "Emily Johnson",
        avatar: "/api/placeholder/40/40",
      },
      organizationId: {
        _id: "org1",
        name: "Tech Innovators Inc.",
      },
      rating: 4.5,
      comment:
        "Excellent organization to work with! Their team was responsive and delivered quality results ahead of schedule. The only minor issue was occasional communication delays.",
      status: "approved",
      createdAt: "2025-02-10T15:30:00.000Z",
      helpfulCount: 12,
    },
    {
      _id: "rev124",
      reviewer: {
        _id: "user2",
        name: "Michael Chen",
        avatar: "/api/placeholder/40/40",
      },
      organizationId: {
        _id: "org2",
        name: "Green Energy Solutions",
      },
      rating: 5,
      comment:
        "Truly impressed with their sustainable approach and dedication to quality. The team exceeded all expectations and kept us informed throughout the entire process.",
      status: "approved",
      createdAt: "2025-02-15T09:45:00.000Z",
      helpfulCount: 8,
    },
    {
      _id: "rev125",
      reviewer: {
        _id: "user3",
        name: "Sarah Wilson",
        avatar: "/api/placeholder/40/40",
      },
      organizationId: {
        _id: "org3",
        name: "Healthcare Innovations",
      },
      rating: 3,
      comment:
        "The solution works as expected, but onboarding was more complicated than promised. Their support team was helpful but we experienced some delays in implementation.",
      status: "pending",
      createdAt: "2025-02-22T14:20:00.000Z",
      helpfulCount: 3,
    },
  ]);

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  // Function to render rating stars
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-yellow-400 text-4xl font-bold">Recent Reviews</h1>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              formatDate={formatDate}
              renderRating={renderRating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
import logosrc from "../../assets/profile.svg";
function ReviewCard({ review, formatDate, renderRating }) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <img
              src={logosrc}
              alt={review.reviewer.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <div className="flex items-center">
                <h3 className="text-gray-200 font-semibold">
                  {review.reviewer.name}
                </h3>
                <span
                  className={`ml-3 px-2 py-0.5 rounded-full text-xs font-medium ${
                    review.status === "approved"
                      ? "bg-green-500/20 text-green-400"
                      : review.status === "pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {review.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Reviewed{" "}
                <span className="font-medium text-blue-400">
                  {review.organizationId.name}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {renderRating(review.rating)}
            <span className="ml-2 text-gray-200 font-bold">
              {review.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-gray-300 leading-relaxed">{review.comment}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex space-x-4 text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formatDate(review.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>{review.comment.length} chars</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span>Helpful ({review.helpfulCount})</span>
            </button>
            <button className="flex items-center text-gray-400 hover:text-red-400 transition-colors">
              <Flag className="w-4 h-4 mr-1" />
              <span>Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentReviews;
