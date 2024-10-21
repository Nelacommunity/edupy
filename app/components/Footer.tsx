import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn , FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                        <Image src="/images/logo.png" alt="Edupy logo" width={60} height={60} />
                        <h2 className="text-2xl font-bold">Edupy</h2>
                        <p className="text-gray-400">Transforming Education for a Better Tomorrow</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul>
                                <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                                <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF className="hover:text-gray-300" size={24} />
                                </Link>
                                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="hover:text-gray-300" size={24} />
                                </Link>
                                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="hover:text-gray-300" size={24} />
                                </Link>
                                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn className="hover:text-gray-300" size={24} />
                                </Link>
                                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="hover:text-gray-300" size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Contact Information Section */}
                <div className="border-t border-gray-700 pt-4 mt-4">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-gray-400">Phone Number: <span className="text-gray-300">0789567444</span></p>
                    <p className="text-gray-400">Whatsapp: <span className="text-gray-300">0789567444</span></p>
                    <p className="text-gray-400">Email: <span className="text-gray-300">support@edupy.com</span></p>
                    <p className="text-gray-400">Location: <span className="text-gray-300">P.O. Box 234, Mwanza, Ilemela</span></p>
                </div>
                
                <div className="border-t border-gray-700 pt-4 mt-4">
                    <p className="text-center text-gray-400">
                        &copy; {new Date().getFullYear()} Edupy. All rights reserved.
                    </p>
                    <p className="text-center text-gray-400">
                        For inquiries, email us at <a href="mailto:support@edupy.com" className="text-blue-400 hover:underline">support@edupy.com</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
