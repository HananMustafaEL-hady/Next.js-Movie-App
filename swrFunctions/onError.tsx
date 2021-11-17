import { ErrorWithStatus } from '../models/error'
import Router from 'next/router'

const onError = (error: ErrorWithStatus, key: string) => {
    // console.log("key", key)
    // console.log("error", error)
    // console.log("error.status", error.status)
    // console.log("error.info", error.info)
    // console.log("message", error.message)
    // console.log("retryCount", { retryCount })
    switch (error.status) {
        case 34:
            Router.push('/pageNotFound')

        case 7:
        case 422:
            return

    }

    // if (retryCount >= 3) return
    // setTimeout(() => revalidate({ retryCount }), 5000)

}
export default onError