import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import ImportsCard from "../Components/ImportsCard";

const MyImport = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [imports, setImports] = useState();

  const onDelete = (id) => {
    const remainingData = imports.filter((importData) => importData._id !== id);
    setImports(remainingData);
  };

  useEffect(() => {
    axiosSecure
      .get(`/imports?email=${user?.email}`)
      .then((res) => {
        setImports(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, user]);

  if (!imports?.length) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="bg-gray-100 p-5 rounded-2xl text-center text-gray-500">
          <h2 className="font-bold text-2xl">
            You do not have any imported products.
          </h2>
          <p className="text-sm">You can import any product you want.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <h2 className="text-center text-xl font-bold my-3">Your Imports</h2>
      <div className="grid grid-cols-3 gap-5 ">
        {imports?.map((importData) => (
          <ImportsCard
            key={importData._id}
            onDelete={onDelete}
            product={importData}
          ></ImportsCard>
        ))}
      </div>
    </div>
  );
};

export default MyImport;
