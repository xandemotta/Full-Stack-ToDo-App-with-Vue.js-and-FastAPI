from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str

class TaskCreate(TaskBase):
    class Config:
        from_attributes = True

class Task(TaskBase):
    id: int

    class Config:
        orm_mode = True
