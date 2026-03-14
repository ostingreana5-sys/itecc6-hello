import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nayooszyffzlefwsxhas.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5heW9vc3p5ZmZ6bGVmd3N4aGFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0NDU5MDQsImV4cCI6MjA4OTAyMTkwNH0._uCYzJ4H0CVdVnutNmtGGhxdsZjTwgVJabt8wYn0-g8'

export const supabase = createClient(supabaseUrl, supabaseKey)