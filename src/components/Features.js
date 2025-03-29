import React from 'react';

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
      title: 'AI-Powered Filter Creation',
      description: 'Simply provide example images and descriptions in natural language. Our AI understands your creative vision and generates custom filters that match your style.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      ),
      title: 'Batch Processing & Async',
      description: 'Apply your custom filters to multiple images at once. Our powerful backend processes everything asynchronously so you can continue creating while we handle the heavy lifting.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Share & Collaborate',
      description: 'Save your AI-generated filters to your profile and share them with friends and followers. Create a personal style that stands out or collaborate on creative projects.',
    }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Creative Studio</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Artyfy uses artificial intelligence to transform your creative vision into stunning filters, no technical knowledge required.
          </p>
        </div>

        <div className="flex flex-row justify-center max-w-6xl mx-auto" style={{display: 'flex', flexDirection: 'row'}}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:transform mx-2"
              style={{
                flex: '1 1 0',
                minWidth: '250px',
                maxWidth: '350px'
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-6">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
