import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Upload Examples & Describe',
      description: 'Upload example images and describe the style you want in natural language. Our AI uses these to understand your vision.',
      color: 'var(--primary)'
    },
    {
      number: '02',
      title: 'AI Generates Your Filter',
      description: 'Our powerful AI analyzes your examples and description to create a custom filter that matches your creative vision.',
      color: 'var(--secondary)'
    },
    {
      number: '03',
      title: 'Apply & Process',
      description: 'Apply your filter to selected images. For bulk processing, our async system works in the background while you continue using your device.',
      color: 'var(--primary)'
    },
    {
      number: '04',
      title: 'Share Your Creations',
      description: 'Once processing is complete, view your transformed images in the gallery, download them to your device, or share directly to social media.',
      color: 'var(--secondary)'
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Transform your photos into stunning artwork in just a few simple steps
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Line connecting the steps */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-white shadow-md flex items-center justify-center p-4">
                    <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center">
                      <span className="text-4xl font-bold" style={{ color: step.color }}>{step.number}</span>
                    </div>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
