import { createClient } from '@supabase/supabase-js'

const {
  SUPABASE_URL = 'https://vnakoifihmkhvjkxyxbi.supabase.co',
  SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYWtvaWZpaG1raHZqa3h5eGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2MjM3NTIsImV4cCI6MTk5OTE5OTc1Mn0.v8Ii-w6nauJZn8_k5TWXct_IapPeNA3aqTvrBSoE5dM'
} = process.env

interface IDatabase {
  public: {
    Tables: {
      persons: {
        Row: {
          id: number,
          name: string,
          motherId: number,
          fatherId: number,
          biography: string,
          birthDate: string,
          deathDate: string,
          avatar: string
        }
        Insert: {}
        Update: {}
      }
    }
  }
}

export const supabase = createClient<IDatabase>(SUPABASE_URL, SUPABASE_API_KEY)