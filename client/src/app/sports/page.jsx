"use client";

import SportSelect from "@/components/SportSelect";
import { CLASSMATE_API, sports } from "@/lib/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Sports = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [classmanteAPI, setClassmanteAPI] = useState([])
    const [value, setValue] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                setClassmanteAPI('')
                const response = await axios.get(CLASSMATE_API + value.slice(1));
                setClassmanteAPI(response.data[0].description);
            } catch (error) {
                if (value != "") {
                    setClassmanteAPI('No data from classmate for this sport')
                }
            }
            setIsLoading(false);
        };

        fetchData()

    }, [value])

    return (
        <div>
            <div className="bg-blue-600 flex py-6 justify-center items-center ">
                {!isLoading && classmanteAPI && <div className="bg-blue-100 py-4 px-4 rounded-md"><span className="font-bold">Game description:</span> {classmanteAPI}</div>}
            </div>
            <SportSelect sports={sports} value={value} setValue={setValue} />
        </div>
    );
};

export default Sports;
