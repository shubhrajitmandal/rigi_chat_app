import { useState } from "react";
import styled from "styled-components";

const StyledOTPInput = styled.input`
  &,
  &:focus {
    padding-left: 24px;
    width: 40px;
    height: 60px;
    border-radius: 4px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  border: 1px solid #8f9fa6;

  &:focus {
    border: 1px solid #6610f2;
  }
`;

const OTPInput = ({ inputNumber }) => {
  const [otp, setOTP] = useState(new Array(inputNumber).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOTP([...otp.map((d, i) => (i === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      {otp.map((data, index) => (
        <StyledOTPInput
          maxLength={1}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </>
  );
};

export default OTPInput;
