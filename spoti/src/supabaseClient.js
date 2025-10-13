import { createClient } from '@supabase/supabase-js'

const supabaseUrl =" https://mwveypjeecaxntggypgv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dmV5cGplZWNheG50Z2d5cGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3OTc3NzAsImV4cCI6MjA3MzM3Mzc3MH0.ZB1nj1hVHqyfu5_WNIkgsSiJ-_LmF9rV2hrtE0eHZnQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)