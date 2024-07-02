// import { useState, useEffect } from 'react';
// import './notes.css'

// export default function Notes({ heading, onClick }) {
//   const [round, setRound] = useState("")

//   const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//   const [color, setColor] = useState('#FFFFFF');

//   useEffect(() => {
//     const generateColor = () => {
//       let a = '#';
//       for (let i = 0; i < 6; i++) {
//         let rand = Math.floor(Math.random() * 16);
//         a += num[rand];
//       }
//       setColor(a);
//     }; generateColor()
//   }, [])



//   useEffect(() => {
//     if (heading.length < 2) {
//       setRound(heading.toUpperCase());
//     } else {
//       setRound(heading.substring(0, 2).toUpperCase());
//     }
//   }, [heading]);

//   return (<>
//     <div onClick={onClick} className="note">

//       <span style={{ backgroundColor: color }} className='roundWord'>{round}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><h3 className='heading'>{heading}</h3>
//     </div>

//   </>);
// }

import { useState, useEffect } from 'react';
import './notes.css';

export default function Notes({ heading, onClick }) {
  const [round, setRound] = useState("");
  const [color, setColor] = useState('#FFFFFF');
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//generate a random color
  useEffect(() => {  
    const generateColor = () => {
      let a = '#';
      for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 16);
        a += num[rand];
      }
      setColor(a);
    };
    generateColor();
  }, []);

  useEffect(() => {
    if (heading.length < 2) {
      setRound('0'+heading.toUpperCase());
    } else {
      setRound(heading.substring(0, 2).toUpperCase());
    }
  }, [heading]);

  return (
    <div onClick={onClick} className="note">
      <span style={{ backgroundColor: color }} className='roundWord'>{round}</span>
      <h3 className='heading'>{heading}</h3>
    </div>
  );
}
