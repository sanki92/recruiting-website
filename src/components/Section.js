import React from 'react'



export default function Section(props) {
    return (
        <>
            <div className="section1" id="top">
            <h1> Build your recruiting engine with Hire It.</h1>
                <p>No more juggling recruiting tools––Hire It finds and schedules candidates you actually want to talk to, at a fraction of the cost.</p>
                <hr/>
                <p>Join the 100+ companies relying on Hire It to find the best talent</p>
                <div>Talk to us<img src="https://img.icons8.com/material-outlined/48/000000/sent.png" alt="arrow icon"/></div>
            </div>
            <div className="section2">
                <p>Trusted by some of the world's best companies</p>
                <div className="container">
                    <img src="./images/1.png" alt="Company Name"/>
                    <img src="./images/2.png" alt="Company Name"/>
                    <img src="./images/3.png" alt="Company Name"/>
                    <img src="./images/4.png" alt="Company Name"/>
                    <img src="./images/5.png" alt="Company Name"/>
                    <img src="./images/6.png" alt="Company Name"/>
                    <img src="./images/7.png" alt="Company Name"/>
                    <img src="./images/8.png" alt="Company Name"/>
                </div>
            </div>
            <div className="section3">
                <p>See what they're saying →</p>
               <div className="container">
                   <img src="https://img.icons8.com/ios-glyphs/90/ffffff/quote-right.png" alt="quote icon"/>
                   <p>I used to have to click through hundreds of resumes to see good candidates. Hire It’s calibration and workflow is amazing. It's a real slam dunk. Plus, the quality of candidates has been on point. Each time we provide feedback, it gets better and better.</p>
                   <img src="https://img.icons8.com/external-flat-juicy-fish/100/ffffff/external-self-digital-nomad-flat-flat-juicy-fish.png" alt="person icon"/><span className="label">Pranav Piyush <span>VP of Go-To-Market, Invoice2go</span> </span>
                   </div>
            </div>
        </>
    )
}