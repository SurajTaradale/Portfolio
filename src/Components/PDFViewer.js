import React from 'react';
import CV from '../Assets/Surajcv.pdf'
const View = () => {

  return (
    <div style={{height:'100vh'}}>
    {/* <object data={CV} width="100%"  height='100%'></object> */}
    <embed type="text/pdf" src={CV} width="100%"  height='100%'></embed>
    {/* <iframe src={CV} frameborder="0"></iframe> */}
    </div>
  )
}

export default View