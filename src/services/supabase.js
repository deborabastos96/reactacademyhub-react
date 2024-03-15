import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hxbvkoirusxsbbampmzj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4YnZrb2lydXN4c2JiYW1wbXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NTk5OTYsImV4cCI6MjAyNjAzNTk5Nn0.LALF3CSPRgaLw5CyeemMSsflatdbIPXqVPfQAcqmG6U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
