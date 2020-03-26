import React, { Component } from "react";
import { Header } from 'semantic-ui-react'
import './css/style.css';

import { Home } from './components/Home';
import { Experience } from './components/Experience';
import { Skill } from './components/Skill';
import { Formation } from './components/Formation';
import { Project } from './components/Project';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Accueil',
      url: this.props.match.params.choice,
      research: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (val) => {
    this.setState({
      page: val
    });
  }

  UNSAFE_componentWillMount() {
    switch (this.state.url) {
      case 'stage':
        this.setState({
          research: "Recherche stage alterné (3 semaines entreprise / 1 semaine école) <u>Développeur Web & Mobile</u> à partir d'avril jusqu'au 25 septembre 2020 pour compléter ma 3e année à la Normandie Web School.<br><br>  <a href='./pdf/Calendrier Année 3 Chef de projet Digital 2019-1.pdf' target='_blank'>Calendrier</a>"
        });
        break;
      case 'alternance':
        this.setState({
          research: "Recherche alternance <u>Maîtrise DevOps</u> à partir d'octobre 2020 à la Normandie Web School (année 4)."
        });
        break;
      default:
        break;
    }
  }
  renderComponent() {
    switch (this.state.page) {
      case 'Accueil':
        return <Home research={this.state.research} />
      case 'Formations':
        return <Formation />
      case 'Expériences':
        return <Experience />
      case 'Compétences':
        return <Skill />
      case 'Projets personnels':
        return <Project />

      default:
        return <Home />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-content">
          <div className="ui left vertical menu sidebar">
            <div className="item active" onClick={() => this.handleClick("Accueil")}>Accueil</div>
            <div className="item" onClick={() => this.handleClick("Formations")}>Formations</div>
            <div className="item" onClick={() => this.handleClick("Expériences")}>Expériences</div>
            <div className="item" onClick={() => this.handleClick("Compétences")}>Compétances</div>
            <div className="item" onClick={() => this.handleClick("Projets personnels")}>Projets personnels</div>
          </div>
          <div className="pusher">
            <button className="circular ui icon button">
              <i className="sliders horizontal icon"></i>
            </button>
            <Header as='h1'>{this.state.page}</Header>
            {this.renderComponent()}
          </div>
        </div>
      </div>
    );
  }
}
export default App;