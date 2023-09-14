import React from 'react'
import { Link } from 'react-router-dom'

const SubjectBoxCustom = ({ styleClass, textContent, link }) => {
  return (
    <Link to={link} className={styleClass}>{textContent}</Link>
  )
}

export default SubjectBoxCustom