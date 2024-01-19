import UserModel from "@/models/userModel";
import { NextResponse } from "next/server";
import connectDB from "@/config/connectDb";

//    @desc:   Get all users
//    @route:  GET /api/users
//    @access: Public

export async function GET(request, { params }) {
   try {
      const { email } = params;
      await connectDB();
      let response;
      if (!email) {
         response = await UserModel.find();
      } else {
         response = await UserModel.find({ email });
      }
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Create a new user
//    @route:  POST /api/users
//    @access: Public

export async function POST(request, { params }) {
   try {
      await connectDB();
      const req = await request.json();
      const response = await UserModel.create(req);
      return NextResponse.json(response, { status: 201 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}
