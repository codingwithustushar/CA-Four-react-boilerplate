import React,{useState} from 'react'
import questions from '../questions'
import App from '../App'


export default function QuestionBox() {
  const[currentQue ,setCurrentQue] = useState(0);
  const[highlight,sethighlight] =useState(false)
  const changeQue = () => {
    if(currentQue<questions.length-1){

      setCurrentQue(currentQue + 1);
      sethighlight(false);
    }
  };

  const handleOptionClick = () => {
    
      changeQue();
    
  };
  const handlehighlight = ()=>{
    sethighlight(true);
  }
  const removehightlight = ()=>{
    sethighlight(false)
  }
  return (
    
    <div>
      <p className='name'>QUIZZARD</p>
     <div className='container'>
        <div className='question'>
        <div className='question' style={{ color: highlight ? '#D22727' : 'black' }}>
        <span id='quenum'>Questions:{currentQue+1}of5</span><br></br>
        <span id='quetext'>{questions[currentQue].text}</span>
        </div>
        </div>

        <div className='options'>
          {questions[currentQue].options.map((options,i)=>{
            return(
              <button key={i} className='opt_btn' onClick={()=>handleOptionClick(i)}>
                {options.text}
              </button>
            )
          })}
          </div>
          <div>
           <button onClick={handlehighlight} className='high'>Highlight</button>
        <button onClick={removehightlight} className='high'>Remove Highlight</button>
        </div>


     </div>
    </div>
    
    )
  }


      

  

