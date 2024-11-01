import React, { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Set up Calendly event listener after widget loads
    script.onload = () => {
      window.addEventListener('message', function(e) {
        if (e.data.event && e.data.event.indexOf('calendly') === 0) {
          if (e.data.event === 'calendly.event_scheduled') {
            // Google Ads Conversion Tracking
            if (window.gtag) {
              gtag('event', 'conversion', {
                'send_to': '16761441213/KGL3CIGnv-QZEL2Xvbg-'  // Replace with your actual values
              });
            }
            
            // Optional: You can also track it in Google Analytics
            if (window.gtag) {
              gtag('event', 'calendly_booking', {
                'event_category': 'Calendly',
                'event_label': 'Research Study Booking'
              });
            }
          }
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Age at Home Research Study</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
        {/* Add Google Ads global site tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-CONVERSION_ID');
          `
        }} />
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

      {/* Rest of your existing JSX remains the same */}
      <div className="bg-gray-50">
        {/* ... existing content ... */}
      </div>
    </>
  );
}
