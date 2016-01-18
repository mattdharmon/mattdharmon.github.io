var React = require("react");
var ReactDOM = require("react-dom");
var projectData = [
  {
    id: 1,
    name: "Udacity Projects",
    image_link: "public/images/udacity_logo.svg",
    link: "https://mattdharmon.github.io/UdacityP1FrontEndProjectPortfolio/",
    details: "Projects I have done for Udacity while earning a Nanodegree."
  },
];

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
            <a href={this.props.link}>Github</a>
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
        <Project key={project.id} name={project.name} image_link={project.image_link} details={project.details} link={project.link} />
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

var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
// var url = "public/resources/data/projectData.json";
var url = "public/resources/data/projectData.json";

ReactDOM.render(
  <ProjectSection data={projectData}/>,
  document.getElementById('projectSection')
);
