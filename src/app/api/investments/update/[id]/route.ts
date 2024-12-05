import dbConnect from "@/helper/dbConnet";
import { getDataFromToken } from "@/helper/getDataFromToken";
import InvestModel from "@/model/InvestModel";
import { NextRequest, NextResponse } from "next/server";

dbConnect();
export async function PUT(request: NextRequest, context: any) {

  const { id: slug } = await context.params;
  const InvestData = await request.json();

  const logedInUSerEmail = await getDataFromToken(request);
  if (!logedInUSerEmail) {
    return NextResponse.json(
      {
        mesaaage: "Unauthorized",
      },
      { status: 401 }
    );
  }

  try {
    const Invest = await InvestModel.findByIdAndUpdate(
      slug,
      { $set: InvestData },
      { new: true, runValidators: true }
    );
    if (!Invest) {
      return NextResponse.json(
        { message: "No Investments found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Investments retrieved successfully",
        data: Invest,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error retrieving Investments" },
      { status: 500 }
    );
  }
}
