import { NextResponse } from "next/server";
import GoodsModel from "@/models/goodsModel";
import connectDB from "@/config/connectDb";

//    @desc:   Get  good by id
//    @route:  GET /api/goods/:id
//    @access: Public

export async function GET(request, { params }) {
   try {
      const { id } = params;
      await connectDB();
      const response = await GoodsModel.findById(id);
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Update good by id
//    @route:  PUT /api/goods/:id
//    @access: Public

export async function PUT(request, { params }) {
   try {
      const { id } = params;
      const req = await request.json();
      await connectDB();
      const response = await GoodsModel.findByIdAndUpdate(id, req, {
         new: true,
         runValidators: true,
      });
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Delete good by id
//    @route:  DELETE /api/goods/:id
//    @access: Public

export async function DELETE(request, { params }) {
   try {
      const { id } = params;
      await connectDB();
      const response = await GoodsModel.findByIdAndDelete(id);
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}
