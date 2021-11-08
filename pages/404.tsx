import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
const PageNotFound: NextPage = () => {
  return (

    <div className=" col-lg-12 col-md-10 col-sm-10">
        <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto container__Image" >
        <style jsx>{`
        .container__Image {
            width: 35rem;
        }
       .row{

       }
      `}</style>
             <Image
      src="/Error.png"
      alt="Picture of the error"
      width={500}
      height={500}
    />
            <div className="card-body mx-auto">
                <Link href="/">
                <a type="button" 
                className="btn btn-sm btn-warning text-white"> Back To Home </a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound
