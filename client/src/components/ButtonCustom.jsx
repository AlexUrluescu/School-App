import React from 'react'

const ButtonCustom = ({ textName, eventFunction, classStyle, typeButton }) => {
  return (
    <button type={typeButton} className={classStyle}>{ textName }</button>
  )
}

export default ButtonCustom