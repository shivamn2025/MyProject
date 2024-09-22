import React from "react";
import { useFormik } from "formik"
import styled from "styled-components";
import { signUpSchema } from "./schemas";
import { GlobalStyle } from "./styles/globalStyles";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
}

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log('values', values);
      action.resetForm();
    },
  })
  // console.log('errors', errors);
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container" >
          <div >
            <div className="form">
              <form onSubmit={handleSubmit} >
                <h1 className="modal-title">Register</h1>
                <div className="input-block" >
                  <label htmlFor="name" className="input-label" >Name </label>
                  <input
                    className="input-block"
                    type="text"
                    autoComplete="off"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.name && touched.name ? (<p className="error">{errors.name}</p>) : null}

                <div className="input-block">
                  <label htmlFor="email" className="input-label">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="input-block"
                    autoComplete="off"
                    value={values.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.email && touched.email ? (<p className="error">{errors.email}</p>) : null}
                <div className="input-block">
                  <label htmlFor="password" className="input-label" >Password</label>
                  <input
                    type="password"
                    id="password"
                    className="input-block"
                    autoComplete="off"
                    value={values.password}
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.password && touched.password ? (<p className="error">{errors.password}</p>) : null}
                <div className="input-block">
                  <label htmlFor="confirm_password" className="input-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    className="input-block"
                    autoComplete="off"
                    value={values.confirm_password}
                    id="confirm_password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.confirm_password && touched.confirm_password ? (<p className="error">{errors.confirm_password}</p >) : null}
                <div className="bottom-btn">
                  <a href="#">
                    Want to register using Gmail ?
                  </a>
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form{
    border: 1px solid rgba(26, 92, 194,1);
    padding:10px 0px 40px 0px;
    height:auto;
    padding-bottom:10px;
    border-radius:15px;
    width:420px;
    background-color: rgba(26, 92, 194, 0.16); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Adjust the blur radius */
    -webkit-backdrop-filter: blur(20px)
  }
 
  .modal-title {
    margin:30px, 0xp 15px 0px;
    font-weight: 200;
    color: #ffffff;
    font-size:20px
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #55311c;
  }
  .bottom-btn{
    padding:10px 0px 10px 0px
  }
  .bottom-btn a{
    margin-right:20px;
    font-size:14px;
    color:#ffffff;
  }

  .bottom-btn button{
    border:none;
    padding:8px 20px;
    color:brown;
    font-size:14px;
    background-color:#7695FF;
  }
  .input-label {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: rgba(234, 214, 12, 0.8);
    transition: 0.3s;
    width: 150px; /* Fixed width for the label */
    text-align: left; /* Align label text to the left */
  }

  .input-block {
    display: flex;
    flex-direction: row;
    padding: 10px 10px 8px;
    margin:5px;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: 0.3s;
    width:400px;

  }
  .input-block input {
    outline: 0;
    border: 0;
    width:100%
    padding: 14px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block, .error{
    text-align:left;
   
  }
  .error{
    margin-left:120px;
    margin-top:-22px;
    color:rgba(198, 20, 20, 0.83);
    font-weight:400;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;
export default Registration