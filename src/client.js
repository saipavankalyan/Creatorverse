import { createClient } from "@supabase/supabase-js";

const URL = "https://kerjggtxfxlzkyaizhfj.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlcmpnZ3R4Znhsemt5YWl6aGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3MDU2MzgsImV4cCI6MjAwNzI4MTYzOH0.5IX_gZVFTdaKIkDg9LxiK0jXXBtXczW7Cb_-xmmyiHI";

const supabase = createClient(URL, API_KEY);

console.log("Connected to creatorverse DB", supabase);

export default supabase;
