import React, { useContext, useEffect } from 'react'


let myStyle = {
  backgroundColor:'rgb(49, 50, 50)',

  // borderColor:'white',
  color:'white'
}
const About= () => {
  // you can use context api like this anywhere without defining again and again 
  return (
  
  <div className='container' style={myStyle} >
        <h1 className='my-3'>About Cloud Note</h1>
        <p>CloudNote is a simple, powerful and cloud based Webapp where you can store your personalize notes.</p>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong style={{backgroundColor:'white',color:'black'}}> Add Your Note </strong>
                
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <p> It allows you to store any notes or important points on the cloud. Cloud Note is perfect for students and data lovers alike. The scrollable list of notes will keep you organized, so much easier than digging through folders or organizing folders on your computer! </p>
            </div>
            </div>
        </div>
        <div className="accordion-item my-2">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong style={{backgroundColor:'white',color:'black'}}>Functionality  </strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle}  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <p> It is a CRUD based application you can create, read, update and delete your notes on the cloud. 
                It allows you to store any notes or important points on the cloud. 
                The data is stored on the server. User can login through login Page to get access of the notes. 
                Whereas New user can create their account using SignUp.</p>
               
     </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong style={{backgroundColor:'white',color:'black'}}>Browser Compatible</strong> 
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari,opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
</div>
    </div>

  
  
  
  
  
  
  )
}

export default About
