import userModel from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import generateToken from "@/helper/GenerateToken";
import dbConnect from "@/helper/dbConnet";

dbConnect();
export async function POST(request: NextRequest){
  const { email, password } = await request.json();
  try {
    const ExistUser = await userModel.findOne({ email: email });
    if (!ExistUser) {
      return NextResponse.json(
        { message: "User Doesn't Exist" },
        { status: 400 }
      );
    }
    const isPasswordMatched = bcrypt.compareSync(password, ExistUser.password);

    if (!isPasswordMatched) {
      return NextResponse.json(
        { message: "Password Doesn't Match" },
        { status: 400 }
      );
    }

    // remove password from user data before sending to response
    const {password:ps,...AbstractUser} = ExistUser._doc;
    const token = await generateToken({ email, role: "admin" });
     const response = NextResponse.json({
       message: "Login successful",
       data:AbstractUser,
       success: true,
     },{status: 201});
     response.cookies.set("token", token, {
       httpOnly: true,
     });
     return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

