import dbConnect from "@/helper/dbConnet";
import InvestModel from "@/model/InvestModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function GET(request: NextRequest) {
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
