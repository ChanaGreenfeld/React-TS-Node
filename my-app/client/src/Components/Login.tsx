import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Password} from 'primereact/password'
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './DemoRegister.css';
import '../index.css'
import usersServise from '../Service/usersServise';
import View from './View';
import { Link } from 'react-router-dom';


 function Login ()  {

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
   
     const formik = useFormik({
         initialValues: {
             email: '',
             password: ''
         },
         validate: (data) => {
             let errors = {
                 email: '',
                 password: '' 
             };
 
             if (!data.email) {
                 errors.email = 'Email is required.';
             }
             else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                 errors.email = 'Invalid email address. E.g. example@email.com';
             }
 
             if (!data.password) {
                 errors.password = 'Password is required.';
             }
 
             return errors;
         },
         onSubmit: (data) => {
             setFormData(data);
             setShowMessage(true);
             usersServise.LoginUser("c64966@gmail.com","419666").then((res)=>{
                item= sessionStorage.getItem("token");
                console.log('yesSubmit', item);
             }).catch(err=>console.log(err) );
         }
     });

      let item
    const yesSubmit= (event: React.FormEvent<HTMLFormElement>)=>{
        usersServise.LoginUser("c64966@gmail.com" ,"419666").then((res)=>{
            item= sessionStorage.getItem("token");
            console.log('yesSubmit', item);
            return <View></View>
         }).catch(err=>console.log(err) );
       
     }
     
    
     const isFormFieldValid = (name:string) => !!((formik.touched as any)[name] && (formik.errors as any)[name]);
     const getFormErrorMessage = (name:string) => {
         return isFormFieldValid(name) && <small className="p-error">{(formik.touched as any)[name] }</small>;
     };
 
     const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
     const passwordHeader = <h6>Pick a password</h6>;
     const passwordFooter = (
         <React.Fragment>
             <Divider />
             <p className="mt-2">Suggestions</p>
             <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                 <li>At least one lowercase</li>
                 <li>At least one uppercase</li>
                 <li>At least one numeric</li>
                 <li>Minimum 8 characters</li>
             </ul>
         </React.Fragment>
     );
 
     return <>
     {      
         <div className="form-demo">
             <div className="flex justify-content-center">
                 <div className="card">
                     <h5 className="text-center">Login</h5>
                     <form onSubmit={yesSubmit} className="p-fluid">
                         <div className="field">
                             <span className="p-float-label p-input-icon-right">
                                 <i className="pi pi-envelope" />
                                 <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                 <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                             </span>
                             {getFormErrorMessage('email')}
                         </div>
                         <div className="field">
                             <span className="p-float-label">
                                 <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                     className={classNames({ 'p-invalid': isFormFieldValid('password') })} header={passwordHeader} footer={passwordFooter} />
                                 <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                             </span>
                             {getFormErrorMessage('password')}
                         </div>                      
                         <Button type="submit" label="Submit" className="mt-2"/>
                         
                     </form>
                 </div>
             </div>
         </div>
        }
     
      </>
}
export default Login;
