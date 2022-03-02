import tokenService from "./tokenService"

const BASE_URL = '/api/monsters/'
const NAME_BASE_URL = 'https://api.fungenerators.com/name/generate?category=alien&limit=1&start='

/*
export function create(monsterInfoFromTheForm) {
    console.log(monsterInfoFromTheForm, 'monsterInfoFromTheForm')
    for (var key of monsterInfoFromTheForm.keys()) {
        console.log(key);
    }
    for (var value of monsterInfoFromTheForm.values()) {
        console.log(value);
    }
    return fetch(BASE_URL, {
        method: 'POST',
        // We are sending over a picture
        // multipart/form-data
        body: monsterInfoFromTheForm,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'multipart/form-data'
        }
    }).then(res => {
        console.log(res, '<----res in the API')
        if (res.ok) return res.json();
        throw new Error('Error submitting the Form! Hey Check the Express Terminal');
    })
}
*/

export function getRandName() {
    let nameSeed = (Math.floor(Math.random() * 200)).toString()
    return fetch(`${NAME_BASE_URL}${nameSeed}`, {
        method: 'GET',
        headers: {
            'X-Fungenerators-Api-Secret': '6YQ3XGQGA8rqGi0mrZtHFgeF',
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return (res.json())
    })

}

export function create(monsterInfoFromTheForm) {
    console.log(JSON.stringify(monsterInfoFromTheForm), 'start API create')
    return fetch(BASE_URL, {
        method: 'POST',
        // We are sending over a picture
        // multipart/form-data
        body: JSON.stringify(monsterInfoFromTheForm),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        // Valid login if we have a status of 2xx (res.ok)
        if (res.ok) {
            return res.json();
        }
        throw new Error('Error submitting the Form! Hey Check the Express Terminal');
    })
}