-- Remove overly permissive RLS policies that expose customer data
DROP POLICY IF EXISTS "Authenticated users can view bookings" ON public.bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON public.bookings;

-- Keep the public INSERT policy for customer bookings
-- (This policy already exists: "Anyone can submit bookings")

-- Note: Bookings can now only be viewed/updated via service role (backend/edge functions)
-- If you need an admin interface later, implement proper role-based access control