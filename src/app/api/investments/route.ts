import dbConnect from "@/helper/dbConnet";
import { getDataFromToken } from "@/helper/getDataFromToken";
import InvestModel from "@/model/InvestModel";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();
   try {
     const InvestMents = await InvestModel.find().select('-__v');
     if (!InvestMents.length) {
       return NextResponse.json(
         { message: "No Invetments found" },
         { status: 404 }
       );
     }
     return NextResponse.json(
       {
         message: "Investments retrieved successfully",
         data: InvestMents,
       },
       { status: 200 }
     );
   } catch (error) {
     return NextResponse.json(
       { message: "Error retrieving subscribers" },
       { status: 500 }
     );
   }
}
