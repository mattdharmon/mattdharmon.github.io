import React from 'react'
import { Link } from 'react-router'

export default class Main extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Harmon</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" to="/skills">Skills</Link>
              <Link className="mdl-navigation__link" to="/">Home</Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Harmon</span>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/">Home</Link>
            <Link className="mdl-navigation__link" to="/skills">Skills</Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </main>
      </div>
    )
  }
}
