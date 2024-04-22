import React from 'react';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

const Footer = () => {
    return (
        <footer className="bg-[#38bdf8] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/" className="text-white font-bold text-xl">
                        {APP_NAME}
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/features" className="text-white hover:text-white">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-white hover:text-white">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-white hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-white hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white hover:text-white"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-white">
                &copy; 2024 {APP_NAME}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;