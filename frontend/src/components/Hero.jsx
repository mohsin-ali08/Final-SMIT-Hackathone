import React, { useState } from "react";
import LoanCategories from "./ui/LoanCategory";
import { Button, Form, Input, Modal } from "antd";
import backgroundImage from '../img/Background.jpg';

const Hero = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <section
      className="text-gray-600 body-font min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image here
        backgroundPosition: 'center', // Ensure the background is centered
        backgroundSize: 'cover', // Ensure it covers the entire section
      }}
    >
      <div className="bg-gray-900 bg-opacity-60 min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
              SAYLANI WELFARE TRUST
            </h2>
            <h1 className="sm:text-3xl text-5xl font-medium title-font mb-4 text-white">
              Microfinance Bank
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              Saylani Welfare Trust's Microfinance Bank offers interest-free loans through
              the <span className="font-semibold">Qarze Hasana program</span>. This program provides
              financial assistance to individuals and families in need, enabling them to
              start or grow small businesses, meet emergency expenses, and improve their
              livelihoods.
            </p>
          </div>

          <div className="text-center" onClick={() => setIsModalVisible(true)}>
            <Button type="primary" size="large">
              Proceed
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {["Wedding Loans", "Startup Loans", "Educational Loans", "Emergency Loans"].map(
              (category, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition-all"
                >
                  <h2 className="text-lg font-medium text-gray-900 mb-2">{category}</h2>
                  <p className="text-gray-600 mb-4">
                    {category === "Wedding Loans"
                      ? "Start your new journey with financial peace of mind."
                      : category === "Startup Loans"
                      ? "Kickstart your entrepreneurial dreams."
                      : category === "Educational Loans"
                      ? "Invest in your future with ease."
                      : "Handle unexpected situations with confidence."}
                  </p>
                  <a className="text-indigo-500 inline-flex items-center cursor-pointer">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              )
            )}
          </div>

          <LoanCategories />

          <Modal
            title="Enter Your Details"
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <Form layout="vertical">
              <Form.Item
                label="CNIC"
                name="cnic"
                rules={[{ required: true, message: "Please enter your CNIC" }]}
              >
                <Input placeholder="Enter your CNIC" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
              >
                <Input placeholder="Enter your Email" />
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your Name" }]}
              >
                <Input placeholder="Enter your Name" />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
