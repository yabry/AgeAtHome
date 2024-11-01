import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Age-at-Home Research Study</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
        <style>{`
          .custom-teal { color: #0D9488 }
          .bg-custom-teal { background-color: #0D9488 }
          .border-custom-teal { border-color: #0D9488 }
          .hero-image-container {
            position: relative;
            height: 300px;
            overflow: hidden;
            border-radius: 12px;
          }
          @media(min-width: 768px) {
            .hero-image-container { height: 400px }
          }
          .hero-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .hero-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.7));
            padding: 1rem;
            color: white;
          }
          @media(min-width: 768px) {
            .hero-overlay { padding: 2rem }
          }
          body { overflow-x: hidden }
        `}</style>
      </Head>

      <div className="bg-gray-50">
        <div className="min-h-screen lg:flex flex-col lg:flex-row">
          {/* Left side */}
          <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="text-center mb-4 lg:mb-6">
                <span className="text-2xl sm:text-3xl font-bold custom-teal">Age-at-Home</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4 px-2 mt-4">
                  Your Home. Their Freedom.
                </h1>
                <p className="text-base sm:text-lg text-gray-600 mb-4 lg:mb-6 px-2">
                  Join us in creating innovative solutions for comfortable and independent aging at home.
                </p>
              </div>
              {/* Hero Image */}
              <div className="hero-image-container shadow-lg mb-4 lg:mb-0 flex-grow">
                <img 
                  src="https://i0.wp.com/yourkeytoseniorlivingoptions.com/wp-content/uploads/2022/07/Depositphotos_102600374_XL-1.jpg?w=600&ssl=1"
                  alt="Senior friends enjoying time together at home"
                  className="w-full"
                />
                <div className="hero-overlay">
                  <p className="text-xl sm:text-2xl font-semibold">
                    Help shape the future of aging at home
                  </p>
                  <p className="text-lg sm:text-xl mt-2 text-green-300">
                    Receive a $25 Amazon gift card for your participation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-white">
            <div className="text-center mb-4 lg:mb-6">
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg inline-block">
                <p className="text-sm sm:text-base text-green-800 font-medium">
                  We're seeking thoughtful individuals aged 65-70 to share their perspectives
                </p>
                <p className="text-sm sm:text-base text-green-600 font-medium mt-2">
                  Participants receive a $25 Amazon gift card as a thank you
                </p>
              </div>
            </div>
            {/* Calendly inline widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/yishai-nqb8/30min" 
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
