import userModel from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import generateToken from "@/helper/GenerateToken";
import dbConnect from "@/helper/dbConnet";

const saltRound = process.env.SALT_ROUND || 16;
export async function POST(request: NextRequest) {
  await dbConnect();
  const { email, password, name, profile } = await request.json();
  console.log(email, password, name, profile, "body");
  try {
    // chekcing if user already exists with same email
    const ExistUser = await userModel.findOne({ email: email });

    // if exists throw error
    if (ExistUser) {
      return NextResponse.json(
        { message: "User Doesn't Exist" },
        { status: 400 }
      );
    }

    // encrypt the password
    const hashedPassword = await bcrypt.hashSync(password, 16);

    const user = new userModel({
      email,
      password: hashedPassword,
      name,
      profile,
    });
    await user.save();
    // remove password from user data before sending to response
    const { password: ps, ...AbstractUser } = user._doc;
    // generate token
    const token = await generateToken({ email, role: "admin" });
    const response = NextResponse.json(
      {
        message: "User Registered Successfully",
        user: AbstractUser,
        success: true,
      },
      { status: 201 }
    );
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
