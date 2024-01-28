"use client";

import { Inbox } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept:{"application/pdf" : [".pdf"]},
    maxFiles:1,
    // onDrop: (acceptedFile) => {
    //     console.log(acceptedFile)
    // }
  });

  return (
    <div className="p-2 bg-white rounded-lg">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 rounded-lg cursor-pointer bg-grey-50 py-8 px-[100px] flex justify-center items-center",
        })}
      >
        <input {...getInputProps()} />
        <>
          <Inbox className="w-10 h-10 text-blue-500" />
          <p className="m-2 text-sm text-slate-400">Drop PDF Here </p>
        </>
      </div>
    </div>
  );
};

export default FileUpload;
