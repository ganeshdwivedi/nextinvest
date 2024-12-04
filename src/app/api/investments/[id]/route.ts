import dbConnect from "@/helper/dbConnet";
import InvestModel from "@/model/InvestModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request:NextRequest,context:any) {
  await dbConnect();
 const { id: slug } = await context.params;
  try {
    await InvestModel.findByIdAndDelete(slug);
    return NextResponse.json(
      {
        message: "Invest Card Deleted successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}