"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set countdown to 1 day from now
    const targetDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-700">
        <div className="absolute inset-0 pattern-bg opacity-20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="leaf-1"></div>
        <div className="leaf-2"></div>
        <div className="leaf-3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Coming Soon Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-100 mb-4 md:mb-6 animate-fade-in tracking-wider">
          COMING SOON
        </h2>

        {/* Logo/Title Section */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative bg-amber-950 rounded-lg px-4 sm:px-6 md:px-8 py-3 md:py-4 ring-1 ring-amber-900/5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-300">
                Draft House
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-amber-200 mt-1 md:mt-2">
                Boutique Stay
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-amber-100 mb-8 md:mb-12 text-center max-w-xs sm:max-w-md md:max-w-2xl animate-fade-in-delay px-2">
          A boutique stay near Bir&apos;s paragliding landing site. Blending
          modern comfort with mountain charm for travelers seeking thoughtful
          spaces and meaningful experiences.
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 w-full max-w-sm md:max-w-2xl">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="timer-box">
              <div className="bg-amber-900/30 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 border border-amber-700/50 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-100">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-amber-300 capitalize">
                  {unit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-xs sm:max-w-2xl md:max-w-4xl w-full">
          <div className="feature-card group">
            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 border border-amber-700/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🏔️</div>
              <h3 className="text-base md:text-lg font-semibold text-amber-200 mb-1 md:mb-2">
                Mountain Views
              </h3>
              <p className="text-amber-100/80 text-xs md:text-sm">
                Breathtaking panoramic views of the Himalayan ranges
              </p>
            </div>
          </div>
          <div className="feature-card group">
            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 border border-amber-700/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🏨</div>
              <h3 className="text-base md:text-lg font-semibold text-amber-200 mb-1 md:mb-2">
                Boutique Rooms
              </h3>
              <p className="text-amber-100/80 text-xs md:text-sm">
                Luxurious and uniquely designed accommodations
              </p>
            </div>
          </div>
          <div className="feature-card group">
            <div className="bg-amber-900/20 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 border border-amber-700/30 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 sm:col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">🪂</div>
              <h3 className="text-base md:text-lg font-semibold text-amber-200 mb-1 md:mb-2">
                Adventure Sports
              </h3>
              <p className="text-amber-100/80 text-xs md:text-sm">
                Paragliding, trekking, and mountain biking experiences
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 sm:gap-6 mt-8 md:mt-12">
          <a
            href="https://www.facebook.com/drafthouse.bir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-amber-100 transition-colors duration-300 transform hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/thedraftbir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 hover:text-amber-100 transition-colors duration-300 transform hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
