import React from 'react'
import Home from '../pages/Home';

export default function HomeView() {
  return (
    <div className='home-view' >
        <Home />
        <article>
            <h2 className='mitBahn-greet'>Welcome to mitBahn</h2>
            <p className='mitBahn-greet-text'>The app that will help you travel cheap in Germany with the Quer-durchs-Land-Ticket. Let us present some of the benefits.</p>
            <article>
                <h3>Eco friendly</h3>
                <p>
                The train                
                </p>
                <figure>
                    <img  width="50%" alt="emissions" src="emissions.jpeg"></img>
                    <figcaption>Comparison of emissions among vehicles.</figcaption>
                </figure>
                
                <hr></hr>
            </article>
            <article>
                <h3>Connecting</h3>
                <p>
                    Even for                     
                </p>
                <figure>
                    <img width="50%" alt="romance" src="traintravel.webp"></img>
                    <figcaption>Always out of range.</figcaption>
                </figure>

                <hr></hr>
            </article>
            <article>
                <h3>Relaxed</h3>
                <p>
                    Ever drove a car over long distances while passengers annoyed the **** out of you?
                </p>
                <figure>
                    <img width="50%" alt="angry" src="angrydude.jpg"></img>
                    <figcaption>U mad bro?</figcaption>
                </figure>

                <hr></hr>
            </article>
            <article>
                <h3>Cheap</h3>
                <p>Not much to say about this. Money always speaks for itself.</p>
                <figure>
                    <img width="50%" alt="prices" src="prices.png"></img>
                    <figcaption>Prices as of Feb.2022</figcaption>
                </figure>

                <hr></hr>
            </article>
            <article>
                <h2>So take a seat and let's have a ride.</h2>
                <figure>
               
                    <img width="50%" alt="yea" src="train.gif"></img>
                    <figcaption>Yeehaw</figcaption>
                </figure>
            </article>
        </article>
    </div>
  )
}
