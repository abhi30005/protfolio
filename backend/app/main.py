from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chat
from app.config import settings

app = FastAPI(
    title="Abhijit AI Portfolio API",
    description="Backend for the AI Portfolio Assistant",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL, "http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chat.router, prefix="/api", tags=["Chat"])

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "Abhijit AI Portfolio API"
    }
