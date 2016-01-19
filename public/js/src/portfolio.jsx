var React = require("react");
var ReactDOM = require("react-dom");
var projectData = require("./resources/data/portfolioData");

var Project = React.createClass({
  render: function() {
    return(
      <div className="col s12 m12 l6">
        <div className="card large">
          <div className="card-image">
            <img className="responsive-img" src={this.props.image_link} />
          </div>
          <div className="card-content">
            <span className="card-title"><h5>{this.props.name}</h5></span>
            <p>{this.props.details}</p>
          </div>
          <div className="card-action">
            <a href={this.props.website_link}>Website</a>
            <a href={this.props.repository_link}>Github</a>
          </div>
        </div>
      </div>
    );
  }
});

var Projects = React.createClass({
  render: function() {
    var projectNodes = this.props.data.map(function(project) {
      return (
        <Project
          key={project.id}
          name={project.name}
          image_link={project.image_link}
          details={project.details}
          website_link={project.website_link}
          repository_link={project.repository_link} />
      );
    });
    return (
      <div className="row">
        {projectNodes}
      </div>
    );
  }
});

var ProjectSection = React.createClass({
  render: function() {
    return (
      <Projects data={this.state.data}/>
    );
  },
  getInitialState: function() {
    return {data: this.props.data};
  }
});

ReactDOM.render(
  <ProjectSection data={projectData} />,
  document.getElementById('contentSection')
);
