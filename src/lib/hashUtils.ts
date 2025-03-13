import crypto from 'crypto';

/**
 * Hash email according to Meta requirements
 * - Trim leading/trailing spaces
 * - Convert to lowercase
 * - Hash with SHA256
 */
export function hashEmail(email: string): string {
  if (!email) return '';
  
  // Normalize: trim and lowercase
  const normalizedEmail = email.trim().toLowerCase();
  
  // Hash with SHA256
  return crypto.createHash('sha256').update(normalizedEmail).digest('hex');
}

/**
 * Hash phone number according to Meta requirements
 * - Remove symbols, letters, and leading zeros
 * - Ensure country code is included
 * - Hash with SHA256
 */
export function hashPhone(phone: string): string {
  if (!phone) return '';
  
  // Normalize: remove all non-digit characters
  let normalizedPhone = phone.replace(/\D/g, '');
  
  // Ensure country code (assuming Indian numbers with +91 prefix)
  // If the number doesn't start with country code, add it
  if (normalizedPhone.length === 10) {
    normalizedPhone = '91' + normalizedPhone;
  } else if (normalizedPhone.startsWith('0')) {
    normalizedPhone = '91' + normalizedPhone.substring(1);
  }
  
  // Hash with SHA256
  return crypto.createHash('sha256').update(normalizedPhone).digest('hex');
}

/**
 * Hash name according to Meta requirements
 * - Convert to lowercase
 * - No punctuation
 * - UTF-8 encoding for special characters
 */
export function hashName(name: string): string {
  if (!name) return '';
  
  // Normalize: lowercase
  const normalizedName = name.trim().toLowerCase();
  
  // Hash with SHA256 (Node.js strings are UTF-8 by default)
  return crypto.createHash('sha256').update(normalizedName).digest('hex');
}

/**
 * Parse full name into first and last name
 */
export function parseFullName(fullName: string): { firstName: string; lastName: string } {
  if (!fullName) return { firstName: '', lastName: '' };
  
  const nameParts = fullName.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';
  
  return { firstName, lastName };
}

/**
 * Hash user details for Meta conversion API
 */
export function hashUserDetails(userDetails: { 
  name?: string; 
  email?: string; 
  phone?: string;
}): {
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
} {
  if (!userDetails) return {};
  
  const result: { em?: string; ph?: string; fn?: string; ln?: string; } = {};
  
  // Hash email if present
  if (userDetails.email) {
    result.em = hashEmail(userDetails.email);
  }
  
  // Hash phone if present
  if (userDetails.phone) {
    result.ph = hashPhone(userDetails.phone);
  }
  
  // Parse and hash name if present
  if (userDetails.name) {
    const { firstName, lastName } = parseFullName(userDetails.name);
    
    if (firstName) {
      result.fn = hashName(firstName);
    }
    
    if (lastName) {
      result.ln = hashName(lastName);
    }
  }
  
  return result;
} 