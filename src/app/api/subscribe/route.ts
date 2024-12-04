// /pages/api/subscriber.ts
import dbConnect from "@/helper/dbConnet";
import { sendEmail } from "@/helper/sendMail";
import Subscriber from "@/model/subscriberModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();

  // Extract the email for POST
  const { email } = await request.json(); // Correct way to get data from the request body
  try {
    // Check if the subscriber already exists
    const isSubscriberExist = await Subscriber.findOne({ email });
    if (isSubscriberExist) {
      return NextResponse.json(
        { message: "You have already subscribed" },
        { status: 400 }
      );
    }

    // Create new subscriber
    const subscribe = new Subscriber({ email });
    await subscribe.save();
    await sendEmail(email);
    return NextResponse.json(
      {
        message: "You have successfully subscribed to our newsletter",
        data: subscribe,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
