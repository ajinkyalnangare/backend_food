import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
export default function Signup() {
    const initialValues = {
        name: '',
        email: '',
        password:'',
        geolocation:''
  
      }
      const onSubmit =async (values) => {
        const data= {name:values.name,email:values.email,password:values.password,location:values.address}
        const response=await fetch("http://localhost:5000/api/createuser",{
           method:'POST',
           headers:{
            'Content-Type':'application/json'
           },body:JSON.stringify(data) 
        })
        
        const json=await response.json()
        console.log(json)
        if(!json.success){
           
            alert("Enter valid credeintial")
        }
        formik.resetForm()
       }
      
      const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
    
      })
   
  return (
    <>
    
    <div className='container'>
     <form onSubmit={formik.handleSubmit}>
     <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="name"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.name}/>
    
  </div>
     <div className="mb-3">
    <label  className="form-label" >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

 
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.password}/>
  </div>
  
  <div className="mb-3">
    <label  className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputadress" name="address"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.address}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
    
  )
}