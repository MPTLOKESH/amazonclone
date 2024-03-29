import React from "react";
import Amazon from "./images/amazon (2).png";

import "./signup.css";
function SignUp() {
  return (
    <div>
      <>
        <div className="flex flex-col items-center ">
          <div className="flex items-center">
            <img src={Amazon} alt="" className="w-[95px]" />
            <p className="text-xs">.in</p>
          </div>

          <div className="w-[348px] h-auto bg-white border-[1px] rounded-lg p-[15px]">
            <p className="text-[28px] pb-[4px] mb-[10px]">Create Account</p>
            <div className="flex flex-col gap-5">
              {/* USERNAME */}
              <div className="flex flex-col gap-[1px] ">
                <label className="pb-[2px] text-[13px] font-bold pl-[2px]">
                  Your name
                </label>
                <input
                  className="px-[7px] outline-gray-400 text-[13px]  border-[3px] border-transparent outline outline-1 focus:border-[#c8f3fa] focus:outline-[#12414f] rounded-[2px]"
                  type="text"
                  placeholder="First and last name"
                />
              </div>
              {/* MOBILE NUMBER */}
              <div className="flex flex-col gap-[1px]">
                <label className="pb-[2px] text-[13px] font-bold pl-[2px]">
                  Mobile number
                </label>
                <div className="flex justify-between">
                  <select
                    type="number"
                    className=" rounded-[5px] px-[7px] text-[13px] border-[3px] border-transparent outline outline-1 outline-gray-400 focus:border-[#c8f3fa] focus:outline-[#12414f] "
                  >
                    <option value="">IN +91</option>
                  </select>
                  <input
                    className="w-[210px] outline-gray-400 px-[7px] text-[13px] border-[3px] border-transparent outline outline-1 focus:border-[#c8f3fa] focus:outline-[#12414f] rounded-[2px]"
                    type="number"
                    placeholder="Mobile number"
                  />
                </div>
              </div>
              {/* EMAIL */}
              <div className="flex flex-col gap-[1px]">
                <label className="pb-[2px] text-[13px] font-bold pl-[2px]">
                  Email (optional)
                </label>
                <input
                  className="px-[7px] outline-gray-400 text-[13px] border-[3px] border-transparent  outline outline-1 focus:border-[#c8f3fa] focus:outline-[#12414f] rounded-[2px]"
                  type="email"
                />
              </div>
              {/* PASSWORD */}
              <div className="flex flex-col gap-[1px]">
                <label className="pb-[2px] font-bold text-[13px] pl-[2px]">
                  Password
                </label>
                <input
                  className="px-[7px] outline-gray-400 text-[13px] border-[3px] border-transparent outline outline-1 focus:border-[#c8f3fa] focus:outline-[#12414f] rounded-[2px]"
                  type="password"
                  placeholder="At least 6 characters"
                />
                <p className="text-[11px] text-gray-400 my-1">
                  Passwords must be at least 6 characters.
                </p>
              </div>
              {/* MESSAGE */}
              <p className="text-[13px]">
                To verify your number, we will send you a text message with a
                temporary code. Message and data rates may apply.
              </p>
              {/* SIGN IN BUTTON */}
              <button className="bg-[#f0c14b] text-[13px] px-[6px] py-[6px]  rounded-md">
                Verify mobile number
              </button>
              <hr></hr>
              {/* BUSINESS ACCOUNT */}
              <div className="text-[13px] bg-white">
                <p className="font-bold">Buying for work?</p>
                <p>
                  <a href="#" className="text-[#0066c0] hover: text-[]">
                    Create a free business account
                  </a>
                </p>
              </div>
              <div>
                <hr />
              </div>

              {/* Sign in */}
              <div className="flex items-center gap-1">
                <p className="text-[13px]">Already have an account?</p>
                <a href="#" className="text-[#0066c0] text-[13px]">
                  Sign in
                </a>
              </div>
              <p className="text-[12px]">
                By creating an account or logging in, you agree to Amazon’s
                <span className="text-[#0066c0]"> Conditions of Use</span> and
                <span className="text-[#0066c0]"> Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <hr className="my-5" />
        <div className="flex flex-col gap-4 items-center text-[11px]">
          <div className="flex gap-8">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Help</a>
          </div>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </>
    </div>
  );
}

export default SignUp;
