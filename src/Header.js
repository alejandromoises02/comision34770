import React from 'react'

const Header = () => {
    console.log("Log desde el Header");
  return (
    <div>Header</div>
  )
}

export default React.memo(Header)
