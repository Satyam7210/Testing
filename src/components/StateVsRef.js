// import React, { useState, useEffect } from 'react';
// function StateVsRef() {
//   const [countRender, setCountRender] = useState(0);
  
//   useEffect(function afterRender() {
//     setCountRender(countRender => countRender + 1);
//   });
//   return (
//     <div>I've rendered {countRender} times</div>
//   );
// }

// export default StateVsRef


            //  Vs


import React, { useRef, useEffect } from 'react';
function StateVsRef() {
  const countRenderRef = useRef(1);
  
  useEffect(function afterRender() {
    countRenderRef.current++;
  });
  return (
    <div>I've rendered {countRenderRef.current} times</div>
  );
}

export default StateVsRef