import React from 'react';
import styles from './Card.module.css';
import peach from '../../images/peach.png';
import title from '../../images/title.png';
import mario from '../../images/mario.png';
import mapicon from '../../images/mapicon.png';
import 'animate.css';

export default function Card() {
  const params = new URLSearchParams(window.location.search);
  const para = params.get('para');
  const animate = (className, animation) =>
    `animate__animated animate__${animation} ${className}`;
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={animate(styles.title, 'rotateIn')}>
          <img src={title} alt='Party' />
        </div>
        {para && (
          <div className={animate(styles.fonts, 'fadeInDown')}>
            <h2>Para:</h2>
            <h1>{para}</h1>
          </div>
        )}
        <div className={animate(styles.fonts, 'fadeInDown')}>
          <h2>Te invita:</h2>
          <h1>Camila Avelar</h1>
        </div>

        <table className={animate('', 'fadeInDown')}>
          <tbody>
            <tr>
              <td>Fecha:</td>
              &nbsp;
              <td>Sábado 22 de Abril 2023</td>
            </tr>
            <tr>
              <td>Hora:</td>
              &nbsp;
              <td>3:00 pm</td>
            </tr>
            <tr>
              <td>Lugar:</td>
              &nbsp;
              <td>
                Burger King Apopa
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.google.com/maps/place/Burger+King+%E2%80%A2+PeriPlaza+Apopa/@13.7907524,-89.1776955,17z/data=!4m10!1m2!2m1!1sburker+king+apopa!3m6!1s0x8f633bdeaeda14e1:0xbd41bcd7dfc0935f!8m2!3d13.7918041!4d-89.1750303!15sChFidXJrZXIga2luZyBhcG9wYSIDiAEBWhMiEWJ1cmtlciBraW5nIGFwb3BhkgEKcmVzdGF1cmFudOABAA!16s%2Fg%2F11c1q9411y'
                >
                  <img
                    className={styles.mapicon}
                    src={mapicon}
                    alt='map icon'
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.characters}>
        <img
          className={animate(styles.character, 'bounceInUp')}
          src={mario}
          alt='Mario'
        />
        <img
          className={animate(styles.character, 'bounceInUp')}
          src={peach}
          alt='Princess Peach'
        />
      </div>
    </div>
  );
}
