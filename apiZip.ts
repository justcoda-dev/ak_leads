const URL_SRC = "https://app.zipcodebase.com/api/v1/";
const API_KEY = "95179ba0-c8bf-11ed-93da-e310397a0caf";

export const request = async (type: string, params?: { [key: string]: string }, options?: RequestInit) => {
    try {
        const urlWithParams = new URLSearchParams(params)
        const response = await fetch(`${URL_SRC}${type}?apikey=${API_KEY}&${urlWithParams}`, options)
        return response.json()
    } catch (e) {
        console.error(e)
    }
}
//

