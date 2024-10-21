import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import Footer from './Footer';

const geistdancingScript = localFont({
    src: '../fonts/DancingScript-Medium.ttf',
    variable: '--font-dancing-script',
    weight: '400 900',
});

const About = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto p-8 bg-white">
                <div className='flex justify-center items-center space-x-2 mb-8'>
                    <Image src="/images/logo.png" alt="Edupy logo" width={60} height={60} />
                    <p className={`${geistdancingScript.variable} font-bold text-4xl text-teal-600`} style={{ fontFamily: 'var(--font-dancing-script)' }}>
                        Edupy
                    </p>
                </div>
                <div className='flex flex-col items-start justify-center space-y-4 mb-8'>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Easy Managing all Schools <span className='text-teal-600'>Works and data</span> easily</h1>
                    <p className="text-gray-700 mb-4">
                        Edupy is an innovative school management system designed to streamline communication and enhance the educational experience for students, teachers, and parents alike. Our mission is to simplify administrative tasks, improve student engagement, and foster a collaborative learning environment.
                    </p>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">The vision of the <span className='text-teal-600'>company</span></h1>
                    <p className="text-gray-700 mb-4">
                        At Edupy, we envision a future where technology seamlessly integrates into education, empowering stakeholders to achieve academic excellence and holistic development. We aim to create an inclusive platform that adapts to the diverse needs of educational institutions worldwide.
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Main Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {[
                        { title: "SMS Notifications", description: "Keep everyone informed with real-time SMS alerts for important announcements." },
                        { title: "Attendance Tracking", description: "Automate attendance management for teachers and parents." },
                        { title: "Grade Management", description: "Efficiently manage student grades and generate detailed reports." },
                        { title: "Parent-Teacher Communication", description: "Facilitate direct messaging between parents and teachers." },
                        { title: "Interactive Learning Modules", description: "Engage students with gamified lessons and quizzes." },
                        { title: "Virtual Classrooms", description: "Conduct remote lessons using integrated video conferencing tools." },
                        { title: "Resource Management", description: "Optimize the use of school resources and equipment." },
                    ].map((feature, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <strong className='text-blue-700'>{feature.title}:</strong>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Join Us</h2>
                <p className="text-gray-700 mb-4">
                    We invite educational institutions, teachers, parents, and students to join us on our journey to transform education. Together, we can build a brighter future for learners everywhere.
                </p>
                <p className="text-gray-700 mb-4">
                    Developed by Across Tech, Edupy aims to simplify the education system in Tanzania, enhancing comprehension and accessibility for all stakeholders.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                    For more information, inquiries, or support, please reach out to us at <a href="mailto:support@edupy.com" className="text-blue-500 hover:underline">support@edupy.com</a>.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default About;
