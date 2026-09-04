# BUILD: AI PORTFOLIO ASSISTANT BACKEND WITH FASTAPI + OPENAI

Build a production-ready AI Portfolio Assistant backend for my personal portfolio website.

The frontend is already being built with React + Tailwind CSS.

Your task is to create the complete **FastAPI AI backend** that connects the React portfolio to OpenAI.

The AI should behave like an intelligent portfolio guide that helps recruiters, interviewers and visitors understand my education, 6-month internship journey, projects, skills, technologies and learning.

---

# 1. CORE ARCHITECTURE

Implement this architecture:

React Portfolio
↓
POST /api/chat
↓
FastAPI Backend
↓
Portfolio Knowledge Base
↓
System Prompt
↓
OpenAI API
↓
AI Response
↓
React Chat Interface

IMPORTANT:

NEVER expose the OpenAI API key in the React frontend.

The API key must exist ONLY in the FastAPI backend environment.

---

# 2. TECHNOLOGY STACK

Use:

* Python 3.11+
* FastAPI
* Uvicorn
* OpenAI Python SDK
* Pydantic
* python-dotenv
* CORS middleware

Optional production tools:

* slowapi or equivalent rate limiting
* httpx
* logging
* streaming responses

Keep the implementation clean and modular.

---

# 3. PROJECT STRUCTURE

Create this structure:

backend/

├── app/
│   ├── main.py
│   │
│   ├── routes/
│   │   └── chat.py
│   │
│   ├── services/
│   │   └── openai_service.py
│   │
│   ├── data/
│   │   ├── profile.py
│   │   ├── projects.py
│   │   ├── skills.py
│   │   ├── journey.py
│   │   └── knowledge.py
│   │
│   ├── schemas/
│   │   └── chat.py
│   │
│   └── config.py
│
├── .env
├── .env.example
├── requirements.txt
└── README.md

Do NOT put the entire portfolio knowledge directly inside the chat route.

Keep portfolio information in structured data files.

---

# 4. ENVIRONMENT VARIABLES

Create:

.env

Use:

OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5.5

The model must be configurable through OPENAI_MODEL.

Do not hardcode the API key.

If the configured model is unavailable, return a clean backend error rather than exposing the raw OpenAI error to the visitor.

Also create:

.env.example

with:

OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.5

---

# 5. CONFIGURATION

Create:

app/config.py

Use environment variables safely.

Example concept:

Settings should contain:

* OPENAI_API_KEY
* OPENAI_MODEL
* FRONTEND_URL
* MAX_MESSAGE_LENGTH

Never print the API key in logs.

---

# 6. PORTFOLIO KNOWLEDGE BASE

Create structured knowledge.

Example:

profile.py

Store:

* Name: Abhijit Bhunia
* Role: AI/ML Trainee
* Education: B.Tech Computer Science & Engineering
* College: MCKV Institute of Engineering
* CGPA: 9.19
* Internship duration: 6 months

Do NOT invent:

* Employee ID
* Joining date
* Email
* Phone number
* GitHub
* LinkedIn
* Salary
* Company details

Use placeholders until I provide verified information.

---

# 7. PROJECT DATA

Create projects.py.

Each project should follow this structure:

{
"name": "...",
"category": "...",
"description": "...",
"problem": "...",
"solution": "...",
"technologies": [],
"workflow": [],
"learning": [],
"future_scope": [],
"live_url": "",
"github_url": ""
}

Use the actual projects from my portfolio.

Projects include:

* ATLAS AI Research & Knowledge Agent
* AI Content Editor
* AI Resume Builder
* AigramX
* City Canvas
* Safari / City Travel
* AI Learning Management System
* AI Medical Assistant
* Email-related AI project

Use exact project URLs when available.

ATLAS live URL:

https://atlas-swart-kappa-13.vercel.app/

AI Content Editor:

https://contenteditor.vercel.app/

AI Resume:

https://resume-ai-three-omega.vercel.app/

AigramX:

https://texts-frontend-swart.vercel.app/login

City Canvas:

https://city-canvas.vercel.app/

Safari / City Travel:

https://city-travel01.vercel.app/

AI Learning:

https://learning-management1.vercel.app/signup

If github_url is empty:

DO NOT generate or display a fake GitHub URL.

---

# 8. SKILLS KNOWLEDGE

Create skills.py.

Organize skills into:

Frontend:

* React
* JavaScript
* HTML
* CSS
* Tailwind CSS

Backend:

* Node.js
* Express
* FastAPI
* REST APIs

AI/ML:

* Python
* Machine Learning
* NLP
* LLMs
* LangChain
* LangGraph

Database:

* MongoDB
* MySQL
* Oracle DB
* Dataverse

Automation:

* Zapier
* Power Apps
* Power Automate

Cloud / DevOps:

* AWS
* Docker
* Git
* Vercel

Analytics:

* Power BI
* Tableau
* Excel

Never assign unsupported proficiency percentages such as:

"React 95%"

unless explicitly provided.

---

# 9. SIX-MONTH JOURNEY

Create journey.py.

Represent the internship journey as six stages.

MONTH 1 — FOUNDATION

Learning:

* Python
* Java
* React
* Git
* Databases
* APIs

MONTH 2 — FULL STACK DEVELOPMENT

Learning:

* React
* REST APIs
* Node.js
* Express
* Databases
* Authentication
* Responsive UI
* Deployment

MONTH 3 — AI / ML

Learning:

* Python
* Machine Learning
* NLP
* LLMs
* LangChain
* FastAPI

MONTH 4 — AUTOMATION

Learning:

* Zapier
* Power Apps
* Power Automate
* Dataverse

MONTH 5 — AI PRODUCT DEVELOPMENT

Focus:

* Frontend
* Backend
* AI integration
* APIs
* Databases
* Deployment

MONTH 6 — PROFESSIONAL GROWTH

Focus:

* Problem solving
* UI/UX
* AI integration
* Full-stack thinking
* Automation
* Product thinking

---

# 10. KNOWLEDGE AGGREGATOR

Create:

app/data/knowledge.py

Combine:

profile
education
experience
journey
projects
skills
learning
future goals
contact information

into one portfolio knowledge object.

Example:

PORTFOLIO_KNOWLEDGE = {
"profile": PROFILE,
"journey": JOURNEY,
"projects": PROJECTS,
"skills": SKILLS,
"learning": LEARNING,
"future_goals": FUTURE_GOALS
}

The AI receives this information as context.

---

# 11. SYSTEM PROMPT

Create a dedicated system prompt.

The AI must follow these rules:

"You are Abhijit's AI Portfolio Assistant.

Your job is to help visitors, recruiters and interviewers understand Abhijit Bhunia's education, six-month internship journey, projects, technical skills, AI/ML experience, frontend/UI/UX capabilities, technologies and learning experience.

Use ONLY verified information provided in the portfolio knowledge base.

NEVER invent information.

Never invent:

* achievements
* companies
* employment history
* salary
* project statistics
* GitHub repositories
* certifications
* contact information
* employee ID
* joining date

If information is unavailable, say:

'I don't have that information in Abhijit's portfolio yet.'

Do not claim that Abhijit has experience with a technology unless it exists in the knowledge base.

When discussing a project, explain:

1. What it is
2. What problem it solves
3. Main technologies
4. Basic workflow
5. What Abhijit learned
6. Future scope

Explain technical concepts simply for normal visitors.

Provide deeper technical details for technical visitors.

Keep answers concise, professional, friendly and natural.

Do not pretend to literally be Abhijit.

You are Abhijit's AI Portfolio Assistant."

---

# 12. CHAT API

Create:

POST /api/chat

Request:

{
"message": "Tell me about ATLAS"
}

Response:

{
"success": true,
"answer": "ATLAS is Abhijit's AI Research & Knowledge Agent..."
}

Validate:

* Empty messages
* Excessively long messages
* Invalid request body

Limit message length to approximately 2000 characters.

---

# 13. OPENAI SERVICE

Create:

app/services/openai_service.py

The OpenAI integration must be isolated from the route.

The route should call something like:

answer = await generate_ai_response(
user_message,
portfolio_context
)

The OpenAI service should:

1. Load API key
2. Load model
3. Build system instructions
4. Add portfolio knowledge
5. Send user question
6. Return clean text

Use the current OpenAI Python SDK correctly.

Do not expose raw SDK objects to the frontend.

---

# 14. PROJECT-AWARE ANSWERS

The AI must understand project-specific questions.

Example:

User:

"What is ATLAS?"

Answer should contain:

ATLAS is Abhijit's AI Research & Knowledge Agent.

What it does:
AI-powered research and knowledge workflow.

Technologies:
React, FastAPI, LangChain, LangGraph, MongoDB, ChromaDB.

Workflow:

Question
→ Research
→ Retrieval
→ AI Processing
→ Structured Answer

Future scope:

* Multi-agent research
* Document intelligence
* Knowledge graphs

If a live URL exists, return a structured action:

{
"type": "project_link",
"label": "Open ATLAS",
"url": "https://atlas-swart-kappa-13.vercel.app/"
}

---

# 15. STRUCTURED RESPONSE SUPPORT

Do not force every answer into JSON if simple text is sufficient.

However, allow the backend to return optional actions.

Example:

{
"success": true,
"answer": "...",
"actions": [
{
"type": "project_link",
"label": "Open ATLAS",
"url": "https://atlas-swart-kappa-13.vercel.app/"
}
]
}

Supported actions:

* project_link
* github
* resume
* projects
* skills
* contact

Only return an action when the corresponding verified URL/data exists.

---

# 16. SMART FOLLOW-UP QUESTIONS

When appropriate, return suggested follow-ups.

Example:

User:

"Tell me about his projects."

AI:

"Abhijit has worked on AI, frontend and full-stack projects including ATLAS, AI Content Editor, AI Resume Builder, AigramX, City Canvas, Safari and an AI Learning Management System.

You can explore:

AI Projects
Frontend Projects
All Projects"

The backend may return:

"suggestions": [
"Show me AI projects",
"Show me frontend projects",
"Tell me about ATLAS"
]

The React frontend can render these as clickable buttons.

---

# 17. RECRUITER QUESTIONS

The AI should handle:

"Give me a 30-second summary."

"Why should I consider Abhijit?"

"What are his strongest technical areas?"

"Show me his AI projects."

"Show me his frontend projects."

"What did he learn during his internship?"

"What technologies does he know?"

"How can I contact him?"

Answers should be recruiter-friendly and truthful.

---

# 18. CONVERSATION HISTORY

Support conversation context.

Request can optionally contain:

{
"message": "What technologies does it use?",
"conversation": [
{
"role": "user",
"content": "Tell me about ATLAS"
},
{
"role": "assistant",
"content": "ATLAS is..."
}
]
}

Use recent conversation history only.

Limit the number of previous messages to prevent excessive token usage.

Do not permanently store conversations unless explicitly required.

---

# 19. STREAMING

Implement streaming if practical.

Preferred experience:

User sends question
↓
FastAPI starts OpenAI request
↓
Tokens stream to frontend
↓
AI text appears progressively

If streaming makes deployment unnecessarily complicated, implement a reliable normal response first and structure the service so streaming can be added later.

---

# 20. ERROR HANDLING

Never expose:

* API keys
* stack traces
* OpenAI internal errors
* backend implementation details

If OpenAI fails, return:

"I'm having trouble connecting right now. You can still explore Abhijit's projects and skills directly through the portfolio."

Use appropriate HTTP status codes.

Log technical errors server-side.

---

# 21. CORS

Allow the React frontend to communicate with FastAPI.

Development:

http://localhost:5173

Production:

Use the actual deployed frontend URL through an environment variable.

Do not permanently use:

allow_origins=["*"]

for production.

---

# 22. SECURITY

Implement basic security:

* Server-side API key
* Input validation
* Message length limits
* Rate limiting where practical
* No sensitive information in prompts
* No unnecessary conversation persistence
* No API key returned in responses
* No stack traces returned to users

---

# 23. HEALTH ENDPOINT

Create:

GET /api/health

Return:

{
"status": "ok",
"service": "Abhijit AI Portfolio API"
}

Do NOT return the API key.

It is acceptable to return the configured model name if desired.

---

# 24. API DOCUMENTATION

FastAPI should automatically provide:

/docs

/redoc

Make sure the endpoints are clearly documented.

Add request and response schemas using Pydantic.

---

# 25. FRONTEND INTEGRATION GUIDE

Create a README explaining how React should call:

POST /api/chat

Example:

const response = await fetch(
`${API_URL}/api/chat`,
{
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
message: userMessage
})
}
);

const data = await response.json();

Then display:

data.answer

If actions exist, render them as buttons.

---

# 26. AI EXPERIENCE

The backend must support the premium frontend experience.

The React frontend will display:

"Abhijit's AI Portfolio Assistant"

The assistant should feel like:

Portfolio
+
Interactive Case Studies
+
AI Guide
+
Recruiter Assistant

It should NOT feel like a generic ChatGPT clone.

---

# 27. IMPORTANT DATA RULE

Create ONE source of truth for portfolio information.

The React portfolio and FastAPI AI assistant should ideally consume the same structured project/profile information.

Avoid duplicating information manually in multiple places.

If possible, structure the data so the frontend and backend can easily stay synchronized.

---

# 28. FINAL TEST QUESTIONS

After implementation, test the API with:

1. Who is Abhijit?

2. What did he learn during his six-month internship?

3. Tell me about ATLAS.

4. What technologies were used in ATLAS?

5. Does Abhijit know FastAPI?

6. What are his AI/ML skills?

7. Show me his frontend projects.

8. What is his strongest project?

9. Tell me about his AI Resume project.

10. Can I see ATLAS?

11. What is his GitHub?

12. What is his salary?

13. What is his employee ID?

For questions 11–14, if the information is not present in the verified knowledge base, the AI MUST NOT guess.

It should say:

"I don't have that information in Abhijit's portfolio yet."

---

# 29. QUALITY REQUIREMENT

Do not create a basic tutorial-level implementation.

Build the backend as a clean, maintainable portfolio project that demonstrates my understanding of:

* FastAPI
* REST APIs
* OpenAI integration
* Prompt engineering
* Structured knowledge
* AI application architecture
* Pydantic validation
* CORS
* Error handling
* Security
* Streaming
* Context management
* Modular backend design

The code should be readable and production-oriented.

---

# 30. FINAL USER EXPERIENCE

A visitor should be able to enter my portfolio and ask:

"Who is Abhijit?"

↓

"What did he do during his internship?"

↓

"What is his best AI project?"

↓

"Tell me about ATLAS."

↓

"What technologies does it use?"

↓

"Show me the project."

↓

"What other projects has he built?"

↓

"What are his AI skills?"

↓

"How can I contact him?"

The FastAPI backend should make this entire conversation feel natural, intelligent and portfolio-aware.

FINAL RESULT:

React Portfolio
+
FastAPI AI Backend
+
OpenAI
+
Structured Portfolio Knowledge
+
Interactive Project Actions
+
Recruiter-Friendly AI Assistant
