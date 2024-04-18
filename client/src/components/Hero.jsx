import React from 'react';
import Image from 'next/image';
import heroImage from '@/assets/hero.webp';
import { APP_NAME } from '@/lib/constants';

const Hero = () => {
    return (
        <div className="bg-[url('../assets/bg.jpg')] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 space-y-6 bg-white">
                    <h1 className="text-4xl font-bold text-black">
                        Welcome to {APP_NAME}
                    </h1>
                    <p className="text-lg text-primary">
                        Discover the pinnacle of athletic prowess as we unveil the elite ranks of the sporting world&apos;s finest. From the lightning-fast agility of soccer stars to the strategic brilliance of chess grandmasters, we celebrate the champions who redefine the limits of human achievement.
                    </p>
                    <button
                        onClick={() => { window.location = '/sports' }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md">
                        Get Started
                    </button>
                </div>
                <div className="md:w-1/2 mb-10 md:mb-0">
                    {/* <Image
                        src={heroImage}
                        alt="Hero Image"
                        width={500}
                        height={400}
                        className="rounded-md shadow-lg"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;