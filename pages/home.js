import React from 'react';
import NavBar from '../components/NavBar';
import LoginRequired from '../components/LoginRequired';
import style from '../styles/home.module.css';
import ImageSlider from '../components/ImageSlider';
import ExpandingCard from '../components/ExpandingCard';
import CardSlider from '../components/CardSlider';

export default function Disney() {
  return (
    <LoginRequired>
      <NavBar />
      <div className={style.background} />
      <main className={style.main}>
        <ImageSlider />

        <div className={style.franchiseRow}>

          <ExpandingCard
            image="/images/viewers-disney.png"
            alt="disney logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-pixar.png"
            alt="pixar logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-marvel.png"
            alt="marvel logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-starwars.png"
            alt="star wars logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-national.png"
            alt="nat geo logo"
            initialBorder
          />

        </div>

        <CardSlider>
          <ExpandingCard
            image="/images/viewers-disney.png"
            alt="disney logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-pixar.png"
            alt="pixar logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-marvel.png"
            alt="marvel logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-starwars.png"
            alt="star wars logo"
            initialBorder
          />
          <ExpandingCard
            image="/images/viewers-national.png"
            alt="nat geo logo"
            initialBorder
          />

        </CardSlider>

      </main>

    </LoginRequired>
  );
}
