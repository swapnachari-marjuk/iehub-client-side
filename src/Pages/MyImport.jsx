import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import ImportsCard from "../Components/ImportsCard";
import Loading from "../Components/Loading";

const MyImport = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [imports, setImports] = useState();
  const [pageLoading, setPageLoading] = useState(true);

  const onDelete = (id) => {
    const remainingData = imports.filter((importData) => importData._id !== id);
    setImports(remainingData);
  };

  useEffect(() => {
    axiosSecure
      .get(`/imports?email=${user?.email}`)
      .then((res) => {
        setImports(res.data);
        setPageLoading(false);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, user]);

  if (pageLoading) {
    return <Loading />;
  }

  if (!imports?.length) {
    return (
      <div className="flex justify-center items-center py-10">
        <title>IEHub || My Import</title>
        <div className="bg-gray-100 p-5 rounded-2xl text-center text-gray-500">
          <h2 className="font-bold text-2xl">
            You have not imported any products yet.
          </h2>
          <p className="text-sm">You can import any product you want.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-5">
      <title>IEHub || My Import</title>
      <h2 className="text-center text-xl font-bold my-3">Your Imports</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
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
