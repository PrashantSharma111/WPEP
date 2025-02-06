import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}

      <br />
      <br />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}

      <br />
      <br />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={{ color: "red" }}>{formik.errors.password}</div>
      ) : null}

      <button type="submit">Submit</button>
    </div>
  );
}

export default SignUpForm;
