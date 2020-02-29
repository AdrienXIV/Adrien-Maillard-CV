import React from 'react';

export class Formation extends React.Component {

  render() {
    return (
      <div className="ui three column grid">
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Normandie Web School
              <div className="sub header">Petit-Quevilly, 76140</div>
              <div className="sub header">2019 - 2020</div>
            </h2>
            <h4 className="ui header">Bachelor Développeur Web & Mobile
            <div className="sub header">Certification Chef de Projet Digital</div>
            </h4>
            <h5 className="ui header">Projets
            </h5>
            <ol className="ui list">
              <li value="*">Projet de groupe pour la certification (en cours)</li>
              <ol>
                <li value="-"><u>Backend :</u> API Rest NodeJS</li>
                <li value="-"><u>Frontend :</u> React</li>
                <li value="-"><u>Mobile :</u> React Native</li>
                <li value="-"><u>Base de données :</u> MongoDB ou MySQL</li>
              </ol>
              <br></br>

              <div className="separateur"></div>
              <li value="*">Carte utilisant l'API d'OpenLayer</li>
              <ol>
                <li value="-"><u>Backend :</u> API Rest NodeJS</li>
                <li value="-"><u>Frontend :</u> HTML/CSS/JQuery</li>
                <li value="-"><u>Base de données :</u> MongoDB</li>
                <li value="-"><u>Docker :</u> backend + base de données</li>
                <li value="-"><a href="https://gitlab.com/AdrienXIV/nws-api-heroku" rel="noopener noreferrer" target="_blank"><i className="gitlab icon"></i><u>Backend :</u> https://gitlab.com/AdrienXIV</a></li>
                <li value="-"><a href="https://gitlab.com/AdrienXIV/nws-map" rel="noopener noreferrer" target="_blank"><i className="gitlab icon"></i><u>Frontend :</u> https://gitlab.com/AdrienXIV</a></li>
              </ol>
              <br></br>

              <div className="separateur"></div>
              <li value="*">Mini CMS</li>
              <ol>
                <li value="-"><u>Backend :</u> API Rest NodeJS</li>
                <li value="-"><u>Frontend :</u> React</li>
                <li value="-"><u><u>Base de données :</u></u> MongoDB</li>
                <li value="-"><u>Docker :</u> backend + base de données</li>
                <li value="-"><a href="https://github.com/AdrienXIV/nws-exam-11-02-2020" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/nws-exam-11-02-2020</a></li>
              </ol>
              <br></br>

              <div className="separateur"></div>
              <li value="*">Mini projet de groupe : AgriDrive</li>
              <ol>
                <li value="-"><u>Backend :</u> API Rest NodeJS</li>
                <li value="-"><u><u>Frontend :</u></u> WordPress, création Plugins/Widgets</li>
                <li value="-"><u>Base de données :</u> MongoDB</li>
                <li value="-"><a href="https://github.com/AdrienXIV/AgriDrive" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/AgriDrive</a></li>
              </ol>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Lycée La Châtaigneraie

            <div className="sub header">Le Mesnil-Esnard, 76240</div>
              <div className="sub header">2017 - 2019</div>
            </h2>
            <h4 className="ui header">Brevet Technicien Supérieur
              <div className="sub header">Systèmes Numériques Informatique & Réseau</div>
            </h4>
            <h5 className="ui header">Projets
            </h5>
            <ol className="ui list">
              <li value="*">Projet de groupe : gestion course VTT</li>
              <ol>
                <li value="-"><a href="https://github.com/AdrienXIV/Netduino-Xbee-Emission" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>Émetteur Xbee (Netduino, C#)</a></li>
                <li value="-"><a href="https://github.com/AdrienXIV/Netduino-Xbee-ServiceWeb" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>Récepteur Xbee (Netduino, C#)</a></li>
                <li value="-"><a href="https://github.com/AdrienXIV/Netduino-Lecture-RFID" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>Lecteur RFID (Netduino, C#)</a></li>
              </ol>
              <br></br>

              <div className="separateur"></div>
              <li value="*">Mini projet individuel : gestion chaîne de tri</li>
              <ol>
                <li value="-">Communication bus ASi (capteurs, vérins, lecteur codebarre, tapis roulant)</li>
                <li value="-">Interface WindowsForm C#</li>
                <li value="-"><a href="https://github.com/AdrienXIV/ChaineDeTri" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/ChaineDeTri</a></li>
              </ol>
              <br></br>

              <div className="separateur"></div>
              <li value="*">Exercices</li>
              <ol>
                <li value="-">Gestion citerne d'eau, tapis roulant industriel (Factory.IO)</li>
                <li value="-">Client/Serveur Linux</li>
                <li value="-">Client/Serveur Windows</li>
                <li value="-">Configuration Switch, DHCP</li>
              </ol>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Lycée Vallée du Cailly
              <div className="sub header">Déville-lès-Rouen, 76250</div>
              <div className="sub header">2012 - 2015</div>
            </h2>
            <h4 className="ui header">Baccalauréat Scientifique
              <div className="sub header">Spécialisation Sciences & Vie de la Terre</div>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}