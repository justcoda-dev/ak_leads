const URL_SRC = "https://api.ipgeolocation.io/";
const API_KEY = "97a2bd8f1b314052a04a3aa71aa6a553";

export const request = async (type: string, params?: { [key: string]: string }, options?: RequestInit) => {
    try {
        const urlWithParams = new URLSearchParams(params)
        const response = await fetch(`${URL_SRC}${type}?apiKey=${API_KEY}&${urlWithParams}`, options)
        return response.json()
    } catch (e) {
        console.error(e)
    }
}
//

