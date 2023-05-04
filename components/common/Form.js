import React, {useRef} from 'react'

const Form = () => {

    const Refname = useRef();
    const Refphone = useRef();
    const Refemail = useRef();
    const Refsubject = useRef();
    const Refmessage = useRef();

    const handelSubmit = ()=>{
        console.log(name.current.value);
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
                  name={p.ref}
                ></textarea>
              </div>
            )
        })
        }
        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>

</form>
  )
}

export default Form