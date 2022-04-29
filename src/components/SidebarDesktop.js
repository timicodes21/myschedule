import React from 'react'
import { Col, Image } from 'react-bootstrap'

const SidebarDesktop = ({ profileImg, calenderImg, notebookImg, todolistImg, handleProfile, handleCalender, handleNotebook, handleTodolist }) => {
  return (
    <Col xs={12} md={2} lg={2}>
        <div className="d-none d-md-flex justify-content-between flex-md-column align-items-center shadow-sm p-4">
            <Image src={profileImg} onClick={handleProfile} className="icon my-3" fluid/>
            <Image src={calenderImg} onClick={handleCalender} className="icon my-3" fluid/>
            <Image src={notebookImg} onClick={handleNotebook} className="icon my-3" fluid/>
            <Image src={todolistImg} onClick={handleTodolist} className="icon my-3" fluid/>
        </div>
    </Col>
  )
}

export default SidebarDesktop