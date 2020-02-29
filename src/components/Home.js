import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="ui container">
        <h2 className="ui header">
          <i className="graduation cap icon"></i>
          <div className="content">Bachelor Développeur web & mobile</div>
        </h2>
        <div className="content" id="header-search">{ReactHtmlParser(this.props.research)}</div>
        <div className="ui segment">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <img className="ui medium rounded image" src="images/photo_profil.jpg" alt="profil" />
            </div>
            <div className="column" id="infos">
              <div className="ui list">
                <div className="item">
                  <i className="car icon"></i>
                  <div className="content">
                    Permis B - véhicule personnel
    </div>
                </div>
                <div className="item">
                  <i className="marker icon"></i>
                  <div className="content">
                    Saint-Jean du Cardonnay, 76150
    </div>
                </div>
                <div className="item">
                  <i className="mobile alternate icon"></i>
                  <div className="content">
                    <a href="tel:0627180907">06 27 18 09 07</a>
                  </div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    <a href="mailto:adrien.mld@laposte.net">adrien.mld@laposte.net</a>
                  </div>
                </div>
                <div className="item">
                  <i className="linkedin icon"></i>
                  <div className="content">
                    <a href="https://www.linkedin.com/in/adrien-maillard" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/adrien-maillard</a>
                  </div>
                </div>
                <div className="item">
                  <i className="github icon"></i>
                  <div className="content">
                    <a href="https://github.com/AdrienXIV" rel="noopener noreferrer" target="_blank">https://github.com/AdrienXIV</a>
                  </div>
                </div>
                <div className="item">
                  <i className="gitlab icon"></i>
                  <div className="content">
                    <a href="https://gitlab.com/AdrienXIV" rel="noopener noreferrer" target="_blank">https://gitlab.com/AdrienXIV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui vertical divider">
            <i className="address book icon"></i>
          </div>
        </div>
      </div>
    );
  }
}