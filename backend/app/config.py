from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    GROQ_API_KEY: str = ""
    GROQ_MODEL: str = "llama3-8b-8192"
    FRONTEND_URL: str = "http://localhost:5173"
    MAX_MESSAGE_LENGTH: int = 2000

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

settings = Settings()
