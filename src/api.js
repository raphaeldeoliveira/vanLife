export async function getVans() {
    const res = await fetch()
    const data = await res.json()
    return data.vans
}