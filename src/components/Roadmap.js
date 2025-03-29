import React from 'react';

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1: Image Filters (Current)',
      description: 'Create and apply AI-generated filters to single and bulk images with async processing.',
      features: [
        'AI-powered filter creation',
        'Bulk image processing',
        'Async job queue system',
        'Filter saving and management',
        'Gallery for processed images'
      ],
      active: true
    },
    {
      phase: 'Phase 2: Enhanced Features',
      description: 'Building on our foundation with advanced capabilities for more creative control.',
      features: [
        'Filter chains (multi-step filters)',
        'Filter QR code sharing',
        'Sync filters across devices',
        'Advanced editing tools',
        'Community filter marketplace'
      ],
      active: false
    },
    {
      phase: 'Phase 3: Video Support',
      description: 'Expanding artyfy to support video filtering and basic video editing.',
      features: [
        'Apply filters to video clips',
        'Video trimming and joining',
        'Custom video transitions',
        'Video effects library',
        'Bulk video processing'
      ],
      active: false
    },
    {
      phase: 'Phase 4: Full Video Editor',
      description: 'Evolving into a comprehensive video editing solution for content creators.',
      features: [
        'macOS desktop application',
        'Professional timeline editing',
        'Audio editing capabilities',
        'Advanced color grading',
        'Export in multiple formats'
      ],
      active: false
    }
  ];

  return (
    <section id="roadmap" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Product Roadmap</h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            We're building the swiss army knife for content creators. Here's our vision for the future of artyfy.
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-lg shadow-sm p-6 transition-all duration-300 ${
                item.active ? 'border-primary' : 'border-gray-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center mb-8 gap-4">
                <h3 className="text-xl md:text-2xl font-bold md:w-1/3">{item.phase}</h3>
                <p className="md:w-2/3">{item.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {item.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className={`py-3 px-4 rounded-lg ${
                      item.active ? 'bg-primary-light' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span 
                        className={`w-4 h-4 rounded-full mr-3 ${
                          item.active ? 'bg-primary' : 'bg-gray-300'
                        }`}
                      ></span>
                      <span>
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
