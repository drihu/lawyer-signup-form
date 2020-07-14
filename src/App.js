import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Alert({ value }) {
  return <div style={{ color: 'red' }}>{value}</div>;
}

function App() {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      zip_code: '',
      password: '',
      practicing_status: 0,
      legal_expertise: 'other',
      years_of_experience: '',
      languages: [],
      phone_number: '',
      ethnicity: 'earthling',
      terms_of_use: false,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name Required'),
      last_name: Yup.string().required('Last Name Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Required'),
      zip_code: Yup.number().required('Zip Code Required'),
      password: Yup.string().required('Password Required'),
      practicing_status: Yup.number().required('Practicing Status Required'),
      years_of_experience: Yup.number()
        .min(0)
        .max(60)
        .required('Years of Exp Required'),
      terms_of_use: Yup.boolean().oneOf([true]).required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          required
        />
        {formik.touched.first_name && formik.errors.first_name && (
          <Alert value={formik.errors.first_name} />
        )}
        <br />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
          required
        />
        {formik.touched.last_name && formik.errors.last_name && (
          <Alert value={formik.errors.last_name} />
        )}
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
        />
        {formik.touched.email && formik.errors.email && (
          <Alert value={formik.errors.email} />
        )}
        <br />

        <label htmlFor="zip_code">Zip Code</label>
        <input
          type="text"
          id="zip_code"
          name="zip_code"
          placeholder="123456"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zip_code}
          required
        />
        {formik.touched.zip_code && formik.errors.zip_code && (
          <Alert value={formik.errors.zip_code} />
        )}
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          required
        />
        {formik.touched.password && formik.errors.password && (
          <Alert value={formik.errors.password} />
        )}
        <br />

        <label htmlFor="practicing_status">Practicing Status</label>
        <select
          name="practicing_status"
          id="practicing_status"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.practicing_status}
          required
        >
          <option value="0">Practicing Lawyer</option>
          <option value="1">Non Practicing Lawyer</option>
          <option value="2">Retired Lawyer</option>
        </select>
        {formik.touched.practicing_status &&
          formik.errors.practicing_status && (
            <Alert value={formik.errors.practicing_status} />
          )}
        <br />

        <label htmlFor="legal_expertise">Area of legal expertise</label>
        <select
          name="legal_expertise"
          id="legal_expertise"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.legal_expertise}
        >
          <option value="antitrust">Antitrust</option>
          <option value="civil_rights">Civil Rights</option>
          <option value="immigration">Immigration</option>
          <option value="memes">Memes</option>
          <option value="gaming">Gaming</option>
          <option value="pretending_to_work">Pretending to work</option>
          <option value="other">Other</option>
        </select>
        <br />

        <label htmlFor="years_of_experience">Years of experience</label>
        <input
          type="text"
          id="years_of_experience"
          name="years_of_experience"
          min="0"
          max="60"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.years_of_experience}
          required
        />
        {formik.touched.years_of_experience &&
          formik.errors.years_of_experience && (
            <Alert value={formik.errors.years_of_experience} />
          )}
        <br />

        <label htmlFor="languages">Languages</label>
        <select
          name="languages"
          id="languages"
          multiple
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.languages}
        >
          <option value="es">Spanish</option>
          <option value="en">English</option>
          <option value="do">Dothraki</option>
          <option value="ky">Kryptonese</option>
          <option value="kl">Klingon</option>
          <option value="vu">Vulcan</option>
          <option value="ali">Alienese</option>
          <option value="el">Elvish</option>
        </select>
        <br />

        <label
          htmlFor="phone_number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
        >
          Cell Phone Number
        </label>
        <input
          type="number"
          name="phone_number"
          id="phone_number"
          min="100000"
          max="999999"
          placeholder="######"
        />
        <br />

        <label htmlFor="ethnicity">Ethnicity</label>
        <select
          name="ethnicity"
          id="ethnicity"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ethnicity}
        >
          <option value="earthling">Earthling</option>
          <option value="martian">Martian</option>
          <option value="asgardian">Asgardian</option>
        </select>
        <br />

        <label htmlFor="terms_of_use">

          <input
            type="checkbox"
            name="terms_of_use"
            id="terms_of_use"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.terms_of_use}
            required
          />
          I swear that I totally read the terms of use
        </label>
        {formik.touched.terms_of_use && formik.errors.terms_of_use && (
          <Alert value={formik.errors.terms_of_use} />
        )}
        <br />

        <button type="submit">
          Show values
        </button>
      </form>
    </div>
  );
}

export default App;
