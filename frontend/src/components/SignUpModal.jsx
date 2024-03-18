import React,{useState} from 'react'

const SignUpModal = () => {
    const [isOpen, SetIsOpen] = useState(false)
    // const [close, setClose] = useState(false)
    console.log(window.location)
  return (
    <div>
        <button onClick={()=>SetIsOpen(true)}>click</button>
        <div className={`${isOpen? "block" : "hidden"}`}>
            <input placeholder='name'/>
            <input placeholder='email'/>
            <input placeholder='pass'/>
            <button onClick={()=>{SetIsOpen(false)}}>X</button>
        </div>
    </div>
  )
}

export default SignUpModal
