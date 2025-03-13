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
  try {
    const url = new URL(window.location.href);
    const fbclid = url.searchParams.get('fbclid');
    
    if (fbclid) {
      // Format: fb.1.{timestamp}.{fbclid}
      const timestamp = Math.floor(Date.now() / 1000);
      const fbc = `fb.1.${timestamp}.${fbclid}`;
      
      // Set as cookie for future use
      document.cookie = `_fbc=${fbc}; path=/; max-age=7776000`; // 90 days
      
      return fbc;
    }
  } catch (error) {
    console.error('Error processing fbclid:', error);
  }
  
  return '';
};

// Function to get Facebook Login ID
export const getFacebookLoginId = (): string => {
  if (typeof window === 'undefined') return '';
  
  // This is a placeholder. In a real implementation, you would:
  // 1. Check if the user is logged in with Facebook
  // 2. Get their Facebook ID from your auth system
  // 3. Return it for tracking
  
  // For now, we'll return an empty string
  return '';
};

// Function to get stored user data from localStorage
export const getStoredUserData = (): { name?: string; email?: string; phone?: string } => {
  if (typeof window === 'undefined') return {};
  
  try {
    const savedDetails = localStorage.getItem('userDetails');
    if (savedDetails) {
      return JSON.parse(savedDetails);
    }
  } catch (error) {
    console.error('Error parsing saved user details:', error);
  }
  
  return {};
};

// Get all user tracking information
export const getUserTrackingInfo = async () => {
  // Get basic tracking info
  const ip = await getUserIP();
  const userAgent = getUserAgent();
  const fbp = getFacebookBrowserId();
  const fbc = getFacebookClickId();
  const fb_login_id = getFacebookLoginId();
  
  // Get stored user data
  const userData = getStoredUserData();
  
  return {
    // Browser and network info
    ip,
    userAgent,
    
    // Facebook parameters
    fbp,
    fbc,
    fb_login_id,
    
    // User data (if available)
    ...(userData.name && { name: userData.name }),
    ...(userData.email && { email: userData.email }),
    ...(userData.phone && { phone: userData.phone })
  };
}; 