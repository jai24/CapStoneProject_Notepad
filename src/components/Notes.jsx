import { useState, useEffect } from 'react';
import './notes.css'

export default function Notes({ heading, onClick }){
    const [round, setRound] = useState("")

    useEffect(() => {
      if (heading.length < 2) {
        setRound(heading.toUpperCase());
      } else {
        setRound(heading.substring(0, 2).toUpperCase());
      }
    }, [heading]);

    return(<>
    <div onClick={onClick} className="note">
     
      <h3><span>{round}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>{heading}</h3>
    </div>
    
    </>);
}
