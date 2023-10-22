import React from "react";
import { Typography } from "@material-tailwind/react";
import {
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";



export function Logo() {
    return (
        <div className="flex items-center space-x-2">
            <CubeTransparentIcon className="h-7 w-7" />
            <Typography variant="h5" color="blue-gray">
                Featura
            </Typography>
        </div>
    );
}