import React, { useState } from "react";

const ProjectThree = () => {
  const [login, setLogin] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [0, 1, 2, 3].map(() => React.createRef());
  return (
    <>
      {!login ? (
        <div>
          <input placeholder="Enter Mobile Number"></input>
          <button onClick={()=>setLogin(!login)}>Send OTP</button>
        </div>
      ) : (
        <div>
          {otp.map((val, index) => (
            <input
              key={index}
              type="text"
              ref={inputRefs[index]}
              value={val}
              maxLength={1}
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[index] = e.target.value;
                setOtp(newOtp);
                if(e.target.value != '' && index < inputRefs.length - 1) inputRefs[index+1].current.focus();
              }}
            ></input>
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectThree;
