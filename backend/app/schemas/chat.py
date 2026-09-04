from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str = Field(..., max_length=2000)
    conversation: Optional[List[Message]] = []

class Action(BaseModel):
    type: str
    label: str
    url: Optional[str] = None

class ChatResponse(BaseModel):
    success: bool
    answer: str
    actions: Optional[List[Action]] = None
    suggestions: Optional[List[str]] = None
