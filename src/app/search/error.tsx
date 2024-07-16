"use client"

import { useEffect } from "react";

type error ={
    error: any;
    reset: any;
}

const error = ({error, reset}: error) => {
    useEffect(() =>{
        console.log('error', error);
    }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Something went Wrong!</h1>
      <button className="text-blue-500">Try Again</button>
    </div>
  )
}

export default error
