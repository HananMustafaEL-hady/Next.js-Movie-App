import React from 'react'
import { useRouter } from 'next/dist/client/router'

import type { NextPage } from 'next'


const moive: NextPage = () => {
    const router=useRouter()
    const id= router.query.moiveID
    return (
        <div>
            moive details {id}
        </div>
    )
}

export default moive
