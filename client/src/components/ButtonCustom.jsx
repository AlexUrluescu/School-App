import React from 'react'

const ButtonCustom = ({ textName, eventFunction, classStyle }) => {
  return (
    <button className={classStyle} onClick={eventFunction}>{ textName }</button>
  )
}

export default ButtonCustom