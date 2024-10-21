import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const Connected = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();  // Stop observing once it's visible
                    }
                });
            },
            { threshold: 0.5 } // 50% of the section must be visible
        );

        const section = document.querySelector('#connected-section');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="connected-section" className="bg-gray-800 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 text-center">
                {/* Schools Section */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Schools Connected</h3>
                    <p className="text-3xl font-semibold">
                        {isVisible ? <CountUp end={120} duration={2} /> : '0'}+
                    </p>
                </div>

                {/* Students Section */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Students</h3>
                    <p className="text-3xl font-semibold">
                        {isVisible ? <CountUp end={10000} duration={2.5} /> : '0'}+
                    </p>
                </div>

                {/* Teachers Section */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Teachers</h3>
                    <p className="text-3xl font-semibold">
                        {isVisible ? <CountUp end={800} duration={2} /> : '0'}+
                    </p>
                </div>

                {/* Parents Section */}
                <div>
                    <h3 className="font-bold text-lg mb-2">Parents</h3>
                    <p className="text-3xl font-semibold">
                        {isVisible ? <CountUp end={5000} duration={2} /> : '0'}+
                    </p>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="container mx-auto mt-12 flex justify-between items-center px-6">
                <div>
                    <p>&copy; {new Date().getFullYear()} Edupy. All Rights Reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400"><FaFacebook size={24} /></a>
                    <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
                    <a href="#" className="hover:text-blue-400"><FaInstagram size={24} /></a>
                </div>
            </div>
        </div>
    );
};

export default Connected;
