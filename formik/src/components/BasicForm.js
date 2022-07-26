import React from "react";
import { useFormik } from "formik";

const BasicForm = () => {
  const {values, handleChange, handleBlur} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmpassword: ""
    }
  });
  return (
    <>
      <form className="form" autoComplete="off">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          min={0} max={150}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          id="age"
          placeholder="Enter your age"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          placeholder="Enter your password"
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmpassword"
          placeholder="Enter confirm password"
        />
        <button className="button">Submit</button>
      </form>
      <p>{values.email}</p>
      <p>{values.age}</p>
      <p>{values.password}</p>
      <p>{values.confirmpassword}</p>
    </>
  );
};

export default BasicForm;
