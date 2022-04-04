import React from 'react'
import Home from '../pages/Home';

export default function HomeView() {
  return (
    <div className='home-view' >
        <Home />
        <article>
            <h2>Welcome to MitBahn</h2>
            <p className='mitBahn-greet-text'>MitBahn allows you to make a full use of DB Group Ticket. <br></br> You can either join an existing ride ( = group of people on the same train), or propose your own. <br></br>The bigger the group, the cheaper the ride.</p>
            <article>
                <h3>Reasonably priced</h3>
                
                <figure>

                    <img  width="50%" alt="emissions" src="pricing.jpeg"></img>
                    {/* <figcaption>Comparison of emissions among vehicles.</figcaption> */}
                </figure>
                
                <hr></hr>
            </article>
            <article>
                <h3>Rolling office</h3>
                <figure>
                    <img width="50%" alt="romance" src="traintravel.webp"></img>
                    {/* <figcaption>Always out of range.</figcaption> */}
                </figure>

                <hr></hr>
            </article>
           
            <article>
                <h2>So take a seat and let's have a ride.</h2>
                <figure>
                    <img width="50%" alt="yea" src="train.gif"></img>
                    <figcaption>Yeehaw!</figcaption>
                </figure>
            </article>
        </article>
    </div>
  )
}
