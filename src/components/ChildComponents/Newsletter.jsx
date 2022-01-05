import React from 'react'
import "./Newsletter.css"

function Newsletter() {
    return (
        <div className='newsletter'>
            <div className='container newcontent justify_between'>
             <div className='Leftside flex1 flex_column d_flex justify_between'>
                <h2>
                    Let's Discuss
                </h2>
                <p className='text' style={{fontWeight:"300"}}>Lorem, ipsum dolor sit amet   sit amet consectetur adipisicing eli t. Quidem laborum impedit magni!</p>
             </div>
             <div className='Rightside flex1 d_flex justify_end'>
              <div className='inputDiv align_center d_flex justify_between'>
               <input type="text" className='text flex1'  />
               <input type="button"  className='btn_primary text btn_hover' value="sign up" />
              </div>
             </div>
            </div>
            
        </div>
    )
}

export default Newsletter
