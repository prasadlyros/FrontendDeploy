import axios from "axios"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'


const Login =() => {
    let navigate = useNavigate()
    const [uname, setUname] = useState('')
    const [pwd, setPwd] = useState('')
    const [value, setValue] =useState('')
    const [error, setError] = useState('')
    const [errorValue,setErrorValue] = useState(false)

    const handleChange = (e,keyword) => {
        e.preventDefault()
        if(keyword === 'uname'){
            setUname(e.target.value)
        }
        else{
            setPwd(e.target.value)
        }
    }

    const handledropdown =(e) => {
        setValue(e.target.value)
    }

    const handleValidation = (e) => {
        e.preventDefault()
        if(value === 'admin'){
            console.log('admin is triggered')
            axios.get(`https://backenddeploy-er7h.onrender.com/v1/signIn`).then((res) => {
                const details = res.data.find(item => item.Username === uname && item.Password === pwd)
                if(details){
                    navigate("/admin")
                }
                else{
                    setErrorValue(true)
                    setError("credentials not matching")
                }
            }).catch((err) => console.log(err))
        }
        else if (value === 'user'){
            console.log('user is triggered')
            axios.get(`https://backenddeploy-er7h.onrender.com/v1/signIn`).then((res) => {
                const details = res.data.find(item => item.Username === uname && item.Password === pwd)
                if(details){
                    navigate("/user")
                }
                else{
                    setError("credentials not matching")
                }
            }).catch((err) => console.log(err))
        }
        else{
            alert("Please select admin or user")
        }
    }
    return(
        <>
            <form className='form-container'>
                <h2 className='form-header'>Login Quiz.com</h2>
                <label className="form-label">Login type :</label>
                <select name="interference" className="select" onChange={(e) => handledropdown(e)}>
                    <option selected>Select Type</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <label className="form-label">Username</label>
                <input className="form-input" type="text" name="username" placeholder="enter your name" onChange={(e) => handleChange(e,"uname")}></input>
                <label className="form-label">Password</label>
                <input className="form-input" type="password" name="password" placeholder="enter your password" onChange={(e) => handleChange(e,"pwd")}></input>
                {errorValue ?<p>{error}</p> :''}
                <button className="form-button" type="button" onClick={(e) => handleValidation(e)}>Login</button>
            </form> 
        </>
    )
}

export default Login