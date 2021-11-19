// The following component <RepeatMessage message="My Message" /> accepts a prop message. 
// Then, every 2 seconds the message prop is logged to console:

// import { useEffect } from 'react';
// function RepeatMessage({ message }) {
//   useEffect(() => {
//     setInterval(() => {
//       console.log(message);
//     }, 2000);
//   }, [message]);
//   return <div>I'm logging to console "{message}"</div>;
// }

// export default RepeatMessage;


// That’s the case to clean up the side-effect: cancel the previous timer when starting a new one. 
// Let’s return a cleanup function that stops the previous timer:

import { useEffect } from 'react';
function RepeatMessage({ message }) {
  useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);
  return <div>I'm logging to console "{message}"</div>;
}

export default RepeatMessage;