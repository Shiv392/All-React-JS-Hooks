import React from 'react'
import {useFormik} from 'formik'

const validate=(values)=>{
let errors={};
if(!values.name){
    errors.name="name is required"
}
else if(values.name.length>10){
    errors.name="name must be of max 10 letters";
}
if(!values.email){
 errors.email="emaii is must";
}
else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email="please enter valid email"
}
if(!values.pass1){
    errors.pass1="password is required";
}
else if(values.pass1!==values.pass2){
    errors.pass2="password must be same";
}
return errors;
}
function UseStateForm() {
const formik= useFormik({
    initialValues:{
        name:'',email:'',pass1:'',pass2:''
    },
    validate,
    onSubmit:(values)=>{
        console.log(values);
    }
})
  return (
   <>
   <div className='card container mt-3'>
        <div className='card-body'>
        <form className='form' onSubmit={formik.handleSubmit}>
        <input id='name'onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type='text' value={formik.values.name}  placeholder='Enter Name' />
        {formik.touched.name && formik.errors.name ? <span className='text text-danger'>{formik.errors.name}</span> : null}
        <br />
        <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type='text' value={formik.values.email}  
        placeholder='Enter Email'/> 
    {
      formik.touched.email ?? formik.errors.email ? <span className='text text-danger'>{formik.errors.email}</span>: null
    }
        <br />
        <input id='pass1' onBlur={formik.handleBlur}  className='form-control' type='password' value={formik.values.pass1} 
        onChange={formik.handleChange} placeholder='Enter Password' /> 
        {
formik.touched.pass1&& formik.errors.pass1 ? <span className='text text-danger'>{formik.errors.pass1}</span> : null
        }
        <br />
  <input id='pass2' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control' type='password' value={formik.values.pass2} 
  placeholder='Re-enter password' />
  {
    formik.touched.pass2 && formik.errors.pass2 ? <span className='text text-danger'>{formik.errors.pass2}</span> : null
  }
  <div className='container mt-3'>
    <button type='submit' className='btn btn-primary m-2' onClick={formik.handleSubmit}>Submit</button>
    <button className='btn btn-dark m-2' onClick={formik.handleReset}>Reset All</button>
  </div>
      </form>
        </div>
      </div>
   </>
    
  )
}

export default UseStateForm
