import React from 'react'

const Navbar = () => {
    return (
            <nav id="navbar">
                <div id="logo">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0hCmhn0Qm3Qd5oTot0UVRX1bFPt4BCQ3QA&usqp=CAU" alt="Myonlinemeal.com"/>
                </div>

                <ul>
                    <li className="item"><a href="/">Home</a></li>
                    <li className="item"><a href="/services-container">Services</a></li>
                    <li className="item"><a href="/client-section">Our clients</a></li>
                    <li className="item"><a href="/contact">Contact Us</a></li>
                </ul>
            </nav> 
    )
}

export default Navbar
