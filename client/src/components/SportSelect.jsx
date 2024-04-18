"use client"

import React, { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { API_URL } from "@/lib/constants"
import SearchableTable from "./SearchableTable"

const SportSelect = ({ sports, value, setValue }) => {
    const [open, setOpen] = React.useState(false)
    const { toast } = useToast()
    const [email, setEmail] = useState("");
    const [showSendButton, setShowSendButton] = useState(false);

    const columns = [
        { key: 'rank', label: 'Rank' },
        { key: 'name', label: 'Name' },
        { key: 'change', label: 'Change' },
        { key: 'nationality', label: 'nationality' },
    ];

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        const url = API_URL + value;
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    };

    const sendData = async () => {
        const url = API_URL + '/queue';
        const payload = {
            emailid: email,
            sports: data
        };

        try {
            const response = await axios.post(url, payload)
                .then(function (response) {
                    toast({
                        title: "Data Sent",
                        description: "Your data has been sent successfully.",
                        action: (
                            <ToastAction altText="Goto schedule to undo">Close</ToastAction>
                        ),
                    });
                })
                .catch(function (error) {
                    console.log(error);
                    toast({
                        title: "Error",
                        description: "There was an error sending your data.",
                        action: (
                            <ToastAction altText="Goto schedule to undo">Close</ToastAction>
                        ),
                    });
                });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="bg-slate-500 items-center justify-center">
            <div className="flex bg-blue-600 justify-center items-center space-x-5 py-4">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[300px] justify-between"
                        >
                            {value
                                ? sports.find((sports) => sports.value === value)?.label
                                : "Select sports..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0">
                        <Command>
                            <CommandInput placeholder="Search sports..." />
                            <CommandEmpty>No sports found.</CommandEmpty>
                            <CommandGroup>
                                {sports.map((sports) => (
                                    <CommandItem
                                        key={sports.value}
                                        value={sports.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === sports.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {sports.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
                <Button
                    variant="outline"
                    onClick={() => {
                        fetchData(value);
                        toast({
                            title: "Results fetching...",
                            description: `Results for ${value.slice(1)} is being fetched`,
                            action: (
                                <ToastAction altText="Goto schedule to undo">Close</ToastAction>
                            ),
                        });
                    }}
                >Search
                </Button>
                <Button
                    variant="outline"
                    onClick={() => {
                        setShowSendButton(true);
                    }}
                >Send Data
                </Button>
                {showSendButton && (
                    <div className="flex items-center space-x-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Button
                            variant="outline"
                            onClick={() => {
                                sendData();
                                setShowSendButton(false);
                            }}
                        >
                            Send
                        </Button>
                    </div>
                )}
            </div>
            {value && !isLoading && data && <SearchableTable data={data} columns={columns} />}
        </div>
    )
}

export default SportSelect;