import React, { useState } from "react";
import { Form, Checkbox, Typography, message } from "antd";
import { SafetyOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import DynamicInputComponent from "../../components/InputComponents/DynamicInputComponent";
import ButtonDynamic from "../../components/ButtonComponent/ButtonDynamic";
import { setUserDetails } from "../../utils/helpers/storage";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [form] = Form.useForm();

  const [emailState, setEmailState] = useState("")
  const [passwordState, setPasswordState] = useState("")

  const onFinish = (values: { email: string; password: string; remember: boolean }) => {

    const email = values.email.trim().toLowerCase();
    const password = values.password.trim();

    setUserDetails('userData', { email, password })

    message.success(`✓ Welcome ${email}! Redirecting...`);
    setTimeout(() => {
      window.location.reload()
    }, 1000)

  };


  return (
    <div className="rjb-login-container">
      <div className="rjb-login-box">
        <div className="rjb-login-header">
          <div><SafetyOutlined className="rjb-logo-icon" /></div>
          <Title level={2} className="rjb-login-title">
            RJB Security Command
          </Title>
        </div>

        <Form form={form} name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <DynamicInputComponent placeholder={'Email'} size={'large'} prefixIcon={<MailOutlined />} value={emailState} onChange={(e: any) => setEmailState(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                message:
                  "8 chars, uppercase, lowercase, number, and special char.",
              },
            ]}
          >
            <DynamicInputComponent inputType="password" placeholder={'Password'} size={'large'} prefixIcon={<LockOutlined />} value={passwordState} onChange={(e: any) => setPasswordState(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            initialValue={false}
            style={{ marginBottom: 0 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox className="rjb-checkbox" >Remember me</Checkbox>
              <Text className="rjb-login-forgotpassword-txt"
              >
                Forgot password?
              </Text>
            </div>
          </Form.Item>

          <Form.Item style={{ marginTop: 24, marginBottom: 12 }}>
            <ButtonDynamic bttnType="primary" bttnHtmlType="submit" bttnTitle="Sign In" />
          </Form.Item>

          <Text
            className="rjb-create-account-txt"
          >
            Create Account
          </Text>
        </Form>
      </div>
    </div>
  );
};

export default Login;
