export async function getVans() {
    const res = await fetch("http://localhost:8080/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}