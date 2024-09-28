const container = document.querySelector('#container')
// All Car details array
let data = []
//rest data 
let tempdata = [
    {
        "id": 1,
        "name": "Toyota Camry",
        "image": "https://example.com/toyota-camry.jpg",
        "price": 24000,
        "ratings": 4.7
    },
    {
        "id": 2,
        "name": "Honda Accord",
        "image": "https://example.com/honda-accord.jpg",
        "price": 26000,
        "ratings": 4.5
    },
    {
        "id": 3,
        "name": "Ford Mustang",
        "image": "https://example.com/ford-mustang.jpg",
        "price": 35000,
        "ratings": 4.8
    },
    {
        "id": 4,
        "name": "Chevrolet Malibu",
        "image": "https://example.com/chevrolet-malibu.jpg",
        "price": 23000,
        "ratings": 4.4
    },
    {
        "id": 5,
        "name": "Nissan Altima",
        "image": "https://example.com/nissan-altima.jpg",
        "price": 24000,
        "ratings": 4.6
    }
]

//fatching the array data
async function fetchData() {
    const res = await fetch("")
    const details = await res.json()
    if(details.response){
        return data.data
    }
    return tempdata
    
}

