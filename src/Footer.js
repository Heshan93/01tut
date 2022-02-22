import React from 'react'

function Footer() {

    const today = new Date();

  return (
    <footer>
      <p>Coppyright &copy; {today.getFullYear()} </p>
    </footer>
  )
}

export default Footer
