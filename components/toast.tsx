import React, { useMemo, useEffect } from 'react';
import { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    error: AxiosError
}
export const Toast: React.FC<Props> = ({ error }) => {
    const status = error?.response?.status
    const errorObj = useMemo(() => {
        switch (status) {
            case 404:
                return {
                    causeError: error?.response?.data.status_message,
                }
            case 422:
                return {
                    causeError: error?.response?.data.errors,
                }
            default: return {
                causeError: error?.response?.data.error,
            }
        }

    }, [status])


    useEffect(() => { toast.error(`${errorObj.causeError} ${status} `) }, [errorObj])

    return (
        <ToastContainer />
    );
}