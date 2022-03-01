import tokenService from "./tokenService"

const BASE_URL = '/api/monsters/'


export function create(monsterInfoFromTheForm) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: monsterInfoFromTheForm,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error submitting the Form! Hey Check the Express Terminal');
    })
}