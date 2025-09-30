-- Fix critical security vulnerability: Remove anonymous access to bookings data
-- This policy was allowing anyone (auth.uid() IS NULL) to view all customer bookings

DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;

-- Create secure policy that only allows authenticated users to view their own bookings by email
CREATE POLICY "Users can view their own bookings by email" 
ON public.bookings 
FOR SELECT 
USING (
  auth.uid() IS NOT NULL AND 
  email = ((current_setting('request.jwt.claims'::text, true))::json ->> 'email'::text)
);

-- Optional: Add policy for admin access (uncomment if needed)
-- CREATE POLICY "Admin can view all bookings" 
-- ON public.bookings 
-- FOR SELECT 
-- USING (
--   auth.uid() IS NOT NULL AND 
--   (SELECT role FROM public.profiles WHERE id = auth.uid()) = 'admin'
-- );