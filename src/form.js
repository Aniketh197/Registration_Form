import React,{useState} from "react";
import './form.css'

function Form(){
    let [nam,setName]=useState("")
    let [usn,setUsn]=useState("")
    let [email,setEmail]=useState("")
    let [phone,setPhone]=useState("")
    return(
        <div>
            <h1>Registration Form</h1>
            <form>
                <label>Name</label>
                <input type="text" placeholder="Enter your Name" name='Name' value={nam} onChange={(e)=>setName(e.target.value)} required/>
                <label>USN</label>
                <input type="text" placeholder="DAADDAADDD" name='Usn' value={usn}onChange={(e)=>setUsn(e.target.value)} required/>
                <label>Email Id</label>
                <input type="text" placeholder="username@example.com" name='Email' value={email} onChange={(e)=>setEmail(e.target.value)}required/>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter your Phone Number" name='Phone' value={phone}onChange={(e)=>setPhone(e.target.value)} required/>
                <button type="submit">SUBMIT</button>
            </form>
            <div>
            <h4>Entered Details:</h4>
            <p>Name: {nam}</p>
            <p>USN:  {usn}</p>
            <p>Email:  {email}</p>
            <p>Phone:  {phone}</p>
            </div>
        </div>

    );
}
export default Form
