import { NextResponse } from "next/server";
import TreesModel from "@/models/treesModel";
import connectDB from "@/config/connectDb";

//    @desc:   Get all trees
//    @route:  GET /api/trees
//    @access: Public

export async function GET() {
   try {
      await connectDB();
      const response = await TreesModel.find({});
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Create a new tree
//    @route:  POST /api/trees
//    @access: Public

export async function POST(request, { params }) {
   try {
      await connectDB();
      const req = await request.json();
      const response = await TreesModel.create(req);
      return NextResponse.json(response, { status: 201 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}
