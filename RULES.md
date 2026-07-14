# OmniStudy Copilot - Project Rules & Context

## Role & Context
You are a Senior Full-Stack AI Engineer and coding copilot. We are building a 4th-year computer science internship capstone project called "OmniStudy Copilot" over an 8-week sprint.

## Project Overview
"OmniStudy Copilot" is a mobile-first web application (cross-platform) that ingests educational PDFs and provides three core learning modules:
1. **RAG Chat Engine**: Chat interface to query the document with streaming responses and exact page-number citations.
2. **Spaced-Repetition Flashcards**: AI-generated flashcards (strict JSON) presented in a swipeable, Tinder-style deck utilizing a spaced-repetition algorithm (like SM-2).
3. **Dynamic Quiz Engine**: AI-generated assessments (Multiple Choice and Fill-in-the-Blanks) with dynamic UI component mounting, real-time grading, and knowledge gap summaries.

## Tech Stack & Constraints
- **Cost**: Strictly using free-tier services ($0-deployment-cost).
- **Frontend**: React Native (using Expo to compile to Web and Mobile).
  - Libraries: `react-native-reanimated`, `react-native-gesture-handler`, `axios`, Expo Router.
- **Backend**: Python with FastAPI (deployed on Render free tier).
  - Libraries: `PyPDF2` or `pdfplumber`, `Pydantic`, LangChain or native SDKs for LLM orchestration.
- **AI/LLM**: Google Gemini 1.5 Pro/Flash via Google Gen AI SDK.
- **Database & Auth**: Supabase (Free Tier).
  - Services: PostgreSQL with `pgvector`, Supabase Auth, Supabase Storage.

## Core Modules & Technical Requirements
1. **Document Ingestion & RAG**
   - **Flow**: Upload PDF -> FastAPI -> Extract text -> Chunk text -> Generate embeddings -> Store in Supabase pgvector.
   - **Requirement**: Must track `page_number` for every chunk for exact provenance/citations in all AI outputs.
2. **Chat Interface**
   - **Flow**: User asks question -> FastAPI vector search in Supabase -> Context to Gemini -> Streams response to frontend.
   - **Requirement**: Handle streaming chunks (Server-Sent Events or similar) to prevent UI freezing. Render Markdown.
3. **Flashcard Module**
   - **Flow**: FastAPI prompts Gemini for Q&A pairs (based on PDF vectors) -> Returns strict JSON via Pydantic schemas -> Saved to Supabase -> Fetched by frontend.
   - **Requirement**: Swipeable card deck (Right = Remembered, Left = Forgotten). Update DB using spaced-repetition algorithm to schedule the next review date.
4. **Quiz Module**
   - **Flow**: User selects difficulty/type -> FastAPI requests strict JSON from Gemini -> Frontend dynamically renders MCQ/Fill-in-the-blank based on JSON schema.
   - **Requirement**: Manage complex form state, provide a graded summary screen.

## Database Schema (Initial)
- **users**: Standard Supabase auth.
- **documents**: `id`, `user_id`, `filename`, `storage_url`, `created_at`.
- **document_chunks** (Vector table): `id`, `document_id`, `content`, `page_number`, `embedding` (vector).
- **flashcards**: `id`, `document_id`, `question`, `answer`, `page_reference`.
- **user_flashcard_reviews**: `id`, `user_id`, `flashcard_id`, `next_review_date`, `interval`, `ease_factor`.
- **quizzes**: `id`, `document_id`, `score`, `metadata`.
