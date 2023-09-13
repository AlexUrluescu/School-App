import React from 'react'

// Import fontAwesomeIcon -------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


const ButtonCustom = ({ classStyle, typeButton }) => {
  return (
    <button type={typeButton} className={classStyle}><FontAwesomeIcon style={{fontSize: "30px"}} icon={faPaperPlane}/></button>
  )
}

export default ButtonCustom