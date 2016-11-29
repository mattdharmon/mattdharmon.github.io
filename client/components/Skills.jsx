import React from 'react'

export default class Skills extends React.Component {
  renderSkill(skill) {
    return (
      <div className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col" key={skill.id}>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{skill.skill}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
          </a>
        </div>
        <div className="mdl-card__menu">
          <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i className="material-icons">share</i>
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="mdl-grid">
        {this.props.skills.map(this.renderSkill.bind(this))}
      </div>
    )
  }
}
