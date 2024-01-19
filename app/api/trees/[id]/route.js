import { NextResponse } from "next/server";
import TreesModel from "@/models/treesModel";
import connectDB from "@/config/connectDb";

//    @desc:  Get tree by id
//    @route:  GET /api/trees/:id
//    @access: Public

export async function GET(request, { params }) {
   try {
      const { id } = params;
      await connectDB();
      const response = await TreesModel.findById(id);
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Update tree by id
//    @route:  PUT /api/trees/:id
//    @access: Public

export async function PUT(request, { params }) {
   try {
      const { id } = params;
      const req = await request.json();
      await connectDB();
      const response = await TreesModel.findByIdAndUpdate(id, req, {
         new: true,
         runValidators: true,
      });
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}

//    @desc:   Delete tree by id
//    @route:  DELETE /api/trees/:id
//    @access: Public

export async function DELETE(request, { params }) {
   try {
      const { id } = params;
      await connectDB();
      const response = await TreesModel.findByIdAndDelete(id);
      return NextResponse.json(response, { status: 200 });
   } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
   }
}
