import dbConnect from "@/helper/dbConnet";
import { getDataFromToken } from "@/helper/getDataFromToken";
import userModel from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const userEmail = await getDataFromToken(request);
    if (!userEmail) {
      return NextResponse.json(
        {
          mesaaage: "Unauthorized",
        },
        { status: 401 }
      );
    }
    const user = await userModel
      .findOne({ email: userEmail })
      .select("-password");
    return NextResponse.json({
      mesaaage: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
