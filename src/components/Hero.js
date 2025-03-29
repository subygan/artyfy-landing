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
            <div className="rounded-lg overflow-hidden shadow-lg p-6" style={{ 
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border)'
            }}>
              {/* Multiple app screenshots in horizontal layout */}
              <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
                {/* App Screenshot 1 */}
                <div className="flex-shrink-0 bg-white rounded-lg w-48 h-80 flex items-center justify-center shadow-sm">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-light flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Filter Creation</p>
                    <p className="text-xs text-tertiary">AI-powered tools</p>
                  </div>
                </div>

                {/* App Screenshot 2 */}
                <div className="flex-shrink-0 bg-white rounded-lg w-48 h-80 flex items-center justify-center shadow-sm">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-light flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 9a3 3 0 0 1 0-6h20a3 3 0 0 1 0 6"></path>
                        <path d="M2 12h20"></path>
                        <path d="M2 15h20"></path>
                        <path d="M2 18h20"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Filter Library</p>
                    <p className="text-xs text-tertiary">Save & organize</p>
                  </div>
                </div>

                {/* App Screenshot 3 */}
                <div className="flex-shrink-0 bg-white rounded-lg w-48 h-80 flex items-center justify-center shadow-sm">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary-light flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Batch Processing</p>
                    <p className="text-xs text-tertiary">Apply to multiple images</p>
                  </div>
                </div>
              </div>
            </div>
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
