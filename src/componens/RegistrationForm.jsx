import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const RegistrationForm = ({ login, error }) => {
  const initialValue = { nama: "", email: "", kataSandi: "" };
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
    const errors = { nama: "", email: "", kataSandi: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nama) {
      errors.nama = "*Nama belum dimasukkan!";
    }
    if (!values.email) {
      errors.email = "*Email belum dimasukkan!";
    } else if (!regex.test(values.email)) {
      errors.email = "*Email yang anda masukkan tidak sesuai dengan format!";
    }
    if (!values.kataSandi) {
      errors.kataSandi = "*Kata sandi belum dimasukkan!";
    } else if (values.kataSandi < 5) {
      errors.kataSandi = "*Kata sandi tidak boleh kurang dari 5 karakter!";
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

          <p className="text-gray-800 text-xs text-center mt-8 mb-3">
            Mendaftar menggunakan email
          </p>

          <div className="input-field flex flex-col">
            {/* INPUT NAMA */}
            <div
              className={`form-group flex items-center border border-gray-400 rounded-md py-2 px-4`}
            >
              <input
                className="flex-grow pr-4 bg-transparent outline-none"
                type="text"
                placeholder="Nama Lengkap"
                name="nama"
                onChange={handleChange}
                value={formValues.nama}
              />
            </div>
            <p className="text-xs text-red-500 h-4">{formErrors.nama}</p>
            {/* END INPUT NAMA */}

            {/* INPUT EMAIL */}
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
            <p className="text-xs text-red-500 h-4">{formErrors.email}</p>
            {/* END INPUT EMAIL */}

            {/* INPUT KATA SANDI */}
            <div
              className={`form-group flex items-center border border-gray-400 rounded-md py-2 px-4`}
            >
              <input
                className="flex-grow pr-4 bg-transparent outline-none"
                type="password"
                placeholder="Kata Sandi"
                name="password"
                onChange={handleChange}
                value={formValues.kataSandi}
              />
              <Icon icon="akar-icons:eye" className="text-gray-500" />
            </div>
            <p className="text-xs text-red-500 h-5">{formErrors.kataSandi}</p>
            {/* END INPUT KATA SANDI */}

            {/* KONFIRMASI KATA SANDI */}
            <div
              className={`form-group flex items-center border border-gray-400 rounded-md py-2 px-4`}
            >
              <input
                className="flex-grow pr-4 bg-transparent outline-none"
                type="password"
                placeholder="Konfirmasi Kata Sandi"
                name="kata-sandi"
                onChange={handleChange}
                value={formValues.kataSandi}
              />
              <Icon icon="akar-icons:eye" className="text-gray-500" />
            </div>
            <p className="text-xs text-red-500 h-4">{formErrors.kataSandi}</p>
            {/* END KONFIRMASI KATA SANDI */}

            {/* BUTTON */}
            <input
              type="submit"
              value="Daftar"
              className="bg-orange-500 hover:bg-orange-600 rounded-md py-2 px-4  text-white font-semibold mb-5"
            />
            <div className="relative flex items-center justify-center w-full border border-t mb-5 bg-gray-400">
              <div className="absolute px-5 bg-white text-xs font-semibold">
                atau
              </div>
            </div>
            <Link
              to="/login"
              className="bg-gray-500 hover:bg-gray-600 rounded-md py-2 px-4 text-white font-semibold text-center"
            >
              Masuk
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
