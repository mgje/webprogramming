(function() {
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
    document.getElementById("SDS_value").value=val;

}

//Calc male nmol_L
// (input-Median)/(Input>Median?1SDSplus:1SDSminus)
const calc_value = (gender,methode,time,measurement) => {
    let median,oneSDSplus,oneSDSminus,denominator,calculation;
    median = luna_mdata[gender][methode][time]["Median"];
    oneSDSplus = luna_mdata[gender][methode][time]["1SDSplus"];
    oneSDSminus = luna_mdata[gender][methode][time]["1SDSminus"];
    if (measurement>median){
        denominator = oneSDSplus;
    } else {
        denominator = oneSDSminus;
    }
    //denominator = (measurement>median)?oneSDSplus:oneSDSminus;
    calculation = (measurement-median)/denominator;
    return calculation;
}

const debug_column_output = () => {
    let tmp;
    let s="<table>";
    let median;
    let oneSDSminus;
    let oneSDSplus;

    for (var i = 0; i < time_scale.length; i++) {
        tmp = calc_value(gender_value,methode_value,time_scale[i],measurement_value);
        median = luna_mdata[gender_value][methode_value][time_scale[i]]["Median"];
        oneSDSplus = luna_mdata[gender_value][methode_value][time_scale[i]]["1SDSplus"];
        oneSDSminus = luna_mdata[gender_value][methode_value][time_scale[i]]["1SDSminus"];

        //s += "<tr><td>"+tmp+"</td><td>"+median+"</td><td>"+oneSDSplus+"</td><td>"+oneSDSminus+"</td></tr>";
        s += "<tr><td>"+tmp+"</td></tr>";
    }
    s += "</table>";
    document.getElementById("debug_output").innerHTML=s;
}


const evaluate_mdata = () => {
    
    if (check_global_vars()){
        
        ouput_value(calc_value(gender_value,methode_value,time_value,measurement_value));
        
        //debug
        debug_column_output()
    }
}

let el = document.getElementById("lm_form");
el.addEventListener("change", evaluate_mdata, false);

}).call(this);
