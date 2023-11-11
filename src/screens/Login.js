import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
 
    email: '',
    password:'',
    

  }
  const onSubmit =async (values) => {
    const data= {email:values.email,password:values.password}
    const response=await fetch("http://localhost:5000/api/loginuser",{
       method:'POST',
       headers:{
        'Content-Type':'application/json'
       },body:JSON.stringify(data) 
    })
    
    const json=await response.json()
    console.log(json)
    
    // console.log(json.success)
    if(!json.success){
       
        alert("Enter valid credeintial")
    }
    if(json.success){
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate('/') 
    
  }
    
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


<button type="submit" className="btn btn-primary">Submit</button>
<Link to="/createuser" className='m-3 btn btn-danger'>Create User</Link>
</form>
</div>
</>
)
}
