import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Input,
    Textarea,
} from "@material-tailwind/react";

export function MessageDialog({ onClose }) {
    const [open, setOpen] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleOpen = () => setOpen(!open);

    const handleAddCard = () => {
        if (title && description) {
            onClose({ title, description });
        }
    };

    const handleImageChange = (e) => {
        //setImg(e.target.files[0]);
    };

    return (
        <Dialog open={open} size="m" handler={() => setOpen(false)}>
            <div className="flex items-center justify-between">
                <DialogHeader className="flex flex-col items-start">
                    {" "}
                    <Typography className="mb-1" variant="h4">
                        What feature would you like to see?{" "}
                    </Typography>
                </DialogHeader>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5"
                    onClick={handleOpen}
                >
                    <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <DialogBody>
                <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                    Write the message and then click button.
                </Typography>
                <div className="grid gap-6">
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Feature
                    </Typography>
                    <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Image
                    </Typography>
                    <Input type="file" onChange={handleImageChange} />  {/* New input for image */}
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Content
                    </Typography>
                    <Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
                <Button variant="text" color="gray" onClick={handleOpen}>
                    Cancel
                </Button>
                <Button variant="gradient" color="gray" onClick={handleAddCard}>
                    Add Card
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
