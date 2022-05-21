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

navigator.getBattery().then((battery)=>{
    function updateAllBatteryInfo(){
        updateChargingInfo();
        updateLevelInfo();
    }

    updateAllBatteryInfo();

    //when the charging status changes
    battery.addEventListener("chargingchange",()=>{
        updateAllBatteryInfo();
    })

    //quando o level de bateria muda
    battery.addEventListener("levelchange",()=>{
        updateAllBatteryInfo();
    })

    function updateChargingInfo(){
        if(battery.charging){
            chargingTimeRef.innerText = "";
            charge.classList.add("active")
            console.log("charging");
        }else{
            charge.classList.remove("active")
            console.log("not charging");

            //mostra do tempo que falta
            if(parseInt(battery.dischargingTime)){
                let hr = parseInt(battery.dischargingTime/3600);
                let min = parseInt(battery.dischargingTime/60 - hr * 60);
                chargingTimeRef.innerText = `${hr}hr ${min}mins remaining`;
            }
        }
    }

    function updateLevelInfo(){
        let batteryLevel = `${parseInt(battery.level*100)}%`
        charge.style.width = batteryLevel;
        chargeLevel.textContent = batteryLevel;
    }
});

