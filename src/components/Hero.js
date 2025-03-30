import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20" style={{ 
      background: 'linear-gradient(135deg, var(--background), var(--background-alt))'
    }}>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create stunning <span className="text-primary">image filters</span> on the go
            </h1>
            <p className="text-lg mb-8">
              Your pocket image editing studio powered by AI. Use example images and prompts to create custom filters, 
              then apply them to single or bulk images for professional results instantly.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#signup" className="btn btn-primary text-center">
                Join the Waitlist
              </a>
              <a href="#features" className="btn btn-secondary text-center">
                Explore Features
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full" style={{ background: 'var(--secondary)', opacity: '0.1' }}></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full" style={{ background: 'var(--primary)', opacity: '0.1' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
