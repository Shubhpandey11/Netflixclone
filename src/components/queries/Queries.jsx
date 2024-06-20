import React, { useState } from 'react'
import Input from '../Input'
import { RiAddLine, RiCloseLine } from '@remixicon/react' 
import Gap from '../Gap'

const Queries = () => {

    const [state, setState] = useState()
    
    const data = [
        {
            "id": 0,
            "title": "what is Netflix ?",
            "answer": "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!" 
        },
        {
            "id": 1,
            "title": "how much does Netflix cost ?",
            "answer": "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." 
        },
        {
            "id": 3,
            "title": "where can i watch?",
            "answer": "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." 
        },
        {
            "id": 4,
            "title":"How do i cancel?",
            "answer":"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
        },
        {
            "id": 5,
            "title":"what can i watch on Netflix ?" ,
            "answer":"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        {
            "id": 6,
            "title":"Is Netflix good for Kids ?",
            "answer":"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        }
    ]

    const handleChange = (index) => {
        setState(state === index ? -1 : index);
      };
    

    return (
        <div className='query'>
            <div className='query-card'>
                <div className='queries'>
                <h1>Frequently Asked Question</h1>
                <div className='customer-query'>
                    <ul>
                        {data.map((val,index)=> (
                            <div key={index}>
                            <li onClick={() => handleChange(index)}
                             >{val.title}
                            <button >
                           {state === index ? <RiCloseLine size={34}/> : <RiAddLine size={34}/> } 
                            </button>
                        </li>
                        {state === index &&  (<li id='query-answer' key={index}>{val.answer}</li>)}
                            </div>
                        ))}
                    </ul>
                </div>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <Input />
                </div>
            </div>
            <Gap />
        </div>
    )
}

export default Queries