import React, { useMemo, useEffect } from 'react';
import { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BadRequestError, NotFoundError } from "../components/Error/customError"
interface Props {
    error: AxiosError
}
export const Toast: React.FC<Props> = ({ error }) => {
    const status = error?.response?.status


    const errorObj = useMemo(() => {

        let Error;
        switch (status) {
            case 404: return Error = new NotFoundError(error)
            case 400: return Error = new BadRequestError(error)

        }



    }, [error instanceof Error])

    useEffect(() => { toast.error(`${errorObj?.message} `) }, [errorObj])

    return (
        <ToastContainer />
    );
}