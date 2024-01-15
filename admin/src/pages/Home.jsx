import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [alert, setAlert] = useState('');

    const navigate = useNavigate();

    const toP = (e) => {
      e.preventDefault();
      const input = document.getElementById('input');
  
      if (input.value === '4141') {
        navigate('/dashboard');
      } else {
        navigate('/');
        setAlert('Wrong Pass Code😒')

        setTimeout(() => {
            window.location.reload();
        },[1000])
        
      }
    }
  return (
    <div className="welcome">
    <div className="welcome-box">
      <h1 className='text-white'>Welcome Admin😊</h1>

      <form onSubmit={toP}>
        <div className={alert ? "alert" : ""}>
        <p className='text-danger p-0'>{alert}</p>
        </div>
       
        <br/>
        <input type='password' placeholder='Pass code' id='input' />
        <br />
        <br />
        <button type='button' onClick={toP}>Login</button>
      </form>
    </div>
    </div>
  )
}

export default Home