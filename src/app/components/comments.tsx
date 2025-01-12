'use clients'

import {useState, useEffect} from "react";

const CommentSection = () => {
    const [comment, setComment] = useState ("");
    const [comments, setComments] = useState<string[]>([]);

    useEffect(() =>  {
        const storedComments = localStorage.getItem ('comments');
        if (storedComments) {
            try {
                const parseComments =JSON.parse(storedComments);
                setComments (parseComments);
                } catch (error) {
                    console.error ('Error parsing comments from local storage:', error);
                 }
        }
}, []);

useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
}, [comments]);


const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (comment.trim()) {
        setComments ([comment, ...comments]);
        setComment("");}
};

return (
    <div className="ma-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Comments Section</h2>

        <form onSubmit={handleSubmit} className="mb-4"></form>

        <div>
            <h3 className="text-x1 font-semibold mb-2"> Comments</h3>
            <div className="space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment, index) => 
                    (<div key={index} className="p-4 bg-gray-100 rounded-lg">
                        <p>{comment}</p>
                    </div>))) : (
                        <p>No comments yet. Be the first to comment1</p>
                    )}
        </div>

    </div>
    </div>
);
};



export default CommentSection;


