import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/writeClient";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { postId, author, message } = body;

    if (!postId || !author || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const comment = await writeClient.create({
      _type: "comment",
      post: {
        _type: "reference",
        _ref: postId,
      },
      author: author.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, id: comment._id }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save comment" },
      { status: 500 }
    );
  }
}