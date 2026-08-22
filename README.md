# RIVO

Streaming app frontend connected to Supabase.

## Setup

1. Import this repository into Replit or clone it locally.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and add your Supabase URL and publishable key.
4. Run `npm run dev`.

For Netlify, configure these build-time environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## Completed features

- Responsive streaming home UI
- Movies and series
- Search and My List
- Google sign-in via Supabase Auth
- Admin Studio
- Draft/published content
- Hero-banner selection
- Movie sources: YouTube embed or local video URL
- Series and episodes
- Add more episodes after a series is published
- Supabase-backed content loading

The Supabase database schema and RLS policies were created in the connected Supabase project during the build.
