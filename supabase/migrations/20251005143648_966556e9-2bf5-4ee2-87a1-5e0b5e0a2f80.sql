-- Add explicit SELECT policy to document that bookings are private
-- Only service role (backend/edge functions) should access booking data

-- This policy explicitly denies all SELECT operations to ensure no one can read bookings
-- except through backend/edge functions using the service role
CREATE POLICY "Bookings are private - no public access"
ON public.bookings
FOR SELECT
TO authenticated, anon
USING (false);

-- Note: This makes the security posture explicit - bookings can only be:
-- 1. Created by anyone (existing INSERT policy)
-- 2. Read/managed via backend with service role credentials