import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
// import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";

const Details = () => {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { id } = useParams();
  const [productData, setProductData] = useState();
  const [importQuantity, setImportQuantity] = useState("");
  const modalRef = useRef();

  useEffect(() => {
    axiosSecure
      .get(`/products/byId/${id}`)
      .then((axiosData) => {
        setLoading(false);
        setProductData(axiosData.data);
      })
      .catch((err) => console.log(err));
  }, [axiosSecure, id]);

  const {
    product_image,
    product_name,
    category,
    brand,
    price,
    origin_country,
    rating,
    available_quantity,
    description,
    import_date,
    supplier_name,
    supplier_email,
    shipping_cost,
    status,
    _id,
  } = productData || {};

  const handleQuantity = (e) => {
    const value = e.target.value;
    setImportQuantity(value);
  };

  const [available, setAvailable] = useState(0);

  useEffect(() => {
    if (productData?.available_quantity) {
      setAvailable(available_quantity);
    }
  }, [available_quantity, productData]);

  const handleImportData = (e) => {
    e.preventDefault();
    // const importer_name = e.target.name.value;
    const importer_email = e.target.email.value;
    const import_quantity = e.target.quantity.value;
    const import_country = e.target.country.value;

    const importData = {
      product_id: id,
      product_name,
      product_image,
      importer_email,
      price,
      rating,
      supplier_name,
      supplier_email,
      import_quantity,
      total_cost: price * import_quantity,
      imported_at: new Date().toLocaleTimeString(),
      import_country,
    };
    // console.log(importData);

    axiosSecure
      .post(`/imports`, importData)
      .then(() => {
        // console.log("after secure call", response);
        e.target.reset();
        setImportQuantity("");
        setAvailable(available - Number(import_quantity));
        toast.success("Item imported successfully.")
        modalRef.current.close();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white shadow-md rounded-xl p-6">
      <title>IEHub || Details</title>
      {/* Product Image & Info Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
          <img
            src={product_image}
            alt={product_name}
            className="w-full max-w-sm object-contain rounded-lg"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-semibold text-gray-800">
            {product_name}
          </h1>
          <p className="text-sm text-gray-500 italic">
            {category} • {brand}
          </p>

          <p className="text-3xl font-bold text-blue-600">${price}</p>

          <div className="flex flex-wrap gap-4 text-gray-700 mt-4">
            <p>
              <span className="font-medium">Origin:</span> {origin_country}
            </p>
            <p>
              <span className="font-medium">Available:</span> {available}
            </p>
            <p>
              <span className="font-medium">Rating:</span> ⭐ {rating}
            </p>
            <p>
              <span className="font-medium">Status:</span> {status}
            </p>
          </div>

          <p className="text-gray-600 mt-3 leading-relaxed">{description}</p>

          <div className="border-t border-gray-100 pt-3 text-sm text-gray-500">
            <p>
              <span className="font-medium text-gray-700">Import Date:</span>{" "}
              {import_date}
            </p>
            <p>
              <span className="font-medium text-gray-700">Shipping Cost:</span>{" "}
              ${shipping_cost}
            </p>
          </div>
        </div>
      </div>

      {/* Supplier Info */}
      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Supplier Information
        </h2>
        <div className="text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Name:</span> {supplier_name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {supplier_email}
          </p>
        </div>
      </div>

      {/* modal button */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          className="btn btn-primary"
          onClick={() => modalRef.current.showModal()}
        >
          Import Product
        </button>
      </div>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <h3 className="text-xl font-bold text-center">
              Provide Importer Information
            </h3>

            <form onSubmit={handleImportData} className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <div>
                  <label className="label">Importer Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    defaultValue={user.displayName}
                    readOnly
                  />
                </div>
                {/* email field */}
                <div>
                  <label className="label">Importer Email</label>
                  <input
                    type="text"
                    className="input w-full"
                    name="email"
                    defaultValue={user.email}
                    readOnly
                  />
                </div>
                {/* country field */}
                <div>
                  <label className="label">Import Country</label>
                  <input
                    type="text"
                    className="input w-full"
                    name="country"
                    placeholder="e.g. Bangladesh"
                    required
                  />
                </div>
                {/* quantity field */}
                <div>
                  <label className="label">Quantity to import</label>
                  <input
                    type="number"
                    className="input w-full"
                    name="quantity"
                    placeholder="e.g. 25"
                    value={importQuantity}
                    onChange={handleQuantity}
                  />
                </div>

                <button
                  className="btn btn-primary mt-4"
                  disabled={
                    Number(available) < importQuantity || importQuantity < 1
                      ? true
                      : false
                  }
                >
                  Import Now
                </button>
              </fieldset>
            </form>

            <form method="dialog">
              <button className="btn border-0 w-full">Cancel Import</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
