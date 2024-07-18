const PatientDetails = ({sendDetails}) => {
    const handleClick = async() => {
        const response = await fetch('/api/patient/' + sendDetails._id, {
            method:'DELETE'
    
        }) // concating id means we are taking a particular id from this nedpoint 
    
        const json = await response.json()
    
        }

    return ( 
        <div className="patient-details">
        <p><strong>Name: </strong>{sendDetails.name}</p>
        <p><strong> Address: </strong>{sendDetails.address}</p>
        <p><strong>Phone: </strong>{sendDetails.phone}</p>
        {/* <p>{sendDetails.createdAt}</p> */}
        <span className="delete-btn" onClick={handleClick}>x</span>
        </div>
     );
}
 
export default PatientDetails;