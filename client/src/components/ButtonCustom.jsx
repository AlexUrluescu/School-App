import React from 'react'


const ButtonCustom = ({ classStyle, typeButton, textContent }) => {
  return (
    <button type={typeButton} className={classStyle}>{textContent}</button>
  )
}

export default ButtonCustom