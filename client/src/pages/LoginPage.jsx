import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

function LoginPage() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
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
            onFinish={onFinish}
          >
            <h1 
            className="font-extrabold
            text-xl
            py-4"
            >Login</h1>
            <hr />
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
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
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
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
