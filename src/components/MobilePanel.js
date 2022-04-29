import React from 'react'
import { Image, Row } from 'react-bootstrap';

const MobilePanel = ({ display, handleProfile, handleCalender, handleNotebook, handleTodolist, profileImg, calenderImg, notebookImg, todolistImg }) => {
  return (
    <div>
        {display ? 
            <Row className="bg-white">
                <div className="d-flex justify-content-between shadow-sm poss d-md-none bg-white">
                    <Image src={profileImg} onClick={handleProfile} className="iconsm my-3" fluid/>
                    <Image src={calenderImg} onClick={handleCalender} className="iconsm my-3" fluid/>
                    <Image src={notebookImg} onClick={handleNotebook} className="iconsm my-3" fluid/>
                    <Image src={todolistImg} onClick={handleTodolist} className="iconsm my-3" fluid/>
                </div>
            </Row> : <div></div>
        }
    </div>
  )
}

export default MobilePanel