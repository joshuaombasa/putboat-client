export async function getBoats() {
    const res = await fetch('http://localhost:3000/api/boats')

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText
        }
    }

    return data
    
}

export async function getBoat(id) {
    const res = await fetch(`http://localhost:3000/api/boats/${id}`)

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText
        }
    }

    return data
    
}

export async function getMerchantBoats() {
    const res = await fetch('http://localhost:3000/api/merchantBoats')

    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText
        }
    }

    return data
    
}



