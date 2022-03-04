import React from 'react';
import style from '../styles/login.module.css';
import NavBar from '../components/NavBar';

export default function Login() {
  return (
    <div>

      <NavBar />

      <section
        className={style.topContainer}
      >

        <div
          className={style.callToAction}
        >

          <img
            src="/images/cta-logo-one.svg"
            alt="logos"
            className={style.ctaTopImage}
          />

          <a href="w" className={style.blueButton}>
            <span>GET THE DISNEY BUNDLE</span>
          </a>

          <p className={style.subText}>
            Stream now.
            {' '}
            <span className={style.underlinedSubText}>Terms Apply</span>
          </p>

          <img
            src="/images/cta-logo-two.png"
            alt="logos"
            className={style.ctaBottomImage}
          />
          <a href="w" className={style.signUpLink}>Sign up for Disney+ only</a>

          <button className={style.downArrow} type="button">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <rect width="48" height="48" fill="none" />
              <path d="M36.63,18.37a1.37,1.37,0,0,1,2.15.37,1.7,1.7,0,0,1-.3,2.06L25.4,32.64a1.37,1.37,0,0,1-1.85,0l-13-11.84a1.71,1.71,0,0,1-.29-2.06,1.37,1.37,0,0,1,2.15-.37l12.11,11ZM24.25,31.42a.38.38,0,0,1,.46,0l-.23-.21ZM11.71,19.55s0,.06,0,0Zm25.61,0h0Z" />
            </svg>
          </button>
        </div>

      </section>
      <section className={style.sbsImageAndText}>
        <img className={style.sideImage} alt="4 Devices showcasing the Disney+ product on TV, Mobile, Laptop, and Tablet" data-ll-status="loaded" src="//cnbl-cdn.bamgrid.com/assets/dbde08b330b986219b5b82885a0312658e59d03541d3982b59d4b6fa07040060/original" />
        <div className={style.textContainer}>
          <h2>Watch the way you want</h2>
          <ul>
            <li>
              <p>
                Host virtual movie nights with GroupWatch.
                Pause, rewind and react with up to six friends.
                Subscription is required to join GroupWatch.

              </p>
            </li>
            <li>
              <p>Download any movie or series and watch on-the-go.</p>
            </li>
            <li>
              <p>
                Enjoy an ever-growing range of titles in stunning
                4K UHD and Dolby Atmos sound on compatible devices.

              </p>
            </li>
            <li>
              <p>Stream on up to four devices at the same time.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className={style.movietiles} />
      <section className={style.sbsImageAndText} />
      <section className={style.devices} />
      <section className={style.faq} />
    </div>
  );
}
