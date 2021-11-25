import './App.css';
import React, {useState} from 'react';
import Qform from './Components/Questionsform';
import Navbar from './Components/Navbar';
import Welcomescr from './Components/Welcomescr';


function App() {

  const [state, setState] = useState('start');
 
    return(
       <div>
         {state === 'start' && (
           <div>
           <Navbar />
           <Welcomescr clickBtn={() => setState('state2')} />
           </div>
         )}
          {state === 'state2' &&(
            <div>
            <Navbar />
            <Qform  clickBtn={() => setState('start')}/>
            </div>
          )}
       </div>
    );
      
    
  
}

export default App;
