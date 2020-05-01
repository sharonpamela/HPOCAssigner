const axios = require('axios');

// axios.get('http://10.42.247.61/api/users')
//     .then(response => {
//         console.log(response)
//     })
//     .catch(e => {
//         console.log(e);
//     });

// axios.post('http://10.42.247.61/api/users', {
//         email: "sharon@nutanix.com"
//     })
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(e => {
//         console.log(e);
//     });

axios.post('http://10.42.247.61/api/users/sharon@nutanix.com')
    .then(response => {
        console.log(response.data)
    })
    .catch(e => {
        console.log(e);
    });