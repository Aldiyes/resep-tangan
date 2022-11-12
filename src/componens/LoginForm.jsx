import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const LoginForm = ({ login, error }) => {
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    login(formValues);
  };

  const validate = (values) => {
    const errors = { email: "", password: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "*This is not an valid email format!";
    }
    if (!values.password) {
      errors.password = "*Password is required!";
    } else if (values.password < 5) {
      errors.password = "*Password must be more than 5 character!";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-inner items-center">
          {/* TOP */}
          <div className="logo grid grid-cols-6 gap-4">
            <div className="col-start-2 col-span-4">
              <img src={Logo} alt="logo" />
            </div>
            <p className="col-start-2 col-span-4 text-center font-semibold text-xs italic">
              berbagi resep buatan rumah dari tangan ke tangan
            </p>
          </div>

          <p className="text-gray-800 text-xs text-center mt-10 mb-3">
            Silahkan Masuk dengan email yang sudah terdaftar
          </p>

          {/* INPUT EMAIL */}
          <div className="input-field flex flex-col">
            <div
              className={`form-group flex items-center border border-gray-400 rounded-md py-2 px-4`}
            >
              <input
                className="flex-grow pr-4 bg-transparent outline-none"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={formValues.email}
              />
            </div>
            <p className="text-xs text-red-500 h-8">{formErrors.email}</p>
            {/* END INPUT EMAIL */}

            {/* INPUT PASSWORD */}

            <div
              className={`form-group flex items-center border border-gray-400 rounded-md py-2 px-4`}
            >
              <input
                className="flex-grow pr-4 bg-transparent outline-none"
                type="password"
                placeholder="Kata Sandi"
                name="password"
                onChange={handleChange}
                value={formValues.password}
              />
              <Icon icon="akar-icons:eye" className="text-gray-500" />
            </div>
            <p className="text-xs text-red-500 h-8 mb-0">
              {formErrors.password}
            </p>
            {/* END INPUT PASSWORD */}

            <Link
              to="/recovery-password"
              className="hover:underline text-xs text-right"
            >
              Lupa Kata Sandi?
            </Link>

            {/* BUTTON */}
            <input
              type="submit"
              value="Masuk"
              className="bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-4 mt-6 text-white font-semibold mb-5"
            />
            <div className="relative flex items-center justify-center w-full border border-t mb-5 bg-gray-400">
              <div className="absolute px-5 bg-white">atau</div>
            </div>
            <Link
              to="/registration"
              className="bg-gray-500 hover:bg-gray-600 rounded-md py-2 px-4 text-white font-semibold text-center"
            >
              Daftar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
