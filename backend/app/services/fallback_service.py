from app.data.knowledge import PORTFOLIO_KNOWLEDGE

def generate_fallback_response(message: str) -> dict:
    """
    A simple rule-based fallback responder when OpenAI is unavailable or API key is missing.
    Matches keywords in the user's message to return relevant portfolio data.
    """
    msg = message.lower()
    
    # 1. Profile / About
    if any(word in msg for word in ["who", "about", "profile", "background", "education"]):
        prof = PORTFOLIO_KNOWLEDGE["profile"]
        return {
            "success": True,
            "answer": f"(Offline) {prof['name']} is an {prof['role']}. He studied {prof['education']} at {prof['college']} (CGPA: {prof['cgpa']}).",
            "actions": [{"type": "contact", "label": "Contact Abhijit", "url": prof['linkedin']}],
            "suggestions": ["Show me his projects", "What are his skills?"]
        }
        
    # 2. Projects
    if any(word in msg for word in ["project", "build", "portfolio", "atlas", "work"]):
        projs = PORTFOLIO_KNOWLEDGE["projects"]
        proj_names = ", ".join([p["name"] for p in projs[:2]])
        return {
            "success": True,
            "answer": f"(Offline) Abhijit built {proj_names} and others. His flagship is ATLAS, an AI Research Agent.",
            "actions": [{"type": "projects", "label": "View All Projects", "url": "#projects"}],
            "suggestions": ["Tell me about ATLAS", "What are his skills?"]
        }
        
    # 3. Skills / Tech
    if any(word in msg for word in ["skill", "tech", "stack", "know", "react", "python", "ai"]):
        skills = PORTFOLIO_KNOWLEDGE["skills"]
        return {
            "success": True,
            "answer": f"(Offline Mode) Abhijit's core skills include:\n\n**Frontend**: {', '.join(skills['Frontend'])}\n**Backend**: {', '.join(skills['Backend'])}\n**AI/ML**: {', '.join(skills['AI_ML'])}",
            "actions": [{"type": "skills", "label": "View Skills Constellation", "url": "#skills"}],
            "suggestions": ["What projects did he build?", "Contact info"]
        }
        
    # 4. Internship / Journey
    if any(word in msg for word in ["intern", "journey", "experience", "month"]):
        return {
            "success": True,
            "answer": "(Offline Mode) During his 6-month internship, Abhijit progressed from foundational Full-Stack Development to advanced AI Product Development and Automation.",
            "actions": [{"type": "journey", "label": "Explore Journey", "url": "#journey"}],
            "suggestions": ["What are his AI skills?", "Show me projects"]
        }
        
    # 5. Contact
    if any(word in msg for word in ["contact", "email", "phone", "hire", "github", "linkedin", "resume"]):
        prof = PORTFOLIO_KNOWLEDGE["profile"]
        return {
            "success": True,
            "answer": f"(Offline Mode) You can find Abhijit on LinkedIn or GitHub!",
            "actions": [
                {"type": "github", "label": "GitHub", "url": prof["github"]},
                {"type": "contact", "label": "LinkedIn", "url": prof["linkedin"]}
            ],
            "suggestions": ["Who is Abhijit?", "Show me projects"]
        }

    # Default Fallback
    return {
        "success": True,
        "answer": "My AI brain is currently disconnected from the cloud! 🤖☁️\n\nHowever, I have a local backup of Abhijit's portfolio. You can ask me basic questions about his **projects**, **skills**, **education**, or **internship**!",
        "suggestions": ["Who is Abhijit?", "Show me your projects", "What are your skills?"]
    }
