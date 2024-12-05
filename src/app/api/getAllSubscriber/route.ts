import dbConnect from "@/helper/dbConnet";
import { getDataFromToken } from "@/helper/getDataFromToken";
import Subscriber from "@/model/subscriberModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function GET(request:NextRequest){
     try {
       const loggedInUserEmail = await getDataFromToken(request);
       if (!loggedInUserEmail) {
         return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
       }
       const allSubscribers = await Subscriber.find().select(
         "-createdAt -updatedAt -__v"
       );
       if (!allSubscribers.length) {
         return NextResponse.json(
           { message: "No subscribers found" },
           { status: 404 }
         );
       }
       return NextResponse.json(
         {
           message: "Subscribers retrieved successfully",
           data: allSubscribers,
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