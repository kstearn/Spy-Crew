import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aehhpltewhumqugwther.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlaGhwbHRld2h1bXF1Z3d0aGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxOTUzOTUsImV4cCI6MjAxMzc3MTM5NX0.Y-6w4tojLGpZJK95oeikIGdeT8HyJeiwyAbnaDG8eH8';

export const supabase = createClient(supabaseUrl, supabaseKey);