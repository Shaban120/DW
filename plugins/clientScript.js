export default () => {
    // Load the first script
    const script1 = document.createElement('script');
    script1.src = 'https://services.leadconnectorhq.com/appengine/loc/eYfduDnP9mHbOhbqiOFN/pool/QEEgQzfFmExfgv1Ps90t/number_pool.js';
    script1.async = true;
    document.body.appendChild(script1);
    // Load the second script
    const script2 = document.createElement('script');
    script2.src = 'https://services.leadconnectorhq.com/appengine/js/user_session.js';
    script2.async = true;
    document.body.appendChild(script2);
  };