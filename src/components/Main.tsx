import * as React from 'react';
import Footer from "./Footer";
import Clock from './Clock';
export default class Main extends React.Component<any, any> {

  state = {
    dateReached: false
  }

  dateReached = () => {
    if(!this.state.dateReached) this.setState({dateReached: true});
  } 

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
                        {!this.state.dateReached ? 
                          <React.Fragment>
                            <h1 className="title is-2">
                              El primer single d'URPA, Circumstancial
                            </h1>
                            <h2 style={{paddingTop: '0.7rem'}} className="subtitle is-4 has-text-grey">
                            estarà disponible per escoltar aquí en:
                            </h2>
                            <Clock dateReached={() => this.dateReached()}/> 
                          </React.Fragment>
                        : <React.Fragment>
                            <h1 className="title is-2">
                              Escolta aquí el primer single d'URPA, Circumstancial
                            </h1>
                            <iframe style={{border: "0", width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/track=1628687982/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://urpaurpaurpa.bandcamp.com/track/circumstancial">Circumstancial by URPA</a></iframe>
                        </React.Fragment>}
                        <div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </section>)
  }
}