import { useEffect } from 'react';

function Greeting({ name }) {
  const message = `Hello, ${name}!`;
  useEffect(() => {
    document.title = `Greetings to ${name}`; 
  }, []);

  return(
   <div>{message}</div>
   );
}

export default Greeting;