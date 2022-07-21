import {toast} from 'react-toastify'
const basesUrl: string = window.location.host.includes('localhost') && window.location.port.includes('3000') ? 'http://localhost:5000/api' : '/api'

export const http = async (url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', body: any = null, headers: any = {}) => {
    try {
        if (body) {
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }
        const res: Response = await fetch(basesUrl + url, {method, body, headers})
        const data = await res.json()

        return data
    } catch (e) {
        console.log(e)
        toast.error('Ошибка в сервере')
    }
}