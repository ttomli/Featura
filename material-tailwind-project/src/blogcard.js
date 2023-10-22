import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export function BlogCard({ title, content }) {
    const [upvotes, setUpvotes] = useState(0);  // State to track upvotes
    const [downvotes, setDownvotes] = useState(0);  // State to track downvotes

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);  // Increment upvotes count
    };

    const handleDownvote = () => {
        setDownvotes(downvotes + 1);  // Increment downvotes count
    };


    //console.log(imagePath); // Check the received image path

    // const baseUrl = 'http://127.0.0.1:8000/'; // Replace with the actual base URL of your server
    // const imageUrl = baseUrl + imagePath; // Combining the base URL with the received image path


    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                />
                {/* <img
                    src={imageUrl}
                    alt="Content related"
                /> */}
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {title || "Default Title"} {/* Updated to display the title prop */}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {content || "Default Description"} {/* Updated to display the description prop */}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button className="focus:outline-none" onClick={handleUpvote}>
                        <ArrowUpIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
                    </button>
                    <Typography className="font-normal">{upvotes}</Typography>  {/* Display upvotes count */}
                    <button className="focus:outline-none" onClick={handleDownvote}>
                        <ArrowDownIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
                    </button>
                    <Typography className="font-normal">{downvotes}</Typography>  {/* Display downvotes count */}
                </div>
            </CardFooter>
        </Card>
    );
}

