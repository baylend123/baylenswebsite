"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Comment = {
    _id: string;
    author: string;
    message: string;
    submittedAt?: string;
};

export const CommentsSection = ({
    postId,
    comments,
}: {
    postId: string;
    comments: Comment[];
}) => {
    const router = useRouter();
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postId,
                    author,
                    message,
                }),
            });

            if (!res.ok) throw new Error("Failed");

            setAuthor("");
            setMessage("");
            setStatus("success");
            router.refresh();
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <section id="comments" className="mt-16 rounded-2xl border border-[#D7B980] bg-[#FFF9ED] p-6">
            <h2 className="mb-6 text-2xl font-bold text-[#200B04]">Comments</h2>

            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-[#6B4D29]">No comments yet.</p>
                ) : (
                    comments.map((comment) => (
                        <article
                            key={comment._id}
                            className="rounded-xl border border-[#E6D2A5] bg-[#FCF6E8] p-4"
                        >
                            <p className="font-semibold text-[#200B04]">{comment.author}</p>
                            <p className="mt-2 whitespace-pre-wrap text-[#3B2A1A]">
                                {comment.message}
                            </p>
                        </article>
                    ))
                )}
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <h3 className="text-xl font-semibold text-[#6B4D29]">
                    Leave a comment
                </h3>

                <input
                    type="text"
                    placeholder="Your name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full rounded-lg border border-[#D7B980] bg-white px-4 py-3 outline-none"
                    required
                />

                <textarea
                    placeholder="Your comment"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full rounded-lg border border-[#D7B980] bg-white px-4 py-3 outline-none"
                    required
                />

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="rounded-full bg-[#6B4D29] px-6 py-3 font-semibold text-[#FCF6DB] disabled:opacity-60"
                >
                    {status === "submitting" ? "Posting..." : "Post Comment"}
                </button>

                {status === "success" && (
                    <p className="text-sm text-green-700">
                        Comment posted successfully.
                    </p>
                )}

                {status === "error" && (
                    <p className="text-sm text-red-700">
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </section>
    );
}