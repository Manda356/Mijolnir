import React from 'react';

const useEditData = async (url: string, id: any, data: any) => {
    try {
        const response = await fetch( url + id , {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        const res = await response.json()
    }catch (err){
        console.log(err)
        return err
    }
};

export default useEditData;