import moment from 'moment'

export const namespaced = true

export const state = {
  list: [
    {
      id: 1,
      company: 'Hardin Design and Development',
      title: 'Web Developer',
      location: 'Madison, WI',
      start_date: moment('10/2015', 'MM/YYYY').format('MMM [of] YYYY'),
      end_date: 'Current',
      responsibilities: [
        'Develop, maintain, and implement enterprise software written in PHP and JavaScript.',
        'Architect and implement custom software/applications using various programming languages across multiple platforms and operating systems.',
        'Provide support and expertise for the front-end and back-end for management and clients.',
        'Configure, build and develop custom modules to fit the needs of existing applications.',
        'Migrate and maintain a SQL and NoSQL databases.',
        'Conduct in-house application testing before final deployment for clients.',
        'Gather technical and business requirements.',
        'Lead a team in building a product for our clients.'
      ]
    },
    {
      id: 2,
      company: 'InfoSec Institute',
      title: 'Web Developer',
      location: 'Madison, WI',
      start_date: moment('01/2015', 'MM/YYYY').format('MMM [of] YYYY'),
      end_date: moment('09/2015', 'MM/YYYY').format('MMM [of] YYYYY'),
      responsibilities: [
        'Responsible for the development and maintenance of company’s primary web application.',
        'Evaluated and analyzed different design specifications with the software development team.',
        'Designed applications using the ”top down view” method with project managers and developers.',
        'Worked in an Agile Development Methodology with SCRUM, daily meetings, sprints.',
        'Use PHP and the CakePHP framework to create the site as well as APIs.'
      ]
    },
    {
      id: 3,
      company: 'Johnson Health Tech',
      title: 'Web Developer',
      location: 'Cottage Grove, WI',
      start_date: moment('02/2013', 'MM/YYYY').format('MMM [of] YYYY'),
      end_date: moment('01/2015', 'MM/YYYY').format('MMM [of] YYYYY'),
      responsibilities: [
        'Written software using various programming languages- PHP, Python, and JavaScript.',
        'Used frameworks Symfony2, Django Rest, Express, Angular, and a custom built framework.',
        'Used testing frameworks PHPUnit, Django-unittest, Mocha (with Karma).',
        'Helped develop applications using NodeJS and Express, one of which to parse binary messages produced by exercising equipment.',
        'Created and developed a central API for the company\'s e-commerce site using Python.',
        'Used both SQL databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis) to support our sites.',
        'Wrote technical documentation for other developers and non developers.'
      ]
    }
  ]
}

export const mutations = {
  setSelected (state, selected) {
    state.selected = selected
  }
}

export const actions = {
  select ({ commit, state }, id) {
    commit('setSelected', state.list.find((item) => item.id === id))
  }
}

export const getters = {
  list (state) {
    return state.list
  },
  selected (state) {
    return state.selected
  }
}
