export const state = () => ({
    list: [
        {
            id: 1,
            image: 'surfsup.png',
            title: 'Surfs Up',
            description: 'To learn how to use sqlite database and sqlalchemy to extract data for analysis',
            github: 'https://github.com/mattdharmon/surfs_up'
        },
        {
            id: 2,
            image: 'movies.jpg',
            title: 'Movies ETL',
            description: 'Take in the three files (Wikipedia data, Kaggle metadata, and the MovieLens rating data) and perform the ETL process by adding the data to a PostgreSQL database.',
            github: 'https://github.com/mattdharmon/movies-etl'
        },
        {
            id: 3,
            image: 'three_sisters.JPG',
            title: 'WeatherPy',
            description: 'To get comfortable with Jupyter Notebooks by importing csv files, filtering the locations by tempature, and creating an itenerary that appears on google maps.',
            github: 'https://github.com/mattdharmon/WeatherPy'
        },
        {
            id: 4,
            image: 'earthquakes.png',
            title: 'Mapping Earthquakes',
            description: 'To learn how to map GeoJSON data and make interative maps D3, Leaflet, and earthqauke data from the USGS.',
            github: 'https://github.com/mattdharmon/Mapping_Earthquakes',
            tableau: 'https://mattdharmon.github.io/Mapping_Earthquakes'
        },
        {
            id: 5,
            image: 'tableu_citibikes.png',
            title: 'Bike Sharing',
            description: 'To get a basic understanding of Tableau, I used data from the Citi Bike data source and analyze data from August of 2019.',
            github: 'https://github.com/mattdharmon/bikesharing',
            tableau: 'https://public.tableau.com/views/CitiBikeTripDatafromAugestof2019/AnalysisforCitiBikeforAugustof2019?:language=en&:display_count=y&:origin=viz_share_link'
        },
        {
            id: 6,
            image: 'banks.jpg',
            title: 'Credit Risk Analysis',
            description: 'This project was to familiarize me with supervised learning and the various pros/cons of different sampling techniques. For this, we were creating a machine learning model to predict credit risk for various loan applications.',
            github: 'https://github.com/mattdharmon/Credit_Risk_Analysis',
        },
        {
            id: 7,
            image: 'crypto.jpg',
            title: 'Cryptocurrency Analysis',
            description: 'This project was to dive deeper into machine learning using unsupervised algorithms. Worked primarily with the K-means algorithm and sped up the process by using principal component analysis (PCA), which employs many different features.',
            github: 'https://github.com/mattdharmon/Cryptocurrencies',
        },
    ]
})
