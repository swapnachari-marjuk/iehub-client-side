import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
// import DataTable from "../Components/DataTable";

const MyImport = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [imports, setImports] = useState();
  //   console.log(user?.email);
  useEffect(() => {
    axiosSecure
      .get(`imports?email=${user?.email}`)
      .then((res) => {
        setImports(res.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, user]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Product</th>
              <th>Supplier</th>
              <th>Others</th>
              <th>Import Details</th>
            </tr>
          </thead>
          <tbody>
            {imports?.map((product, i) => {
              console.log(product);
              const {
                product_name,
                product_image,
                supplier_name,
                supplier_email,
                import_quantity,
                total_cost,
              } = product;
              return (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={product_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {supplier_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {supplier_email}
                    </span>
                  </td>
                  <td>
                    <span>Quantity: {import_quantity}</span>
                    <br />
                    <span className="badge badge-ghost text-xs font-semibold">
                      Tot. Cost: {total_cost.toFixed(2)}
                    </span>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-sm">details</button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyImport;
