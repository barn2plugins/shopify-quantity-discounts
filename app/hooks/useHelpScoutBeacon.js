/**
 * HelpScout Beacon hook
 * @param {*} beaconId 
 * @param {*} userInfo 
 * @returns 
 */
export const useHelpScoutBeacon = (beaconId, userInfo) => {
  // Only run on client side
  if (typeof window === 'undefined') return;
  
  // Avoid duplicate script loading
  if (window.Beacon) {
    window.Beacon('init', beaconId);

    // Helper function to format dates as "Mar 22, 2024"
    const formatDate = (dateString) => {
      if (!dateString) return null;
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    };

    console.log({
      email: userInfo?.email,
      name: userInfo?.name || '',
      company: userInfo?.company || '',
      'Shopify-Shop': userInfo?.shopName || '',
      'Shopify-URL': userInfo?.shopifyURL || '',
      'Shopify-Plan': userInfo?.shopifyPlan || '',
      'Shopify-Plan-Status': userInfo?.shopifyPlanStatus || '',
      'Shopify-Installation-Date': formatDate(userInfo?.installationDate) || '',
      ...(userInfo?.cancelledOn && { 'Shopify-Plan-Cancelled-On': formatDate(userInfo.cancelledOn) }),
      ...(userInfo?.trialEndsAt && { 'Shopify-Trial-Ends-At': formatDate(userInfo.trialEndsAt) }),
    });
    
    // Identify user if info is provided
    window.Beacon('identify', {
      email: userInfo?.email,
      name: userInfo?.name || '',
      company: userInfo?.company || '',
      'Shopify-Shop': userInfo?.shopName || '',
      'Shopify-URL': userInfo?.shopifyURL || '',
      'Shopify-Plan': userInfo?.shopifyPlan || '',
      'Shopify-Plan-Status': userInfo?.shopifyPlanStatus || '',
      'Shopify-Installation-Date': formatDate(userInfo?.installationDate) || '',
      ...(userInfo?.cancelledOn && { 'Shopify-Plan-Cancelled-On': formatDate(userInfo.cancelledOn) }),
      ...(userInfo?.trialEndsAt && { 'Shopify-Trial-Ends-At': formatDate(userInfo.trialEndsAt) }),
    });
  }

  // Create and inject the HelpScout script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = `!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`;
  document.head.appendChild(script);

  // Initialize the beacon with your ID after ensuring script is loaded
  const initScript = document.createElement('script');
  initScript.type = 'text/javascript';
  initScript.innerHTML = `window.Beacon('init', '${beaconId}')`;
  document.head.appendChild(initScript);
};