import moment from 'moment'

export const state = () => ({
    list: [
        {
            id: 9,
            company: 'University of Wisconsin - Whitewater',
            title: 'Student',
            location: 'Whitewater, WI',
            start_date: moment('09/2019', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: 'Current',
            icon: 'mdi-school',
            color: 'purple',
            responsibilities: [
                'Major - Computer Science',
                'Minor - Statistics'
            ]
        },
        {
            id: 8,
            company: 'Greenleaf Media',
            title: 'Web Developer',
            location: 'Madison, WI',
            start_date: moment('01/2019', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('04/2019', 'MM/YYYY').format('MMM [of] YYYY'),
            icon: 'mdi-office-building',
            color: 'green',
            responsibilities: [
                'Help maintain a web application built in laravel and vue.js'
            ]
        },
        {
            id: 7,
            company: 'Gilson Inc.',
            title: 'E-Business Application Developer',
            location: 'Madison, WI',
            start_date: moment('06/2018', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('12/2018', 'MM/YYYY').format('MMM [of] YYYY'),
            icon: 'mdi-office-building',
            color: 'cyan',
            responsibilities: [
                'Update and maintain the E-Commerce platform Magento with new and updated content.',
                'Work with an international team using Jira to update the the E-Commerce platform.',
                'Help mantain the server instances on Microsoft Azure '
            ]
        },
        {
            id: 6,
            company: 'Hardin Design and Development',
            title: 'Web Developer',
            location: 'Madison, WI',
            start_date: moment('10/2015', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('05/2018', 'MM/YYYY').format('MMM [of] YYYY'),
            icon: 'mdi-office-building',
            color: 'light-green',
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
            id: 5,
            company: 'InfoSec Institute',
            title: 'Web Developer',
            location: 'Madison, WI',
            start_date: moment('01/2015', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('09/2015', 'MM/YYYY').format('MMM [of] YYYYY'),
            icon: 'mdi-office-building',
            color: 'red',
            responsibilities: [
                'Responsible for the development and maintenance of company’s primary web application.',
                'Evaluated and analyzed different design specifications with the software development team.',
                'Designed applications using the ”top down view” method with project managers and developers.',
                'Worked in an Agile Development Methodology with SCRUM, daily meetings, sprints.',
                'Use PHP and the CakePHP framework to create the site as well as APIs.'
            ]
        },
        {
            id: 4,
            company: 'Johnson Health Tech',
            title: 'Web Developer',
            location: 'Cottage Grove, WI',
            start_date: moment('02/2013', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('01/2015', 'MM/YYYY').format('MMM [of] YYYYY'),
            icon: 'mdi-office-building',
            color: 'deep-orange',
            responsibilities: [
                'Written software using various programming languages- PHP, Python, and JavaScript.',
                'Used frameworks Symfony2, Django Rest, Express, Angular, and a custom built framework.',
                'Used testing frameworks PHPUnit, Django-unittest, Mocha (with Karma).',
                'Helped develop applications using NodeJS and Express, one of which to parse binary messages produced by exercising equipment.',
                'Created and developed a central API for the company\'s e-commerce site using Python.',
                'Used both SQL databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB, Redis) to support our sites.',
                'Wrote technical documentation for other developers and non developers.'
            ]
        },
        {
            id: 3,
            company: 'HSA Home Warranty',
            title: 'Web Developer',
            location: 'Cottage Grove, WI',
            start_date: moment('08/2012', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('01/2013', 'MM/YYYY').format('MMM [of] YYYYY'),
            icon: 'mdi-office-building',
            color: 'blue-grey',
            responsibilities: [
                'Helped maintain websites using .NET technologies, including ASP.NET, VB.NET, and some minor C#.',
                'Provide IT help desk support when needed.'
            ]
        },
        {
            id: 2,
            company: 'Robert Half Technologies',
            title: 'Consultant',
            location: 'Madison, WI',
            start_date: moment('07/2012', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('05/2013', 'MM/YYYY').format('MMM [of] YYYYY'),
            icon: 'mdi-office-building',
            color: 'red darken-4',
            responsibilities: [
                'Worked on contracts for web development/IT that were provided by Robert Half Technology.'
            ]
        },
        {
            id: 1,
            company: 'United States Geological Survey (USGS)',
            title: 'WWW Development Technician',
            location: 'Madison, WI',
            start_date: moment('01/2011', 'MM/YYYY').format('MMM [of] YYYY'),
            end_date: moment('12/2012', 'MM/YYYY').format('MMM [of] YYYYY'),
            icon: 'mdi-office-building',
            color: 'blue darken-4',
            responsibilities: [
                'Developed web applications using Java, PHP(Yii Framework), and helped design a MSSQL database for these applications.',
                'Provided IT help desk support when needed.'
            ]
        }
    ]
})