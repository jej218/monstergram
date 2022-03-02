import tokenService from "./tokenService";
const BASE_URL = '/api';

export function create(monsterId) {
    return fetch(`${BASE_URL}/monsters/${monsterId}/likes`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error in creating the like, Check your express terminal!')
    })
}

export function removeLike(likesId) {
    return fetch(`${BASE_URL}/likes/${likesId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Error in deleting the like, check your express terminal!')
    })
}
