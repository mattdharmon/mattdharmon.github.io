export const state = () => ({
    list: [
        {
            id: 1,
            image: 'bridge.JPG',
            title: 'Surfs Up',
            description: 'To learn how to use sqlite database and sqlalchemy to extract data for analysis',
            github: 'https://github.com/mattdharmon/surfs_up'
        },
        {
            id: 2,
            image: 'gate.JPG',
            title: 'Movies ETL',
            description: 'Take in the three files—Wikipedia data, Kaggle metadata, and the MovieLens rating data—and perform the ETL process by adding the data to a PostgreSQL database.',
            github: 'https://github.com/mattdharmon/movies-etl'
        },
        {
            id: 3,
            image: 'church.JPG',
            title: 'WeatherPy',
            description: 'To get comfortable with Jupyter Notebooks by importing csv files, filtering the locations by tempature, and creating an itenerary that appears on google maps.',
            github: 'https://github.com/mattdharmon/WeatherPy'
        },
    ]
})
