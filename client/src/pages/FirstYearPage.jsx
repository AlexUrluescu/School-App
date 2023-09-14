import React from 'react'

// Style -------------------------------------------------
import "../style/FirstYearPage.css"

// Components --------------------------------------------
import NavBar from "../components/NavBar";
import SubjectBoxCustom from '../components/SubjectBoxCustom';


const FirstYearPage = () => {
  return (
    <div>
      <NavBar />
      <div className='subjects_container'>
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Matematici Speciale" link="/firstyear/matematicispeciale" />
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Programare" link="/firstyear/programare" />
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Fizica" link="/firstyear/fizica"/>
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Tehnici de Comunicare" link="/firstyear/comunicare"/>
      </div>
    </div>
  )
}

export default FirstYearPage