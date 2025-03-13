// User information utility functions for tracking

// Function to get the user's IP address
export const getUserIP = async (): Promise<string> => {
  try {
    const response = await fetch('https://api64.ipify.org/?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return '';
  }
};

// Function to get the user's browser information
export const getUserAgent = (): string => {
  if (typeof window !== 'undefined') {
    return window.navigator.userAgent;
  }
  return '';
};

// Function to get Facebook Browser ID (fbp)
export const getFacebookBrowserId = (): string => {
  if (typeof window === 'undefined') return '';
  
  // Check if fbp cookie exists
  const cookies = document.cookie.split(';');
  const fbpCookie = cookies.find(cookie => cookie.trim().startsWith('_fbp='));
  
  if (fbpCookie) {
    return fbpCookie.trim().substring(5); // Remove '_fbp=' prefix
  }
  
  return '';
};

// Function to get Facebook Click ID (fbc)
export const getFacebookClickId = (): string => {
  if (typeof window === 'undefined') return '';
  
  // Check if fbc cookie exists
  const cookies = document.cookie.split(';');
  const fbcCookie = cookies.find(cookie => cookie.trim().startsWith('_fbc='));
  
  if (fbcCookie) {
    return fbcCookie.trim().substring(5); // Remove '_fbc=' prefix
  }
  
  // If no cookie, check URL for fbclid parameter
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');
  
  if (fbclid) {
    // Format according to Facebook's requirements
    const domain = window.location.hostname;
    const timestamp = Math.floor(Date.now() / 1000);
    return `fb.1.${timestamp}.${fbclid}`;
  }
  
  return '';
};

// Function to get Facebook Login ID (fb_login_id)
export const getFacebookLoginId = (): string => {
  if (typeof window === 'undefined') return '';
  
  // Check localStorage for Facebook Login ID
  const fbLoginId = localStorage.getItem('fb_login_id');
  if (fbLoginId) {
    return fbLoginId;
  }
  
  // Check sessionStorage for Facebook Login ID
  const sessionFbLoginId = sessionStorage.getItem('fb_login_id');
  if (sessionFbLoginId) {
    return sessionFbLoginId;
  }
  
  // Check cookies for Facebook Login ID
  const cookies = document.cookie.split(';');
  const fbLoginIdCookie = cookies.find(cookie => cookie.trim().startsWith('fb_login_id='));
  if (fbLoginIdCookie) {
    return fbLoginIdCookie.trim().substring(12); // Remove 'fb_login_id=' prefix
  }
  
  return '';
};

// Get all user tracking information
export const getUserTrackingInfo = async () => {
  const ip = await getUserIP();
  const userAgent = getUserAgent();
  const fbp = getFacebookBrowserId();
  const fbc = getFacebookClickId();
  const fb_login_id = getFacebookLoginId();
  
  return {
    ip,
    userAgent,
    fbp,
    fbc,
    fb_login_id
  };
}; 