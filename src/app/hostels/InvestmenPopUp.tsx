"use client";
import investmentType from "@/types/investment";
import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiCamera } from "react-icons/ci";
import { FaCamera } from "react-icons/fa6";

const initialValues: investmentType = {
  _id: undefined,
  title: "",
  location: "",
  description: "",
  profile_img: "",
  total_price: 0,
  tags: "",
};

const InvestmentPopUp = ({
  selectedInvest,
  isOpen,
  setISOpen,
  update,
}: {
  selectedInvest: any;
  isOpen: boolean;
  setISOpen: (value: boolean) => void;
  update: any;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileUploading, setisProfileUploading] = useState<boolean>(false);
  const { register, watch, reset, setValue, unregister } =
    useForm<investmentType>();
  const { _id, profile_img, ...remInvestData } = watch();

  // save data
  const handleSave = async () => {
    setIsLoading(true);
    if (_id) {
      try {
        const response = await axios.put(`/api/investments/update/${_id}`, {
          ...remInvestData,
          profile_img,
        });
        update();
        handleClose();
        toast.success(response.data.message);
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      try {
        const response = await axios.post("/api/investments/create", watch());
        update();
        handleClose();
        toast.success(response.data.message);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    setIsLoading(false);
  };

  const DeleteInvestment = async () => {
    try {
      const resonse = await axios.delete(`/api/investments/${_id}`);
      toast.success(resonse.data.message);
      update();
      handleClose();
      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleChange = (e: any) => {
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "Turfease");
    setValue("profile_img", URL.createObjectURL(e.target.files[0]));
    setisProfileUploading(true);
    uploadProf(formdata);
  };

  //uploadprofie
  const uploadProf = async (data: any) => {
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/ddos89bpu/image/upload`,
        data
      );
      setValue("profile_img", response.data.secure_url);
      setisProfileUploading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    reset(initialValues);
    if (Object.keys(selectedInvest || {})?.length > 0) {
      const { ...remSelectedInvest } = selectedInvest;
      reset({ ...remSelectedInvest });
    }
  }, [selectedInvest, isOpen]);

  const handleClose = () => {
    unregister();
    reset();
    setISOpen(false);
  };

  return (
    <div>
      <Modal
        className="w-[750px]"
        isOpen={isOpen}
        onClose={handleClose}
        placement="top-center"
      >
        <ModalContent>
          <ModalBody>
            <form
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSave();
              }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-center">
                Hostel Information
              </h2>

              {/* Image Upload */}
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                  {profile_img ? (
                    <img
                      src={profile_img}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                      <CiCamera />
                    </div>
                  )}
                  <label className="absolute bottom-1 right-1 bg-black text-white rounded-full p-[3px] cursor-pointer">
                    <FaCamera className="text-xs" />
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-500">
                  Upload a representative image for the hostel.
                </p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium">Title</label>
                  <input
                    {...register("title", { required: true })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="text"
                    placeholder="Enter Title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Description
                  </label>
                  <input
                    {...register("description", { required: true })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="text"
                    placeholder="Enter Description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Location</label>
                  <input
                    {...register("location", { required: true })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="text"
                    placeholder="Enter Location"
                  />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium">
                    Get Price (₹)
                  </label>
                  <input
                    {...register("get_price", {
                      required: true,
                      pattern: /^\d+$/,
                    })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="number"
                    placeholder="Enter Get Price"
                  />
                </div> */}
                <div>
                  <label className="block text-sm font-medium">
                    Price (₹) per month
                  </label>
                  <input
                    {...register("total_price", {
                      required: true,
                      pattern: /^\d+$/,
                    })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="number"
                    placeholder="Enter Total Price"
                  />
                </div>
                {/* <div>
                  <label className="block text-sm font-medium">
                    Minimum Investment
                  </label>
                  <input
                    {...register("min_invest", {
                      required: true,
                      pattern: /^\d+$/,
                    })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="number"
                    placeholder="Enter Minimum Investment"
                  />
                </div> */}
                {/* <div>
                  <label className="block text-sm font-medium">
                    Maturity Date
                  </label>
                  <input
                    {...register("maturity", { required: true })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="date"
                  />
                </div> */}
                {/* <div>
                  <label className="block text-sm font-medium">
                    Security Type
                  </label>
                  <input
                    {...register("security_type", { required: true })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="text"
                    placeholder="Enter Security Type"
                  />
                </div> */}
                {/* <div>
                  <label className="block text-sm font-medium">
                    Investment Multiple
                  </label>
                  <input
                    {...register("multiple_invest", {
                      required: true,
                      pattern: /^-?\d+(\.\d+)?$/,
                    })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="text"
                    placeholder="e.g., 1.5"
                  />
                </div> */}
                <div>
                  <label className="block text-sm font-medium">Amenities</label>
                  <input
                    {...register("tags", { required: true })}
                    className="form-input border px-2 py-2 rounded-md"
                    type="text"
                    placeholder="comma separated"
                  />
                  <p className="text-xs text-gray-500">
                    Add one or more Amenities, separated by commas.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={_id ? DeleteInvestment : handleClose}
                  className="secondary-button"
                >
                  {_id ? "Delete" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className={`lightGreen-button ${
                    isProfileUploading || isLoading
                      ? "opacity-50 cursor-wait"
                      : ""
                  }`}
                  disabled={isProfileUploading}
                >
                  {_id ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default InvestmentPopUp;
