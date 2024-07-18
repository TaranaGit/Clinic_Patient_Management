import { useState } from "react";


const PatientForm = () => {
 const [name,setName] = useState('')
 const [address, setAddress] = useState('')
 const [phone, setPhone] = useState('')
 const [error, setError] = useState('')
const handleSubmit = async(e)=>{
    e.preventDefault();
    const patient = {name, address,phone};
   // here we are sending a post reqst to this url
    const response = await fetch('/api/patient',{
        method:'POST',
        body:JSON.stringify(patient),
        headers:{'Content-Type': 'application/json'
    }
    })
    const json = await response.json()
    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setName('')
        setAddress('')
        setPhone('')
        setError(null)
        console.log('new record added',json);
       
    }

}

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h1>Add new Entry</h1>
            <label>Patient Name</label>
            <input type = "text" onChange ={(e)=>setName(e.target.value)} value={name}
            />

            <label> Address</label>
            <input type ="text"  onChange={(e)=>setAddress(e.target.value)} value={address}
             />
            <label>Phone</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)} value={phone}
            />

            <button>Add  Patient</button>
            {error && <div className="error">{error}</div>}

            {/* <div className="display">{name}</div> */}
        </form>
       
     );
}
 
export default PatientForm;