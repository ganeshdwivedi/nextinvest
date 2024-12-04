import dbConnect from "@/helper/dbConnet";
import { getDataFromToken } from "@/helper/getDataFromToken";
import InvestModel from "@/model/InvestModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
      await dbConnect();

    const InvestData = await request.json();
     try {
       const logedInUSerEmail = await getDataFromToken(request);
       if (!logedInUSerEmail) {
         return NextResponse.json(
           {
             mesaaage: "Unauthorized",
           },
           { status: 401 }
         );
       }

       const invest = new InvestModel(InvestData);
       await invest.save();
       return NextResponse.json(
         {
           message: "Investment card created successfully",
           data: invest,
         },
         { status: 201 }
       );
     } catch (error: any) {
       return NextResponse.json({ error: error.message }, { status: 500 });
     }
}