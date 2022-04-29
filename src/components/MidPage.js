import React from 'react'
import { Col } from 'react-bootstrap'

const MidPage = ({ profile, calender, notebook, todolist, handleProfileTodo, handleCalenderTodo, handleNotebookTodo, handleListtodo, handleAddtodo }) => {
  return (
    <Col xs={12} sm={6} md={2} lg={2} className="shadow-sm bg-white">
        {profile && <div>
            <p className="font-500 font-20 pointer d-none d-md-block text-secondary" onClick={handleProfileTodo}>Profile</p>
            <p className="font-500 font-16 pointer d-md-none text-secondary" onClick={handleProfileTodo}>Profile</p>
        </div>}
        {calender && <div>
            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleCalenderTodo}>Set Reminder</p>
            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleCalenderTodo}>Set Reminder</p>

        </div>}
        {notebook && <div>
            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleNotebookTodo}>Notebook</p>
            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleNotebookTodo}>Notebook</p>
        </div>}
        {todolist && <div>
            <p className="font-500 font-20 pointer text-secondary d-none d-md-block" onClick={handleListtodo}>Todolist</p>
            <p className="font-500 font-20 pointer text-black d-none d-md-block" onClick={handleAddtodo}>Create</p>
            <p className="font-500 font-16 pointer text-secondary d-md-none" onClick={handleListtodo}>Todolist</p>
            <p className="font-500 font-16 pointer text-black d-md-none" onClick={handleAddtodo}>Create</p>
        </div>}
    </Col>
  )
}

export default MidPage