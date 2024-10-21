'use client';
import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import Connected from './Connected';
import CommentSection from './CommentSection';
import ReverseCommentSection from './ReverseComment';

// Load local fonts
const geistdancingScript = localFont({
  src: '../fonts/DancingScript-Medium.ttf',
  variable: '--font-dancing-script',
  weight: '400 900',
});

const geistLXGWWenKaiTc = localFont({
  src: '../fonts/LXGWWenKaiTC-Regular.ttf',
  variable: '--font-wenkai',
  weight: '400 900',
});

const Home = () => {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const fullText = 'Edupy Education System';

  useEffect(() => {
    let index = 0;
    const typingEffect = () => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typingEffect, 150);
      } else {
        setIsTypingComplete(true);
      }
    };
    typingEffect();
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      setTimeout(() => setShowSection(true), 500);
    }
  }, [isTypingComplete]);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center h-screen px-7 bg-gradient-to-r from-teal-500 to-teal-500">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-8">
          {/* Heading and Subtext */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-200">Explore Education</h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-lg font-semibold">
              Experience a fast, secure, and reliable management system that powers your school's success.
            </p>
          </div>

          {/* Buttons for Students, Teachers, and Parents */}
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <p className="text-gray-600 font-semibold">For Students, Teachers, and Parents</p>
              <p className="text-gray-600 font-regular">Download App</p>
              <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
                <button className="flex items-center justify-center bg-transparent border border-gray-300 text-white font-semibold py-3 px-6 rounded-lg  transition duration-300">
                  <FaGooglePlay className="mr-2" /> Play Store
                </button>
                <button className="flex items-center justify-center bg-transparent border border-gray-300 text-white font-semibold py-3 px-6 rounded-lg  transition duration-300">
                  <FaApple className="mr-2" /> App Store
                </button>
              </div>
            </div>

            {/* Button for Schools */}
            <div className="space-y-2">
              <p className="text-gray-600 font-semibold">For Schools</p>
              <button className="flex items-center justify-center bg-transparent border border-gray-300 text-white font-semibold py-3 px-6 rounded-lg  transition duration-300">
                Edupy Desktop
              </button>
            </div>
          </div>
        </div>

        {/* Right Section (Optional for any visual content) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
          {/* Typing Effect with Blinking Cursor */}
          <p className={`${geistdancingScript.variable} font-bold text-4xl md:text-5xl`} style={{ fontFamily: 'var(--font-dancing-script)' }}>
            {text}
            {!isTypingComplete && <span className="blink-cursor">|</span>}
          </p>

          {/* Expand/Collapse Text Section */}
          {showSection && (
            <div className="interactive-section appear-animation max-w-lg mt-4">
              <p className={`${isExpanded ? 'expanded-text' : 'collapsed-text'} ${geistLXGWWenKaiTc.variable}`} style={{ fontFamily: 'var(--font-wenkai)' }}>
                Edupy is a comprehensive school management system designed to streamline administrative, academic, and communication processes within educational institutions. It provides a centralized platform for schools to manage student records, attendance, grading, scheduling, and teacher assignments. Edupy also facilitates communication between teachers, students, and parents, offering real-time updates on student performance and school activities.
              </p>
              <button onClick={toggleExpand} className="text-blue-600 font-semibold hover:underline mt-2">
                {isExpanded ? 'Collapse' : 'Read More'}
              </button>
            </div>
          )}
        </div>
      </div>
      <ReverseCommentSection />
      <CommentSection />
      <Connected />
    </>
  );
};

export default Home;
