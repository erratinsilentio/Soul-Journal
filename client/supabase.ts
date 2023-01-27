import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

const supabaseUrl = "https://szfgbidqxtgnedqceyao.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6ZmdiaWRxeHRnbmVkcWNleWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3NjYwODMsImV4cCI6MTk5MDM0MjA4M30.njTJLc8ScveR9U9dutoZgOJUCNa2euez6WSrX3Walrw";

export const supabase = createClient(supabaseUrl, supabaseKey);
