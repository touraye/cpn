"use server";

import buyToken from "./buyToken";

export const clientAction = async (formData: FormData) => {
    const { data, error } = await buyToken(formData);    
    console.log('data: ',data);
    

        if (error) {
            console.log(error)
        } else {
            console.log('Token purchased successfully');            
        }
    }