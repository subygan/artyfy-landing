import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    console.log('Email submitted:', email);
    // For demo purposes, just show a success message
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="signup" className="section" style={{ 
      background: 'linear-gradient(to right, var(--primary-dark), var(--primary))'
    }}>
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Be the first to try artyfy</h2>
              <p className="mb-8">
                Join our waitlist to get early access when we launch. As an early user, 
                you'll receive exclusive perks and the opportunity to shape the future of artyfy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Early access to all features</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Provide feedback on the roadmap</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Lifetime discount on premium features</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Join the waitlist</h3>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email address</label>
                    <input 
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full btn btn-primary py-3"
                  >
                    Get Early Access
                  </button>
                  <p className="text-sm mt-4">
                    We'll never spam you or share your email. You can unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="bg-gray-50 p-6 rounded-lg h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank you for signing up!</h3>
                  <p>
                    We'll keep you updated on our progress and let you know when artyfy is ready for you to try.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
