from fastapi import FastAPI, APIRouter
import uvicorn

router = APIRouter() 

@router.get("/")
async def getHello():
    return "this is a api3 by fastapi"

app = FastAPI()

app.include_router(router, prefix="/abc-service")


# Run on local --> "py main.py"
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5000) 

