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
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Matematici Speciale"/>
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Programare"/>
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Fizica"/>
        <SubjectBoxCustom styleClass = "subjectBox" textContent = "Tehnici de Comunicare"/>
      </div>
    </div>
  )
}

export default FirstYearPage