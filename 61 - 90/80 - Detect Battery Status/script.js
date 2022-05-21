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
    }

    updateAllBatteryInfo();

    //when the charging status changes
    battery.addEventListener("chargingchange",()=>{
        updateAllBatteryInfo();
    })

    function updateChargingInfo(){
        if(battery.charging){
            charge.classList.add("active")
            console.log("charging");
        }else{
            charge.classList.remove("active")
            console.log("not charging");
        }
    }
});

