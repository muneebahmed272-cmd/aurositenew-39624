-- Add explicit DENY policies for UPDATE and DELETE operations on bookings table
-- This ensures no one can modify or delete booking records except via backend with service role

-- Deny all UPDATE operations - bookings should be immutable once submitted
CREATE POLICY "Bookings cannot be updated"
ON public.bookings
FOR UPDATE
TO authenticated, anon
USING (false);

-- Deny all DELETE operations - bookings should not be deleted by public users
CREATE POLICY "Bookings cannot be deleted"
ON public.bookings
FOR DELETE
TO authenticated, anon
USING (false);

-- Note: Only service role (backend/edge functions) can modify bookings for admin management