from fastapi import APIRouter, HTTPException
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.openai_service import generate_ai_response
from app.services.fallback_service import generate_fallback_response
from app.config import settings

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    # If API key is missing entirely, go straight to fallback
    if not settings.OPENAI_API_KEY or settings.OPENAI_API_KEY.strip() == "":
        fallback_data = generate_fallback_response(request.message)
        return ChatResponse(
            success=True,
            answer=fallback_data["answer"],
            actions=fallback_data.get("actions"),
            suggestions=fallback_data.get("suggestions")
        )

    try:
        if len(request.message.strip()) == 0:
            raise HTTPException(status_code=400, detail="Message cannot be empty")

        ai_data = await generate_ai_response(request.message, request.conversation)
        
        return ChatResponse(
            success=True,
            answer=ai_data.get("answer", "I didn't quite understand that."),
            actions=ai_data.get("actions"),
            suggestions=ai_data.get("suggestions")
        )

    except Exception as e:
        print(f"Failed to connect to OpenAI: {e}")
        # When OpenAI fails (quota exceeded, bad key, network issue), use the local knowledge base fallback!
        fallback_data = generate_fallback_response(request.message)
        return ChatResponse(
            success=True,
            answer=fallback_data["answer"],
            actions=fallback_data.get("actions"),
            suggestions=fallback_data.get("suggestions")
        )
