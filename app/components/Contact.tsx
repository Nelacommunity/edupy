'use client'
import React, { useState } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiMysql, SiMongodb, SiRedux, SiFlask, SiFlutter, SiReactrouter, SiElectron } from 'react-icons/si';

const ContactPage: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // List of features to display
  const features: string[] = [
    'User Authentication',
    'Role Management',
    'Real-Time Chat',
    'Analytics Dashboard',
    'API Integration',
    'Database Setup',
    'SMS Sending',
    'File Transfer',
    'Live Video Classes',
    'Online Payment Processing',
    'Mobile App',
    'Web App',
    'Desktop App',
  ];

  // List of technologies to display
  const technologies = [
    { name: 'React', icon: <FaReact size={40} className="text-blue-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-gray-800" /> },
    { name: 'Django', icon: <SiDjango size={40} className="text-green-700" /> },
    { name: 'Flask', icon: <SiFlask size={40} className="text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-600" /> },
    { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: 'Redux', icon: <SiRedux size={40} className="text-purple-600" /> },
    { name: 'Flutter', icon: <SiFlutter size={40} className="text-blue-400" /> },
    { name: 'React Native', icon: <SiReactrouter size={40} className="text-black" /> },
    { name: 'Electron', icon: <SiElectron size={40} className="text-blue-600" /> },
  ];

  // Handle feature selection
  const handleFeatureSelect = (feature: string) => {
    setSelectedFeatures((prevFeatures) =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        {/* Built System Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Built System</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our built systems are tailored to solve various business needs, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Cost-efficient solutions for deployment.</li>
            <li>Payment processing without the hassle of integration.</li>
            <li>Reliable hosting with optimal performance.</li>
            <li>Comprehensive maintenance and support.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-4">
            For example, if you require an online payment system, we offer solutions that integrate seamlessly with platforms like PayPal or Stripe, ensuring secure transactions for your customers without any complex setup on your end.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Interested? Contact us directly via Gmail:
          </p>
          <a
            href="mailto:companyemail@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Contact Us via Gmail
          </a>
        </div>

        {/* Custom System Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Custom System Features</h2>
          <p className="text-lg text-gray-700 mb-4">
            Select the features you want in your custom system:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {features.map((feature) => (
              <div
                key={feature}
                className={`p-4 rounded-lg shadow-md cursor-pointer ${
                  selectedFeatures.includes(feature) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => handleFeatureSelect(feature)}
              >
                {feature}
              </div>
            ))}
          </div>
          <h3 className="text-lg font-bold mb-4">Selected Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedFeatures.map((feature) => (
              <li key={feature} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:companyemail@gmail.com?subject=Custom System Pricing&body=I would like a custom system with the following features: %0A${selectedFeatures.join(', ')}`}
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 transition duration-300"
          >
            Contact Us for Price
          </a>
        </div>

        {/* Technologies Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">Technologies We Use</h2>
          <p className="text-lg text-gray-700 mb-6">
            We use a wide variety of modern technologies to deliver scalable, secure, and high-performance systems:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {technologies.map(({ name, icon }) => (
              <div key={name} className="flex flex-col items-center space-y-2">
                {icon}
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
