'use client'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md';

const page = () => {
  const [AllSubscribers, setAllSubscribers] = useState<any[]>([]);
  const getAllSubscribers = async () => {
    try {
      const response = await axios.get("/api/getAllSubscriber");
      setAllSubscribers(response.data.data || []);
    } catch (error) {
      setAllSubscribers([]);
      console.log(error, "error in getallInvetmnets");
    }
  };
  useEffect(() => {
    getAllSubscribers();
  }, []);
  return (
    <div className="px-20 py-24">
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className='font-medium text-lg'>Email</TableColumn>
          <TableColumn className='font-medium text-lg'>isAcive</TableColumn>
          <TableColumn className='font-medium text-lg'>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {AllSubscribers?.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell className='font-regular'>{item.email}</TableCell>
              <TableCell className='font-regular'>
                {item.deletedAt !== null ? "Active" : "InAcive"}
              </TableCell>
              <TableCell className='font-regular'>
                <MdOutlineDeleteOutline className="bg-red-500 rounded-full text-white w-3 h-3 text-center" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default page