import { useEffect, useState } from "react";
import PatientForm from "./patientForm";
import PatientDetails from "./patientDetails";

const Home = () => {
    const[patients,setPatients] = useState(null)
    useEffect(()=>{
        const fetchdata = async()=>{
            //here only read the data
            const response = await fetch('/api/patient')
            const json = await response.json()
            if(response.ok){
                setPatients(json)
            }
        }
        fetchdata()
    }, [])


    return ( 
        <div className="home">
 
            <div className="patientDetails">
                {patients && patients.map((x)=>(
                 <PatientDetails key={x._id} sendDetails={x}/>
               
                ))}
            </div>
            <PatientForm/>
        </div>
     );
}
 
export default Home;