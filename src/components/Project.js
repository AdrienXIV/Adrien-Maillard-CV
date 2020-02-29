import React from 'react';

export class Project extends React.Component {
  render() {
    return (
      <div className="ui three column grid" id="projects">
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Indice de confiance sur des trajets automobiles
              <div className="sub header">Récupérer des données de localisation au format JSON pour les projeter sur une carte grâce
              à l'API de géolocalisation de Google.</div>
            </h2>
            <ol class="ui list">
              <li value="-">NodeJS</li>
              <li value="-">HTML/CSS</li>
              <li value="-">Socket.io</li>
              <li value="-"><a href="https://github.com/AdrienXIV/GoogleMap" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/GoogleMap</a></li>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Convertisseur JSON - KML
              <div className="sub header">Convertir les fichiers JSON de données de localisation pour les enregistrer sous format KML.</div>
            </h2>
            <ol class="ui list">
              <li value="-">Programme CLI avec la librairie CaporalJS</li>
              <li value="-"><a href="https://github.com/AdrienXIV/Convertisseur-json-kml" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/Convertisseur-json-kml</a></li>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Formulaire inscription/connexion d'utilisateur avec AngularJS
            </h2>
            <ol class="ui list">
              <li value="-">AngularJS</li>
              <li value="-">HTML/CSS</li>
              <li value="-">MongoDB</li>
              <li value="-"><a href="https://github.com/AdrienXIV/API_Rest_login" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/API_Rest_login</a></li>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Script de sauvegarde de données sous Linux
            </h2>
            <ol class="ui list">
              <li value="-">Script bash</li>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Application mobile simple en Java
              <div className="sub header">Découverte de la création d'une application mobile Android. Simple petite boîte
              à outils (calculatrice, appareil photo, calcul d'IMC).</div>
            </h2>
            <ol class="ui list">
              <li value="-">Java</li>
              <li value="-">Android Studio</li>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Bibliothèque multimédia
              <div className="sub header">Site conçu comme un mini réseau social où l'on peut ajouter/supprimer des livres, films, séries que l'on a regardé.
              Le site dispose d'une messagerie où l'on peut envoyer un message à un autre utilisateur.</div>
            </h2>
            <ol class="ui list">
              <li value="-">PHP</li>
              <li value="-">HTML/CSS</li>
              <li value="-">Méthode AJAX</li>
              <li value="-">MySQL</li>
              <li value="-"><a href="https://github.com/AdrienXIV/Bibliotheque" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/Bibliotheque</a></li>
            </ol>
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <h2 className="ui header">
              Performances sportives
              <div className="sub header">Site répertoriant mes performances lors de mes séances sportives (rythme cardiaque moyen, rythme cardiaque maximum, durée 
              de la séance).</div>
            </h2>
            <ol class="ui list">
              <li value="-">PHP</li>
              <li value="-">Javascript</li>
              <li value="-">Librairie ChartJS pour faire des graphiques</li>
              <li value="-">HTML/CSS</li>
              <li value="-">MySQL</li>
              <li value="-"><a href="https://github.com/AdrienXIV/Site-sport" rel="noopener noreferrer" target="_blank"><i className="github icon"></i>https://github.com/AdrienXIV/Site-sport</a></li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}