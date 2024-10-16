import { useState } from "react"

function Login(){
    const [name, setName] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault()
        const obj = {
            username : name
        }
        console.log("It is hitting")
        console.log(obj)
    }
    return(
        <>
            username :  <input type = "text" onChange={(e) => handleName(e)}></input>
            <button onClick={(e) => handleSignup(e)}>SignUp</button>
        </>
    )
}

export default Login