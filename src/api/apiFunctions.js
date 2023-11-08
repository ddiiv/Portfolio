
const baseURL = "http://localhost:3000/";


export const getInfo = async (ok) => {
    try {

        if (ok === true) {
            const response = await fetch(`${baseURL}personalinfo`)
            const data = await response.json();
            return data;
        }
        else { console.log("el ok es:", ok) }

    }
    catch (e) {
        if (e.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(e.message);
        }
    }

}