import React from 'react';
import {OptionType} from "../Application/State/OptionState";

const useGetOne = (url: string, id: any) => {
    const fetchData =async () => {
        try {
            const response = await fetch( url + id )

            return (await response.json())
        }catch (err){
            return err
        }
    }
    fetchData()
};

export default useGetOne;