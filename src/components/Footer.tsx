
import React from "react";
import { MediaLinks } from '../utils/data';

export default () => {
    return (
        <div style={{position: 'absolute', bottom: '20', left: '40'}} className="field is-grouped is-grouped-multiline">
            <h2 className="subtitle is-6" style={{paddingTop: '0.4rem', fontFamily: 'monospace'}}>
                Segueix-nos a:
            </h2>
            {MediaLinks.map(el => {
                return (
                <a style={{margin: '0rem 0.5rem'}} key={`${el.icon}-medialink`} href={el.link} target="_blank" className="icon is-medium media-link">
                    <i className={`${el.icon}`}></i>
                </a>)
            })}
        </div>
    )
}