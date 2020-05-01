const axios = require('axios');
var regedit = require('regedit')

regedit.list('HKCU\\Environment', function(err, result) {
    const email = result['HKCU\\Environment'].values.FRAME_USER_EMAIL.value
        // returns:
        // { type: 'REG_SZ', value: 'sharon.santana@nutanix.com' }
    axios.get(`http://10.42.247.61/api/users/${email}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        });

})

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

// axios.get('http://10.42.247.61/api/users/sharon@nutanix.com')
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(e => {
//         console.log(e);
//     });