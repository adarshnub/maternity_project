import React, { useRef, useState } from "react";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  //backend connection
  async function register(ev) {
    ev.preventDefault();

    const response = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phone,
        date,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 201) {
      alert("Sign Up successfull");
    } else {
      alert("Sign Up failed. Try again after a few minutes");
    }
  }

  return (
    <div
      className="registerMainContainer
    items-center
    justify-center
    bg-gray-200
    relative
    "
    >
      <div
        className="container 
      mx-auto 
      w-3/4 
      h-96
      absolute
      top-[10rem]
      lg:left-[9rem]
      md:left-[6rem]
      sm:left-[6rem]
      left-[3.5rem]
      flex
      shadow-2xl
      
       "
      >
        <div
          className="leftContainer w-full md:w-3/4
        bg-white
        h-full"
        >
          <form action="" className="rounded-lg" onSubmit={register}>
            <h1
              className="font-extrabold
            text-xl
            py-4"
            >
              Sign Up
            </h1>
            <hr />
            <div className="main flex px-7 gap-7 mt-">
              <div
                className="mainleft
               mx-auto 
               flex 
               flex-col
               h-full
               gap-6
               mt-6
               w-1/2
               pl-16"
              >
                <div className="w-full">
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  px-4
                  py-2
                  text-[16px]
                  w-full "
                    type="text"
                    onChange={(ev) => setFirstName(ev.target.value)}
                    value={firstName}
                    // onChange={(e) => handleInputChange(e)}
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  px-4
                  py-2
                  text-[16px]
                  w-full "
                    type="text"
                    value={lastName}
                    onChange={(ev) => setLastName(ev.target.value)}
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
                <div
                  className="w-40 
                h-20 
                bg-gray-200
                shadow-lg"
                >
                  <span
                    className="
                  bg-gray-200
                  rounded-md
                  
                  px-4
                  py-
                  w-full
                  text-[16px]
                  text-gray-400
                  font-bold"
                  >
                    Date of Birth
                  </span>
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  
                  px-4
                  py-1
                  w-full
                  text-[16px]
                  text-gray-400 
                  cursor-pointer"
                    placeholder="Date of Birth"
                    type="date"
                    value={date}
                    id="date"
                    onChange={(ev) => setDate(ev.target.value)}
                    ref={dateInputRef}
                  />
                </div>
              </div>

              <div
                className="mainright
               w-1/2
               flex 
               flex-col
               h-full
               gap-6
               mt-6"
              >
                <div>
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  
                  px-4
                  py-2
                  text-[16px] "
                    type="text"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    id="email"
                    placeholder="@gmail.com"
                  />
                </div>
                <div>
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  
                  px-4
                  py-2
                  text-[16px] "
                    type="number"
                    value={phone}
                    onChange={(ev) => setPhone(ev.target.value)}
                    id="phone"
                    placeholder="Phone number"
                  />
                </div>
                <div>
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  
                  px-4
                  py-2
                  text-[16px] "
                    type="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <input
                    className="form_input
                  bg-gray-200
                  rounded-md
                  
                  px-4
                  py-2
                  text-[16px] "
                    type="password"
                    value={confirmPassword}
                    onChange={(ev) => setConfirmPassword(ev.target.value)}
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div className="mt-1 ">
              <button
                type="submit"
                onClick={register}
                className="border-2 
                rounded-lg
                px-5
                py-1
                text-gray-600
                hover:bg-[#FFB984]
                hover:text-white
                bg-blue-300
                w-4/5
                mt-3
                font-bold"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div
          className="rightContainer w-1/4
        bg-[#FFB984] 
        h-full
        hidden
        md:block"
        ></div>
      </div>
    </div>
  );
}

export default RegisterPage;
