'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface Comment {
  schoolName: string;
  location: string;
  profileImg: string;
  description: string;
  rating: number;
}

const comments: Comment[] = [
  {
    schoolName: "Nela Secondary School",
    location: "New York, NY",
    profileImg: "https://www.ahmes.sc.tz/gallery/index.php?cmd=thumb&sfpg=KmxvZ28ucG5nKjhlYWNjYzc1MTA5ZjgzY2E4ZWYwYzNhNmViNjAxM2NmOTc4ODA4MDBjMGM4N2ZmMDU2ZTkzNGQ2N2FjM2EzOTM",
    description: "Great school with supportive teachers! Very inclusive and diverse community.",
    rating: 4.5,
  },
  {
    schoolName: "Westside High School",
    location: "Los Angeles, CA",
    profileImg: "https://www.ahmes.sc.tz/gallery/index.php?cmd=thumb&sfpg=KmxvZ28ucG5nKjhlYWNjYzc1MTA5ZjgzY2E4ZWYwYzNhNmViNjAxM2NmOTc4ODA4MDBjMGM4N2ZmMDU2ZTkzNGQ2N2FjM2EzOTM",
    description: "Amazing facilities and extracurricular activities that foster personal growth and academic excellence. Highly recommended!",
    rating: 4.8,
  },
  {
    schoolName: "Marian High School",
    location: "Los Angeles, CA",
    profileImg: "https://www.ahmes.sc.tz/gallery/index.php?cmd=thumb&sfpg=KmxvZ28ucG5nKjhlYWNjYzc1MTA5ZjgzY2E4ZWYwYzNhNmViNjAxM2NmOTc4ODA4MDBjMGM4N2ZmMDU2ZTkzNGQ2N2FjM2EzOTM",
    description: "Amazing facilities and extracurricular activities that foster personal growth and academic excellence. Highly recommended!",
    rating: 4.8,
  },
  {
    schoolName: "Across High School",
    location: "Los Angeles, CA",
    profileImg: "https://www.ahmes.sc.tz/gallery/index.php?cmd=thumb&sfpg=KmxvZ28ucG5nKjhlYWNjYzc1MTA5ZjgzY2E4ZWYwYzNhNmViNjAxM2NmOTc4ODA4MDBjMGM4N2ZmMDU2ZTkzNGQ2N2FjM2EzOTM",
    description: "Amazing facilities and extracurricular activities that foster personal growth and academic excellence. Highly recommended!",
    rating: 4.8,
  },
  // Add more comments as needed
];

const ReverseCommentSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const commentWidth = 600; // Width of each comment box in pixels
  const totalWidth = commentWidth * comments.length; // Total width of the comments row

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        // Reset the offset once it goes beyond the total width for infinite scrolling
        return prevOffset <= -totalWidth ? 0 : prevOffset - 1;
      });
    }, 10); // Adjust the speed of scrolling here (lower value for faster scroll)

    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="overflow-hidden relative mt-64">
      <motion.div
        className="flex"
        style={{ transform: `translateX(${offset}px)` }} // Negative offset for right-to-left scroll
        transition={{ duration: 0 }} // Disable transition to ensure smooth continuous scrolling
      >
        {/* Duplicate the comments to create the infinite scrolling effect */}
        {[...comments, ...comments].map((comment, index) => (
          <div
            key={index}
            className="flex items-start h-[250px] p-4 mb-10 border-2 border-gray-300 ml-8 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 bg-white"
            style={{ width: commentWidth }} // Set width for each comment
          >
            <img
              src={comment.profileImg}
              alt={`${comment.schoolName} profile`}
              className="w-14 h-14 rounded-full mr-4"
            />
            <div className="flex flex-col justify-between w-[600px]">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg text-gray-800">{comment.schoolName}</h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-red-500" />
                    {comment.location}
                  </p>
                </div>
                <p className="text-yellow-500 font-semibold">Rating: {comment.rating} ★</p>
              </div>
              <p className="text-gray-700 w-full mt-2 rounded-md p-2 overflow-hidden whitespace-normal">
                {comment.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReverseCommentSection;
