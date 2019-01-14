import * as React from 'react';
import { MediaLinks } from '../utils/data';

import Clock from './Clock';
export default class Main extends React.Component<any, mainState> {

  render() {
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <figure className="image is-squared">
                            <img src="assets/portada_circumstancial.png" alt="Portada del Single" />
                            <figcaption style={{paddingTop: '0.5rem'}}><i style={{fontFamily: 'monospace', fontSize: '11px'}} className="has-text-grey">Disseny: Clàudia Kidai, Fotografia: Clàudia Kidai / Guillem Colomer</i></figcaption>
                        </figure>
                    </div>
                    <div className="column is-6 is-offset-1">
                        <h1 className="title is-2">
                          El primer single d'Urpa, Circumstancial
                        </h1>
                        <h2 className="subtitle is-4 has-text-grey">
                          estarà disponible per escoltar aquí en:
                        </h2>
                        <Clock /> 
                        <div>
                        <div style={{position: 'fixed', bottom: '1.4rem', left: '1.4rem'}} className="field is-grouped is-grouped-multiline">
                          <h2 className="subtitle is-6" style={{paddingTop: '0.4rem', fontFamily: 'monospace'}}>
                            Segueix-nos a:
                          </h2>
                          {MediaLinks.map(el => {
                            return (
                            <a style={{margin: '0rem 0.5rem'}} key={`${el.icon}-medialink`} href={el.link} target="_blank" className="icon is-medium media-link">
                              <i className={`${el.icon}`}></i>
                            </a>
                            )
                          })}
                      </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>)
  }
}