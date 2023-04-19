import React from "react";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";
import Autocomplete from "@mui/material/Autocomplete";
import Buttons from "./Button";

function ContactForm() {
  return (
    <div className="formWrap flex w-full items-start">
      <div className="formElem flex w-full">
        <div className="formLabel">Name</div>
        <TextField
          className="flex w-full"
          id="outlined-basic"
          variant="outlined"
          placeholder="|"
        />
      </div>

      <div className="formElemWrap formElem flex justify-between">
        <div className="formElem flex w-[38%]">
          <div className="formLabel">Country Code</div>
          <Autocomplete
            className="flex w-full"
            disablePortal
            options={["(IND) +91", "(IND) +91", "(IND) +91"]}
            renderInput={(params) => <TextField {...params} placeholder="|" />}
          />
        </div>

        <div className="formElem flex w-[58%]">
          <div className="formLabel">Mobile Number</div>
          <TextField
            className="flex w-full"
            id="outlined-basic"
            variant="outlined"
            placeholder="|"
          />
        </div>
      </div>

      <div className="formElem flex w-full">
        <div className="formLabel">Email ID</div>
        <TextField
          className="flex w-full"
          type={"email"}
          id="outlined-basic"
          variant="outlined"
          placeholder="|"
        />
      </div>
      <div className="formElem flex w-full">
        <div className="formLabel">
          Select that Course you are Interested to Learn
        </div>
        <Autocomplete
          className="flex w-full"
          disablePortal
          options={["UI UX", "Frontend Development", "Graphic Design"]}
          renderInput={(params) => <TextField {...params} placeholder="|" />}
        />
      </div>
      <div className="formElem flex w-full">
        <div className="formLabel">Your Questions?</div>
        <TextareaAutosize aria-label="empty textarea" placeholder="|" />
      </div>

      <div className="formBtn w-full flex justify-center">
        <Buttons value={{ val: "Send Enquiry", type: 2 }} />
      </div>
    </div>
  );
}

export default ContactForm;
