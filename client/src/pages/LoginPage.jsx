import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        body: JSON.stringify({ identifier, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        alert("Logged in successfully");
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Login failed . Try again");
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Login failed. Please try again");
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
          className="leftContainer w-full md:w-1/3
          bg-white
          h-full"
        >
          <Form
            name="normal_login"
            className="login-form
            mt-12
            mx-auto"
            initialValues={{
              remember: true,
            }}
            onFinish={login}
          >
            <h1
              className="font-extrabold
            text-xl
            py-4"
            >
              Login
            </h1>
            <hr />
            <Form.Item
              name="identifier"
              rules={[
                {
                  required: true,
                  message: "Please input your email or phone number!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email or phone"
                type="text"
                id="identifier"
                value={identifier}
                onChange={(ev) => setIdentifier(ev.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
            </Form.Item>
            {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}  
            <Form.Item>
              <Button
                onClick={login}
                type="primary"
                htmlType="submit"
                className="login-form-button
                border-2 
                rounded-lg
                px-5
                py-1
                bg-[#FFB984]
                text-gray-600
                hover:bg-[#FFB984]
                hover:text-white"
              >
                Log in
              </Button>
              Or <a href="/register">register now!</a>
            </Form.Item>
          </Form>
        </div>
       
        <div
          className="rightContainer w-2/3
          bg-[#FFB984] 
          h-full
          hidden
          md:block"
        ></div>
      </div>
    </div>
  );
}

export default LoginPage;
