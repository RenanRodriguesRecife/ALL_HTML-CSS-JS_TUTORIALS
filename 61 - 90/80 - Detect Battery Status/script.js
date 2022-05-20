const chargeLevel = document.getElementById("charge-level");
const charge = document.getElementById("charge");
const chargingTimeRef = document.getElementById("charging-time");

window.onload = () => {
    // para navegadores que não suportam a API de status de bateira 
    if(!navigator.getBattery){
        alert("Battery status Api is not supported in your browsers");
        return false;
    }else{
        console.log("OK")
    }
}

