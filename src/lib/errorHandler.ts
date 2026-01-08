/**
 * Maps internal error messages to user-friendly messages
 * to prevent information disclosure about system internals
 */
export const getUserFriendlyError = (error: any): string => {
  // Log full error for debugging (server-side in production)
  console.error('Error details:', error);

  const message = error?.message?.toLowerCase() || '';
  const code = error?.code;

  // Supabase/Postgres error codes
  if (code === 'PGRST116') return 'Access denied. You do not have permission to perform this action.';
  if (code === '23505') return 'This record already exists.';
  if (code === '23503') return 'Cannot complete action due to related records.';
  
  // Auth-related errors - keep some context but sanitize details
  if (message.includes('invalid login credentials')) return 'Invalid email or password.';
  if (message.includes('email not confirmed')) return 'Please confirm your email before signing in.';
  if (message.includes('user already registered')) return 'An account with this email already exists.';
  if (message.includes('jwt')) return 'Your session has expired. Please sign in again.';
  if (message.includes('password')) return 'Invalid password. Please check and try again.';
  
  // RLS/permission errors
  if (message.includes('row-level security')) return 'Access denied.';
  if (message.includes('permission denied')) return 'You do not have permission to perform this action.';
  
  // Rate limiting - keep the message as it's user-friendly
  if (error?.status === 429) return error.message;
  
  // Generic fallback - don't expose internal details
  return 'An error occurred. Please try again or contact support if the problem persists.';
};
