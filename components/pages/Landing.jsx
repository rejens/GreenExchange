"use client";
import React, { useState } from "react";
import BgImg from "../../res/bg.jpg";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  Text,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Date & Time" },
  { title: "Second", description: "Product Details" },
  { title: "Third", description: "Final" },
];

function Landing() {
  const [step, setSteps] = useState(1);
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    date: "",
    time: "",
    phone: "",
    type: "",
    weight: "",
    description: "",
    address: "",
    option: "sell",
  });

  function submit() {
    if (
      data.date == "" ||
      data.time == "" ||
      data.phone == "" ||
      data.type == "" ||
      data.weight == "" ||
      image == "" ||
      data.description == "" ||
      data.address == ""
    ) {
      //  check which field is empty
      if (data.date == "") {
        alert("Date is empty");
        setSteps(1);
        return;
      }
      if (data.time == "") {
        alert("Time is empty");
        setSteps(1);
        return;
      }
      if (data.phone == "") {
        alert("Phone is empty");
        setSteps(2);
        return;
      }
      if (data.type == "") {
        alert("Type is empty");
        setSteps(2);
        return;
      }
      if (data.weight == "") {
        alert("Weight is empty");
        setSteps(2);
        return;
      }
      if (image == "") {
        alert("Image is empty");
        setSteps(2);
        return;
      }
      if (data.description == "") {
        alert("Description is empty");
        setSteps(3);
        return;
      }
      if (data.address == "") {
        alert("Address is empty");
        setSteps(3);
        return;
      }
    } else {
      alert("Submitted");
    }
  }

  return (
    <div
      className='min-h-screen p-5 flex flex-row justify-center items-center flex-wrap'
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className='flex gap-5 md:w-1/2 w-full items-center flex-col'>
        <h2
          className='sm:text-xl text-green-700 font-bold'
          style={{
            fontSize: 60,
          }}
        >
          GreenExchange
        </h2>
        <p className='text-xl'>Exchange Greenery with Waste</p>
      </div>

      <div
        className='flex flex-col p-8 rounded-md shadow-md slideUp justify-between'
        style={{
          border: "1px solid #0000002a",
          height: 500,
          width: 480,
          backgroundColor: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className=''>
          <h2 className='text-xl text-black font-bold text-center pb-8'>
            Call us for Waste Products
          </h2>
          {/* Tab COunt */}
          <Stepper index={step}>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <Box flexShrink='0'>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          {/* Step1 */}
          {step == 1 && (
            <div className='flex gap-5 flex-wrap pt-12'>
              <div className='w-full md:w-5/12'>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm font-bold text-gray-700 tracking-wide'>
                    Date
                  </label>
                  <input
                    className='text-base py-2 border-b p-5 border-gray-300 focus:outline-none focus:border-indigo-500'
                    type='date'
                    placeholder='John Doe'
                    onChange={(e) => {
                      setData({ ...data, date: e.target.value });
                    }}
                    defaultValue={data.date}
                  />
                </div>
              </div>
              <div className='w-full md:w-5/12'>
                <div className='flex flex-col gap-2'>
                  <label className='text-sm font-bold text-gray-700 tracking-wide'>
                    Time
                  </label>
                  <input
                    className='text-base py-2 border-b p-5 border-gray-300 focus:outline-none focus:border-indigo-500'
                    type='time'
                    placeholder='Time'
                    onChange={(e) => {
                      setData({ ...data, time: e.target.value });
                    }}
                    defaultValue={data.time}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Step 2 */}
          {step == 2 && (
            <div className=''>
              <div className='flex gap-5 flex-wrap pt-5'>
                <div className='w-full md:w-5/12'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-gray-700 tracking-wide'>
                      Phone
                    </label>
                    <input
                      className='text-base py-2 border-b p-5 border-gray-300 focus:outline-none focus:border-indigo-500'
                      type='number'
                      placeholder='985-4021245'
                      onChange={(e) => {
                        setData({ ...data, phone: e.target.value });
                      }}
                      defaultValue={data.phone}
                    />
                  </div>
                </div>
                <div className='w-full md:w-5/12'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-gray-700 tracking-wide'>
                      Waste Type
                    </label>
                    <select
                      className='text-base py-2 border-b p-5 border-gray-300 focus:outline-none focus:border-indigo-500'
                      name='type'
                      id='type'
                      onChange={(e) => {
                        setData({ ...data, type: e.target.value });
                      }}
                      defaultValue={data.type}
                    >
                      <option value='ewaste'>E-Waste</option>
                      <option value='clothes'>Clothes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='flex gap-5 flex-wrap pt-5'>
                <div className='w-full md:w-5/12'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-gray-700 tracking-wide'>
                      Weight (in Kgs)
                    </label>
                    <input
                      className='text-base py-2 border-b p-5 border-gray-300 focus:outline-none focus:border-indigo-500'
                      type='number'
                      placeholder='3'
                      onChange={(e) => {
                        setData({ ...data, weight: e.target.value });
                      }}
                      defaultValue={data.weight}
                    />
                  </div>
                </div>
                <div className='w-full md:w-5/12'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-gray-700 tracking-wide'>
                      Image
                    </label>
                    {!image && (
                      <div
                        onClick={() => {
                          document.querySelector("input[type=file]").click();
                        }}
                        className='flex h-10 w-full items-center justify-center rounded-md border-dashed border-2 border-gray-400 hover:bg-gray-100 cursor-pointer '
                        style={{ border: "1px dashed #0000009a" }}
                      >
                        Upload
                      </div>
                    )}
                    {(!!image && (
                      <div className='flex'>
                        <img
                          src={image}
                          alt='image'
                          className='w-full h-32 object-cover'
                        />
                        <p
                          className='h-10 w-10 p-3 absolute hover:cursor-pointer hover:bg-red-300 bg-red-400 rounded-full flex justify-center items-center'
                          onClick={() => {
                            setImage("");
                          }}
                        >
                          X
                        </p>
                      </div>
                    )) || (
                      <input
                        type='file'
                        onChange={() => {
                          setImage(
                            URL.createObjectURL(
                              document.querySelector("input[type=file]")
                                .files[0]
                            )
                          );
                        }}
                        accept='image/*'
                        className='hidden'
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Step 3 */}
          {step == 3 && (
            <div className=''>
              <div className='flex gap-5 flex-wrap pt-5'>
                <div className='w-full'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-gray-700 tracking-wide'>
                      Description
                    </label>
                    <input
                      className='text-base py-2 border-b p-5 w-full border-gray-300 focus:outline-none focus:border-indigo-500'
                      type='text'
                      placeholder='Describe your waste product'
                      onChange={(e) => {
                        setData({ ...data, description: e.target.value });
                      }}
                      defaultValue={data.description}
                    />
                  </div>
                </div>
              </div>
              <div className='flex gap-5 flex-wrap pt-5'>
                <div className='w-full'>
                  <label className='text-sm font-bold text-gray-700 tracking-wide'>
                    I Want to
                  </label>
                  <div className='flex flex-row gap-2'>
                    {/* Radio buttons */}
                    <div className='flex items-center gap-2'>
                      <input
                        type='radio'
                        name='option'
                        id='Sell'
                        className='w-4 h-4'
                        onChange={(e) => {
                          setData({ ...data, option: e.target.value });
                        }}
                        defaultChecked={data.option}
                      />
                      <label htmlFor='Sell'>Sell</label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input
                        type='radio'
                        name='option'
                        id='Donate'
                        className='w-4 h-4'
                        onChange={(e) => {
                          setData({ ...data, option: e.target.value });
                        }}
                        defaultChecked={data.option}
                      />
                      <label htmlFor='Donate'>Donate</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-5 flex-wrap pt-5'>
                <div className='w-full'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm font-bold text-gray-700 tracking-wide'>
                      Address
                    </label>
                    <input
                      className='text-base py-2 border-b p-5 w-full border-gray-300 focus:outline-none focus:border-indigo-500'
                      type='text'
                      placeholder='House No. 233, Khumaltar, Lalitpur'
                      onChange={(e) => {
                        setData({ ...data, address: e.target.value });
                      }}
                      defaultValue={data.address}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='flex gap-5 mt-5 w-full'>
          {step != 1 && (
            <Button
              colorScheme='green'
              onClick={() => {
                if (step == 1) {
                  alert("Cannot go back");
                } else {
                  setSteps(step - 1);
                }
              }}
            >
              Back
            </Button>
          )}

          <Button
            colorScheme='blue'
            onClick={() => {
              if (step == 3) {
                submit();
              } else {
                setSteps(step + 1);
              }
            }}
          >
            {step == 3 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
