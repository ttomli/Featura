import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography
} from "@material-tailwind/react";
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

export function BlogCard({ title, description }) {
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
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {title || "Default Title"} {/* Updated to display the title prop */}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {description || "Default Description"} {/* Updated to display the description prop */}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <button className="focus:outline-none">
                        <ArrowUpIcon className="h-6 w-6 text-gray-500 hover:text-blue-500" />
                    </button>
                    <button className="focus:outline-none">
                        <ArrowDownIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
                    </button>
                </div>
                <Typography className="font-normal">January 10</Typography>
            </CardFooter>
        </Card>
    );
}

