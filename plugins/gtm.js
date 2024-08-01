export default ({ app }) => {
    if (process.client) {
      // Create a script element for Google Tag Manager
      const gtmScript = document.createElement('script');
      gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9J0SYGL6JC';
      gtmScript.async = true;
      document.head.appendChild(gtmScript);
      const gtmConfigScript = document.createElement('script');
      gtmConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-9J0SYGL6JC');
      `;
      document.head.appendChild(gtmConfigScript);
    }
  };