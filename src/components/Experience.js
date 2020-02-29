import React from 'react';

export class Experience extends React.Component {
  render() {
    return (
      <div className="ui three column grid">
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Webky
              <div className="sub header">Rouen, 76000</div>
              <div className="sub header">2020</div>
            </h2>
            <h4 className="ui header">Stage 4 mois</h4>
            <h5 className="ui header">Missions
            </h5>
            <ol class="ui list">
              <li value="*">Quiz</li>
              <ol>
                <li value="-"><u>Backend :</u> NodeJS</li>
                <li value="-"><u>Frontend :</u> React (Application Web Progressive)</li>
                <li value="-"><u>Base de données :</u> MySQL</li>
                <li value="-">WebSockets : Socket.io</li>
                <li value="-">Déploiement projet sous débian</li>
                <li value="-">CronJobs</li>
                <li value="-">VirtualHost, ProxyPass</li>
              </ol>
              <br></br>
              <p style={{ textAlign: 'justify' }}>L'administrateur contrôle le quiz de l'évènement qui s'affiche par un vidéo projecteur et sur les
              téléphones des personnes dans la salle.</p>
              <p style={{ textAlign: 'justify' }}>Les questions, les réponses et les infos du classement sont transmis par socket.io.</p>
              <br></br>

              <div className="separateur"></div>
              <li value="*">Gestion administrateur site internet (backoffice)</li>
              <ol>
                <li value="-"><u>Backend :</u> NodeJS</li>
                <li value="-"><u>Frontend :</u> moteur de template EJS</li>
                <li value="-"><u>Base de données :</u> MySQL</li>
              </ol>
              <br></br>
              <p style={{ textAlign: 'justify' }}>Faciliter la programmation d'évènements, d'invités et autres infos par le site internet pour
              les inscrire dans la base de données.</p>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              La DIRECCTE
              <div className="sub header">Rouen, 76000</div>
              <div className="sub header">2019</div>
            </h2>
            <h4 className="ui header">Stage 7 semaines</h4>
            <h5 className="ui header">Missions
            </h5>
            <ol class="ui list">
              <li value="*">Mise à jour site gestion de réservation des ressources (GRR)</li>
              <ol>
                <li value="-">Requêtes SQL</li>
                <li value="-">Modification PHP</li>
              </ol>
              <br></br>
              <li value="*">Mise en place serveur de déploiement Windows par amorçage PXE</li>
            </ol>
          </div>
        </div>

        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              ID Logistic
              <div className="sub header">Rouen, 76000</div>
              <div className="sub header">2019</div>
            </h2>
            <h4 className="ui header">2 mois</h4>
            <h5 className="ui header">Mission
            </h5>
            <ol class="ui list">
              <li value="*">Mettre des livres dans des cartons</li>
              <li value="*">Rangement de livres</li>
            </ol>
          </div>
        </div>

        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Elis
              <div className="sub header">Isneauville, 76000</div>
              <div className="sub header">2018</div>
            </h2>
            <h4 className="ui header">6 semaines</h4>
            <h5 className="ui header">Mission
            </h5>
            <ol class="ui list">
              <li value="*">Agent de service</li>
            </ol>
          </div>
        </div>

        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              2e Régiment d'Infanterie de Marine
              <div className="sub header">Le Mans, 76000</div>
              <div className="sub header">2017</div>
            </h2>
            <h4 className="ui header">3 mois</h4>
            <h5 className="ui header">Mission
            </h5>
            <ol class="ui list">
              <li value="*">Formation Générale Initiale militaire du rang</li>
            </ol>
          </div>
        </div>

        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Oril
              <div className="sub header">Bolbec, 76000</div>
              <div className="sub header">2016</div>
            </h2>
            <h4 className="ui header">3 semaines</h4>
            <h5 className="ui header">Mission
            </h5>
            <ol class="ui list">
              <li value="*">Aider l'équipe de maintenance</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}