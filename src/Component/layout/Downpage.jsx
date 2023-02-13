import React from 'react'

function Downpage() {
    const yearfooter = new Date().getFullYear()
    return (
        <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
            <p>
                Copyright &copy; {yearfooter} All rights reserved
            </p>
        </footer>
      )
}

export default Downpage