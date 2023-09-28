import React from 'react'
import './_banner.scss'

const Banner: React.FC = () => {
  return (
    <section className='banner'>
      <div className='banner__container'>
        <div className='banner__container__left'>
          <div className='banner__container__left__heading'>
            <h1>{`Custom printing that kicks ass`}</h1>
          </div>
          <div className='banner__container__left__desc'>
            <p>{`Easy online ordering, 4 day turnaround and`}</p>
            <p>{` free online proofs. Free shipping.`}</p>
          </div>
          <div className='banner__container__left__buttons'>
            <div className='banner__container__left__buttons__shop'>
              <button>{`Shop Now`}</button>
            </div>
            <div className='banner__container__left__buttons__sample'>
              <button>{`Get Samples`}</button>
            </div>
          </div>
        </div>
        <div className='banner__container__right'>
          <img src='https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_auto/re-store-shared/homepage-main-image.png' alt='banner_image' />
        </div>
      </div>
    </section>
  )
}

export default Banner