let url="http://localhost:3456/city";
let hotelUrl="http://localhost:3456/category";



function ads(){
    document.getElementById('coupon').style.display="block";
}
function cross(){
    document.getElementById('coupon').style.display="none";
}
function getCity(){
    // alert("asish")
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            let element = document.createElement('option')  
            let text = document.createTextNode(data[i].city_name) 
            element.appendChild(text)
            element.value = data[i]._id 
            document.getElementById('city').appendChild(element)
        }
    })
}
const getHotel = () => {
    const cityId = document.getElementById('city').value;
    while(hotels.length>0){
        hotels.remove(0)
    }
    fetch(`${hotelUrl}?city=${cityId}`)
    .then((res) => res.json())
    .then((results) => {  
        console.log(results)
         for(i=0;i<results.length; i++){
             console.log(results[i])
            let element = document.createElement('option')
            let text = document.createTextNode(`${results[i].name}`)
            element.appendChild(text)
            document.getElementById('hotels').appendChild(element)   
    }
    })
}
