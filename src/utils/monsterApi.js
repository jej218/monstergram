import tokenService from "./tokenService"

const BASE_URL = '/api/monsters/'
const NAME_BASE_URL = 'https://api.fungenerators.com/name/generate?category=alien&limit=1&start='
const IMG_BASE_URL = 'https://app.pixelencounter.com/api/v2/basic/svgmonsters/'

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
    return fetch(BASE_URL, {
        method: 'POST',
        // We are sending over a picture
        // multipart/form-data
        body: JSON.stringify(monsterInfoFromTheForm),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(function (res) {
        // Valid login if we have a status of 2xx (res.ok)
        if (res.ok) {
            return res.json();
        }
        throw new Error('Error submitting the Form! Hey Check the Express Terminal');
    })
}

export function getAll() {
    return fetch(BASE_URL, {}).then(res => res.json())
}

export function getRandUrl(imageSeed) {
    return `${IMG_BASE_URL}${imageSeed}/image/png?size=300`
}