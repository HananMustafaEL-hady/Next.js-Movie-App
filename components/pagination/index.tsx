import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from './button'
export const Pagination = () => {
    const router = useRouter()
    const initialPage: string = router.query?.page as string
    const [pageIndex, setPageIndex] = useState<number>(+initialPage || 1);

    useEffect(() => {
        router.replace(
            {
                query: {
                    page: pageIndex
                },
            },
        );
    }, [pageIndex])
    function handleIncrement() {
        setPageIndex(pageIndex + 1);
    }
    function handleDecrement() {
        setPageIndex(pageIndex - 1);
    }
    return (
        <ul className="pagination__movies mt-4">
            <Button label="Previous" handleOnClick={handleDecrement} pageIndex={pageIndex} stopValue={1} />
            <Button label="Next" handleOnClick={handleIncrement} pageIndex={pageIndex} stopValue={500} />
        </ul>
    )
}
