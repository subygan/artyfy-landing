import React, { useEffect } from 'react';

const Signup = () => {
  // Load ConvertKit script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="signup" className="section" style={{ 
      background: 'linear-gradient(to right, var(--primary-dark), var(--primary))'
    }}>
      <div className="container flex justify-center items-center py-16">
        <form 
          action="https://app.kit.com/forms/7857233/subscriptions" 
          className="seva-form formkit-form" 
          method="post" 
          data-sv-form="7857233" 
          data-uid="ab403fcbc0" 
          data-format="inline" 
          data-version="5" 
          data-options={{
            settings: {
              after_subscribe: {
                action: "message",
                success_message: "Success! Now check your email to confirm your subscription.",
                redirect_url: ""
              },
              analytics: {
                google: null,
                fathom: null,
                facebook: null,
                segment: null,
                pinterest: null,
                sparkloop: null,
                googletagmanager: null
              },
              modal: {
                trigger: "timer",
                scroll_percentage: null,
                timer: 5,
                devices: "all",
                show_once_every: 15
              },
              powered_by: {
                show: true,
                url: "https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
              },
              recaptcha: { enabled: false },
              return_visitor: { action: "show", custom_content: "" },
              slide_in: {
                display_in: "bottom_right",
                trigger: "timer",
                scroll_percentage: null,
                timer: 5,
                devices: "all",
                show_once_every: 15
              },
              sticky_bar: {
                display_in: "top",
                trigger: "timer",
                scroll_percentage: null,
                timer: 5,
                devices: "all",
                show_once_every: 15
              }
            },
            version: "5"
          }}
          min-width="400 500 600 700 800" 
          style={{ backgroundColor: 'rgb(247, 247, 247)', borderRadius: '0px', maxWidth: '80%', margin: '0 auto' }}
        >
          <div data-style="image">
            <div data-element="column" className="formkit-column">
              <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
              <div data-element="fields" className="seva-fields formkit-fields">
                <div className="formkit-field">
                  <input 
                    className="formkit-input" 
                    name="email_address" 
                    aria-label="Email Address" 
                    placeholder="Email Address" 
                    required="" 
                    type="email" 
                    style={{ 
                      color: 'rgb(77, 77, 77)', 
                      borderColor: 'rgb(227, 227, 227)', 
                      borderRadius: '0px', 
                      fontWeight: 400,
                      padding: '15px 12px',
                      width: '100%',
                      marginBottom: '20px'
                    }}
                  />
                </div>
                <button 
                  data-element="submit" 
                  className="formkit-submit formkit-submit" 
                  style={{ 
                    color: 'rgb(255, 255, 255)', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '0px', 
                    fontWeight: 400,
                    width: '100%',
                    padding: '15px',
                    marginBottom: '20px'
                  }}
                >
                  <div className="formkit-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Get Early Access</span>
                </button>
              </div>
              
              <div className="formkit-guarantee" 
                data-element="guarantee" 
                style={{ 
                  textAlign: 'center',
                  margin: '20px 0',
                  fontSize: '13px',
                  color: 'rgb(77, 77, 77)'
                }}
              >
                Check your email for confirmation.
                <br />
                We won't send you spam. Unsubscribe at any time.
              </div>
            
            </div>
          </div>
          
          <style jsx>{`
            .formkit-form[data-uid="ab403fcbc0"] * {
              box-sizing: border-box;
            }
            .formkit-form[data-uid="ab403fcbc0"] {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              max-width: 80% !important;
              overflow: hidden;
              margin: 0 auto;
            }
            .formkit-form[data-uid="ab403fcbc0"] [data-style="image"] {
              width: 100%;
              display: block;
            }
            .formkit-form[data-uid="ab403fcbc0"] .formkit-header {
              margin-bottom: 10px;
              text-transform: uppercase;
              letter-spacing: 0.6px;
            }
            .formkit-form[data-uid="ab403fcbc0"] .formkit-subheader {
              opacity: 0.8;
            }
            .formkit-form[data-uid="ab403fcbc0"] .formkit-column {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
              padding: 30px;
            }
            .formkit-form[data-uid="ab403fcbc0"] .formkit-column:first-of-type {
              max-height: 80vh;
              justify-content: flex-end;
              flex-direction: column;
              display: flex;
              text-align: center;
              padding-bottom: 100px;
              position: relative;
            }
            .formkit-form[data-uid="ab403fcbc0"] .formkit-column:first-of-type * {
              z-index: 2;
            }
            .formkit-form[data-uid="ab403fcbc0"] .formkit-background {
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-size: cover;
              background-position: center;
              opacity: 0.5;
              z-index: 1;
            }
          `}</style>
        </form>
      </div>
    </section>
  );
};

export default Signup;
