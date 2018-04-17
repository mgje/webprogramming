
let luna_mdata="json_not_loaded";
let time_scale=["1-7 days","8-15 days","0.5-6 months","6-12 months","1.0 year","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
let gender =["male","female"];
let methode =["mol_L","ng_ml"];
let time_value="";
let gender_value="";
let methode_value = "";
let measurement_value = "";

const loadJSON = (callback) => {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'all_data.json', true);
    xobj.onreadystatechange = () => {
        if (xobj.readyState === 4 && xobj.status === 200) {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
const init = () => {
    loadJSON((response) => {
        luna_mdata = JSON.parse(response); 
    });
}
// Nachdem die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    init();
}, false);


// Calculate Methods
const check_global_vars = () => {
    
    // Read from form
    measurement_value = parseFloat(document.getElementById("mesurement").value);
    time_value=document.getElementById("age").value;
    gender_value=document.getElementById("gender").value;
    methode_value = document.getElementById("methode").value;

    //valdidate
    if (measurement_value <= 0.9 || measurement_value > 1000.0){
        console.log("wrong input value:" +measurement_value);
        return false;
    }


    if (time_scale.indexOf(time_value) < 0){
        console.log("wrong time selection: "+time_value);
        return false;
    }

    if (gender.indexOf(gender_value) < 0){
        console.log("gender not selected: "+gender_value);
        return false;
    }

    if (methode.indexOf(methode_value) < 0){
        console.log("method not selcted: "+methode_value);
        return false;
    }

    return true; 
}

const ouput_value = (val) => {

}


//Calc male nmol_L
// (input-Median)/(Input>Median?1SDSplus:1SDSminus)
const evaluate_mdata = () => {
    if (check_global_vars()){

    }
}
