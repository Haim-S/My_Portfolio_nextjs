import React, {useRef, useState} from 'react'

const Form = () => {

  const [status, setStatus] = useState(false);

    const Refname = useRef();
    const Refphone = useRef();
    const Refemail = useRef();
    const Refsubject = useRef();
    const Refmessage = useRef();

    const handelSubmit = async (e)=>{
      e.preventDefault();
      console.log(Refmessage.current?.value);
      let details = {
        name:    Refname.current.value,
        email:   Refemail.current.value,
        subject: Refsubject.current.value,
        message: Refmessage.current.value
       };

       let response = await fetch("https://sendtomyemail-render-server.onrender.com/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(details)
      })
      let result = await response.json();
      console.log(result);
      setStatus(true);

         Refname.current.value = "";
        Refemail.current.value = "";
      Refsubject.current.value = "";
      Refmessage.current.value = "";
    }

    const INPUT = [
        {message: false ,label: "Email", ref: Refemail},
        {message: false ,label: "Subject", ref: Refsubject},
        {message: true ,label: "Message", ref: Refmessage},
    ]


  return (
<form onSubmit={handelSubmit}>
    <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
    <div  className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      ref={Refname}
                    />
            </div>
            <div  className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      ref={Refphone}
                    />
            </div>
    </div>
        {
        INPUT.map((p , i)=>{

            if(!p.message){
            return(
            <div key={i} className='flex flex-col'>
            <label className='uppercase text-sm py-2'>{p.label}</label>
            <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                      ref={p.ref}
                    />
            </div>
                )
            }
            return(
                <div key={i} className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>{p.label}</label>
                <textarea
                  className='border-2 rounded-lg p-3 border-gray-300'
                  rows='10'
                  ref={p.ref}
                ></textarea>
              </div>
            )
        })
        }
        {status ? <h3>We will get back to you soon</h3> : 
        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
        }

</form>
  )
}

export default Form