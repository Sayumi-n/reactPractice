import React from 'react'
import './App.css';

const CreatePhrase = ({word}) =>{

    if(!word){
        return <div>Your Phrase Here...</div>;
    }

    return(
     <div className="container phrase-area">
         <div className="row align-self-center">
             <div className="col col-md-auto">
                <span  className="phrase-item">
                    {word}
                </span>
             </div>
         </div>
     </div>
    )
}

export default CreatePhrase;
