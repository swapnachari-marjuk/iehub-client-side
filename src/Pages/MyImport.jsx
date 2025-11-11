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

  return (
    <div>
      <div className="grid grid-cols-3">
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
