import type { NextPage } from 'next'
import Image from 'next/image'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="bg">
      <div className=" col-lg-12 col-md-10 col-sm-10 ">
        <div className="card border-0 rounded-lg  mx-auto container__Image  " >


          <Image
            src="/movie.png"
            alt="Picture of the error"
            width={500}
            height={500}
          />
          <div className="card-body mx-auto ">
            <Link href="/moives?page=1">
              <a type="button "
                className="btn btn-sm btn-warning text-white d-flex justify-content-between"> <p className="pt-3">watch Movies</p>            <Image
                  src="/Popcorns-pana.png"
                  alt="Picture of the error"
                  width={50}
                  height={50}
                /></a>

            </Link>

          </div>
        </div>
      </div>
    </div >
  )


}

export default Home
