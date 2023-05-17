import React from "react";
import { Row, Form, Input, DatePicker, Button } from "antd";

function TempPage() {
  const OnFinish=(value)=>{
    console.log(value)
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
          className="leftContainer w-full md:w-3/4
        bg-white
        h-full"
        >
          <Form layout="vertical" className="  rounded-lg">
            <h1>Sign Up</h1>
            <hr />
            <div className="main flex px-7 gap-7">
              <div className="mainleft w-1/2">
                {" "}
                <Form.Item
                  name="firstName"
                  label="First name"
                  placeholder="First name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Date Of Birth">
                  <DatePicker />
                </Form.Item>
              </div>
              
              
              <div className="mainright w-1/2">
              <Form.Item
                  name="email"
                  label="Email"
                  placeholder="Email"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="number"
                  label="Phone number"
                  placeholder="Phone number"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  placeholder="Password"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <Button  htmlType="submit">
        Register
      </Button>
          </Form>
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

export default TempPage;
