import React, {useState} from 'react'
import Confirm from './Confirm';
import Userdetails from './Userdetails';
import Usersignup from './Usersignup';


const Userform = () => {

    const [page, setPage] = useState(0);

    const formTitles = ["SignUp", "Personal Details", "Others"];

    const pageDisplay = () =>{

      if (page === 0){
       return < Usersignup/>
      }else if (page === 1){
        return <Userdetails/>
      }else{
        return <Confirm/>
      }
    
    }

  return (
    <div className='form'>
        <div className='progressbar'></div>
     <div className='formcontainer'>
        <div className='header'>
            <h1>{formTitles[page]}</h1>
        </div>
        <div className='main'>{pageDisplay()}</div>
        <div className='footer'>

            <button 
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1)
            }}>Prev</button>

            <button 
            disabled={page == formTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1)
            }}>Next</button>
        </div>
     </div>
      
    </div>
  )
}

export default Userform

