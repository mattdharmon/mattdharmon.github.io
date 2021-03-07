import moment from 'moment'
export const state = () => ({
    list: [
        {
            id: 4,
            school: "University of Wisconsin - Whitewater",
            degree: "B.S. in Computer Science, Minor in Statistics",
            issued_date: moment('09/2019', 'MM/YYYY').format('MMM [of] YYYY'),
            expiration_date: 'In Progress',
        },
        {
            id: 3,
            school: "CompTIA",
            degree: "Certificate, Healthcare IT Technician",
            issued_date: moment('09/2012', 'MM/YYYY').format('MMM [of] YYYY'),
            expiration_date: 'No Expiration Date',
            credential_id: '9WL60FRC4HE4CF1T',
            credential_url: 'https://www.certmetrics.com/comptia/public/verification.aspx?code=J0YP0SBCWLRQSEB5'
        },
        {
            id: 2,
            school: "Madison Area Technical College",
            degree: "Certificate, IT-Professional Developer Java Certificate",
            issued_date: moment('05/2012', 'MM/YYYY').format('MMM [of] YYYY'),
            expiration_date: 'No Expiration Date',
        },
        {
            id: 1,
            school: "Madison Area Technical College",
            degree: "Certificate, IT-Microsoft Visual Studio.NET",
            issued_date: moment('05/2012', 'MM/YYYY').format('MMM [of] YYYY'),
            expiration_date: 'No Expiration Date',
        },
    ]
})

