import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zvyjyparddgkynnuodic.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2eWp5cGFyZGRna3lubnVvZGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDUyMDgsImV4cCI6MjA0NzA4MTIwOH0.dB87M5L2hnRq6YvuZ7kv-bVtpYdhN8LUtuaCBDteBGM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
