# Agent Instructions for OmniStudy Copilot

- Always adhere to the tech stack defined in `RULES.md` (React Native/Expo, FastAPI, Supabase, Gemini 1.5 Pro/Flash).
- Maximize cost-efficiency: restrict architectures to free-tier constraints (Render free tier, Supabase free tier).
- Provide clean, robust, streaming-ready code and focus on high engineering rigor.
- When generating schemas, strictly use Pydantic for the Python backend.
- Maintain accurate `page_number` tracking for chunking and prompt generation.
- Consult `RULES.md` for architecture and database schema rules.
