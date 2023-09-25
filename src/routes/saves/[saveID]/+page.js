export const load = ({ fetch, params }) => {

    async function fetchSave(id) {
        let res = await fetch(`https://wrappler-338e1-default-rtdb.europe-west1.firebasedatabase.app/saves/${id}.json`)
        let data = await res.json()

        return data
    }

    return {
        saveData: fetchSave(params.saveID)
    }
}