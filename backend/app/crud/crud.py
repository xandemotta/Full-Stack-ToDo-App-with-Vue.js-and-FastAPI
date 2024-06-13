from sqlalchemy.orm import Session
from app.models import Task as DBTask
from app.schemas import TaskCreate, TaskUpdate

def get_task(db: Session, task_id: int):
    return db.query(DBTask).filter(DBTask.id == task_id).first()

def get_tasks(db: Session, skip: int = 0, limit: int = 10):
    return db.query(DBTask).offset(skip).limit(limit).all()

def create_task(db: Session, task: TaskCreate):
    db_task = DBTask(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

def update_task(db: Session, task_id: int, task: TaskUpdate):
    db_task = db.query(DBTask).filter(DBTask.id == task_id).first()
    if db_task:
        for key, value in task.dict().items():
            setattr(db_task, key, value)
        db.commit()
        db.refresh(db_task)
    return db_task

def delete_task(db: Session, task_id: int):
    db_task = db.query(DBTask).filter(DBTask.id == task_id).first()
    if db_task:
        db.delete(db_task)
        db.commit()
    return db_task
