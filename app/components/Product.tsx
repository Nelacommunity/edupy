'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MdSms, MdCheckCircle, MdAssignment, MdChat, MdDateRange } from 'react-icons/md';
import { GiPerson } from 'react-icons/gi';
import { BsFileEarmarkText, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoMdAnalytics, IoMdCalendar } from 'react-icons/io';
import { RiVideoFill } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { TiDocumentText } from 'react-icons/ti';

// Define the type for feature data
interface Feature {
    title: string;
    description: string;
    icon: JSX.Element;
}

// Full feature data object
const featureData: Feature[] = [
    {
        title: 'SMS Sending',
        description: 'Easily send SMS notifications to students and parents about attendance, exam results, and school announcements. Keep everyone informed in real-time.',
        icon: <MdSms />,
    },
    {
        title: 'Attendance Tracking',
        description: 'Automated attendance tracking allows teachers to record attendance and parents to monitor their child’s attendance history.',
        icon: <MdCheckCircle />,
    },
    {
        title: 'Grade Management',
        description: 'Manage student grades efficiently, generate detailed reports, and share them directly with parents through the Edupy portal.',
        icon: <MdAssignment />,
    },
    {
        title: 'Parent-Teacher Communication',
        description: 'Facilitate direct communication between parents and teachers through integrated messaging, ensuring clear and timely feedback.',
        icon: <MdChat />,
    },
    {
        title: 'Timetable Scheduling',
        description: 'Easily manage class schedules and ensure conflict-free timetables for both teachers and students.',
        icon: <MdDateRange />,
    },
    {
        title: 'Exam & Assignment Management',
        description: 'Organize exams and assignments, set deadlines, and track submissions. Teachers can also grade assignments and exams digitally.',
        icon: <BsFileEarmarkText />,
    },
    {
        title: 'Trends',
        description: 'Analyze and display trends in academic performance and attendance, helping educators make informed decisions for student success.',
        icon: <IoMdAnalytics />,
    },
    {
        title: 'File Transfer',
        description: 'Securely transfer important documents and files between teachers, students, and parents, ensuring fast and efficient communication.',
        icon: <AiOutlineCloudUpload />,
    },
    {
        title: 'User-Friendly Design',
        description: 'An intuitive and well-organized interface that ensures easy navigation and accessibility for all users, from teachers to students and parents, enhancing the overall user experience.',
        icon: <GiPerson />,
    },
    {
        title: 'Multilanguage Support',
        description: 'Offer a seamless experience for users from diverse linguistic backgrounds by providing support for multiple languages, making the platform accessible and user-friendly for all.',
        icon: <HiOutlineUserGroup />,
    },
    {
        title: 'Social Media Integration',
        description: 'Connect the school’s communication channels with social media platforms to share updates and events seamlessly with the community.',
        icon: <RiVideoFill />,
    },
    {
        title: 'Interactive Audio Rooms',
        description: 'Enable real-time discussions and collaboration through virtual audio rooms, allowing students and teachers to engage in interactive lessons, group study sessions, and peer discussions from anywhere.',
        icon: <BiNetworkChart />,
    },
    {
        title: 'Live Video Classes',
        description: 'Deliver high-quality live video classes that foster real-time interaction between teachers and students, making online learning engaging and effective with features like screen sharing and digital whiteboards.',
        icon: <RiVideoFill />,
    },
    {
        title: 'Comprehensive Study Materials',
        description: 'Provide students and teachers with access to a wide range of digital study materials, including textbooks, articles, and multimedia resources, to enhance learning and facilitate effective study habits.',
        icon: <TiDocumentText />,
    },
    {
        title: 'Performance Analytics',
        description: 'Utilize advanced analytics tools to track student performance over time, generating insightful reports that help educators identify strengths and areas for improvement.',
        icon: <IoMdAnalytics />,
    },
    {
        title: 'Calendar Integration',
        description: 'Seamlessly integrate school events, deadlines, and schedules with popular calendar applications, ensuring that students and parents never miss important dates.',
        icon: <IoMdCalendar />,
    },
    {
        title: 'Homework Submission',
        description: 'Facilitate easy and efficient homework submission through a digital platform, allowing students to submit assignments online and receive feedback from teachers in real-time.',
        icon: <MdAssignment />,
    },
    {
        title: 'Event Management',
        description: 'Organize and manage school events, including sports days, parent-teacher meetings, and extracurricular activities, with tools for scheduling, invitations, and RSVPs.',
        icon: <MdDateRange />,
    },
    {
        title: 'Resource Sharing',
        description: 'Create a collaborative environment where teachers and students can share educational resources, lesson plans, and study materials, fostering a culture of teamwork and knowledge exchange.',
        icon: <BsFillFileEarmarkTextFill />,
    },
    {
        title: 'Career Counseling',
        description: 'Provide students with access to career counseling services, helping them explore educational pathways and job opportunities through assessments, guidance, and resources.',
        icon: <GiPerson />,
    },
    {
        title: 'Alumni Network',
        description: 'Create a platform for alumni to connect with each other and the school, providing networking opportunities, mentorship programs, and resources for career development.',
        icon: <GiPerson />,
    },
    {
        title: 'Custom Reporting Tools',
        description: 'Generate custom reports on student performance, attendance, and school activities, providing valuable insights for educators and administrators to make informed decisions.',
        icon: <TiDocumentText />,
    },
    {
        title: 'Data Security and Compliance',
        description: 'Ensure the security and privacy of sensitive student information with robust data protection measures and compliance with educational regulations, fostering trust and safety.',
        icon: <MdCheckCircle />,
    },
    {
        title: 'Interactive Learning Modules',
        description: 'Engage students with interactive learning modules that include quizzes, videos, and gamified lessons, promoting active participation and enhancing the learning experience.',
        icon: <MdAssignment />,
    },
    {
        title: 'Parental Involvement Tools',
        description: 'Encourage parental involvement with tools that allow parents to track their child’s academic progress, communicate with teachers, and participate in school activities.',
        icon: <GiPerson />,
    },
    {
        title: 'Online Payment Processing',
        description: 'Simplify fee payments with secure online payment processing, allowing parents to pay school fees, tuition, and other expenses quickly and conveniently from any device.',
        icon: <MdCheckCircle />,
    },
    {
        title: 'Mobile App',
        description: 'Access all features from your mobile device, enabling parents, teachers, and students to stay connected from anywhere.',
        icon: <GiPerson />,
    },
    {
        title: 'Desktop App',
        description: 'Use our full-featured desktop app for school administrators and teachers to manage school operations efficiently from their computer.',
        icon: <GiPerson />,
    },
];

// Animation variants for framer-motion
const cardVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

// Product component
const Product: React.FC = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Edupy Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featureData.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="p-4 border rounded-md shadow-md flex items-start"
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true }} // Optional: Animate only once when in view
                    >
                        <div className="mr-4 text-2xl">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        
        </div>
    );
};

export default Product;
