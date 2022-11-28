import React from 'react'
import Home from '../pages/Home';

export default function HomeView() {
  return (
    <div className='home-view' >
        <Home />
        <article>
            <h2>Welcome to MitBahn</h2>
            <p className='mitBahn-greet-text'><h4>MitBahn allows you to make a full use of DB Group Ticket.</h4> <br></br><ol class= "advantages-list">
            <li>You can either join a group of people on the same train</li>
            <li>... or propose your own ride!</li>
            <li>The bigger the group – the cheaper the ride.</li>
            </ol>
            </p>
        </article>
    </div>
  )
}
