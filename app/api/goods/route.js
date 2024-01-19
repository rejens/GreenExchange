import { NextResponse } from "next/server";
import GoodsModel from "@/models/goodsModel";
import connectDB from "@/config/connectDb";

//    @desc:   Get all goods
//    @route:  GET /api/goods
//    @access: Public

export async function GET() {
   try {
      await connectDB();
      const response = await GoodsModel.find({});
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Create a new good
//    @route:  POST /api/goods
//    @access: Public

export async function POST(request, { params }) {
   try {
      await connectDB();
      const req = await request.json();
      const response = await GoodsModel.create(req);
      return NextResponse.json(response, { status: 201 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}
