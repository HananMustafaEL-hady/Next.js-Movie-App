import React from 'react'

interface Props {
    label: string,
    handleOnClick: Function,
    pageIndex: number,
    stopValue: number
}

export const Button: React.FC<Props> = ({ label, handleOnClick, pageIndex, stopValue }) => {


    return (
        <button className="page-item  btn btn-info btn__pag" onClick={() => handleOnClick()} disabled={pageIndex == stopValue ? true : false}>
            {label}
        </button>
    )
}
