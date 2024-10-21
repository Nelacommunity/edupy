'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const teamMembers = [
  {
    name: 'Brown Mafuru',
    position: 'CEO',
    description: 'John is a visionary leader with over 10 years of experience in the education sector.',
    image: 'https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q0VPfGVufDB8fDB8fHww',
  },
  {
    name: 'Aaron Victor',
    position: 'CTO',
    description: 'Jane is a tech enthusiast who specializes in developing innovative educational solutions.',
    image: 'https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Maryam Said',
    position: 'Project Manager',
    description: 'Alice ensures that all projects are delivered on time and meet the highest quality standards.',
    image: 'https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Kelvin John',
    position: 'UI/UX Designer',
    description: 'Mark is passionate about creating user-friendly designs that enhance the learning experience.',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Brian James',
    position: 'Cybersecurity Analyst',
    description: 'Aaron is dedicated to ensuring the security of our digital platforms.',
    image: 'https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENFT3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    name: 'Reagan John',
    position: 'Business Analyst',
    description: 'James specializes in data analysis to drive business decisions.',
    image: 'https://media.istockphoto.com/id/1560357509/photo/happy-mature-latin-business-man-standing-in-office-arms-crossed-looking-away.webp?a=1&b=1&s=612x612&w=0&k=20&c=1aN634vIxXEn5CX75ym_DMixOQR8mysROxywOFT1v2Q=',
  },
  {
    name: 'Asnathgrace Seni',
    position: 'CFO',
    description: 'James specializes in data analysis to drive business decisions.',
    image: 'https://media.istockphoto.com/id/1560357509/photo/happy-mature-latin-business-man-standing-in-office-arms-crossed-looking-away.webp?a=1&b=1&s=612x612&w=0&k=20&c=1aN634vIxXEn5CX75ym_DMixOQR8mysROxywOFT1v2Q=',
  },
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersToShow = 3; // Number of members to show in one view
  const teamLength = teamMembers.length;

  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const nextPage = () => {
    const nextIndex = (currentIndex + 1) % teamLength;
    updateIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 3000); // Adjust the time interval as necessary
    return () => clearInterval(interval);
  }, [currentIndex]);

  const displayedMembers = [
    teamMembers[currentIndex % teamLength],
    teamMembers[(currentIndex + 1) % teamLength],
    teamMembers[(currentIndex + 2) % teamLength],
  ];

  const handlePaginationClick = (index) => {
    updateIndex(index);
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet Our Team</h2>
        <div className="relative">
          <motion.div className="flex transition-transform duration-500">
            {displayedMembers.map((member, index) => (
              <motion.div
                key={index}
                className="w-1/3 flex-shrink-0 px-2"
                initial={{ opacity: 0, x: -50 }} // Start from the left
                animate={{ opacity: 1, x: 0 }} // Animate to original position
                exit={{ opacity: 0, x: 50 }} // Exit to the right
                transition={{ duration: 0.5 }} // Duration of the animation
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-blue-400 font-bold">{member.position}</p>
                    <p className="text-gray-500 mt-2">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Circular Pagination Indicators without numbers */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(teamLength) }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`mx-1 w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
