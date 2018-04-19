"use strict";
(function() {
//DATA
const luna_mdata={"male":{"ng_ml":{"2":{"Median":125,"1SDSminus":37.75510204,"1SDSplus":90.81632653},"3":{"Median":119,"1SDSminus":35.71428571,"1SDSplus":86.73469388},"4":{"Median":118,"1SDSminus":35.20408163,"1SDSplus":84.18367347},"5":{"Median":119,"1SDSminus":35.20408163,"1SDSplus":85.20408163},"6":{"Median":124,"1SDSminus":36.73469388,"1SDSplus":88.26530612},"7":{"Median":125,"1SDSminus":37.24489796,"1SDSplus":89.28571429},"8":{"Median":139,"1SDSminus":41.32653061,"1SDSplus":96.93877551},"9":{"Median":159,"1SDSminus":46.93877551,"1SDSplus":109.1836735},"10":{"Median":188,"1SDSminus":55.10204082,"1SDSplus":127.5510204},"11":{"Median":233,"1SDSminus":67.34693878,"1SDSplus":155.6122449},"12":{"Median":301,"1SDSminus":86.73469388,"1SDSplus":198.4693878},"13":{"Median":388,"1SDSminus":110.2040816,"1SDSplus":246.9387755},"14":{"Median":470,"1SDSminus":130.1020408,"1SDSplus":283.6734694},"15":{"Median":500,"1SDSminus":134.6938776,"1SDSplus":285.7142857},"16":{"Median":468,"1SDSminus":122.9591837,"1SDSplus":253.0612245},"17":{"Median":398,"1SDSminus":101.5306122,"1SDSplus":202.5510204},"18":{"Median":330,"1SDSminus":81.63265306,"1SDSplus":158.1632653},"19":{"Median":278,"1SDSminus":66.83673469,"1SDSplus":127.0408163},"20":{"Median":246,"1SDSminus":58.16326531,"1SDSplus":107.6530612},"1-7 days":{"Median":13,"1SDSminus":1.530612245,"1SDSplus":9.693877551},"8-15 days":{"Median":25,"1SDSminus":7.142857143,"1SDSplus":8.163265306},"0.5-6 months":{"Median":155,"1SDSminus":54.59183673,"1SDSplus":80.6122449},"6-12 months":{"Median":140,"1SDSminus":42.34693878,"1SDSplus":104.0816327},"1.0 year":{"Median":134,"1SDSminus":40.30612245,"1SDSplus":98.46938776}},"mol_L":{"2":{"Median":16.375,"1SDSminus":4.945918367,"1SDSplus":11.89693878},"3":{"Median":15.589,"1SDSminus":4.678571429,"1SDSplus":11.3622449},"4":{"Median":15.458,"1SDSminus":4.611734694,"1SDSplus":11.02806122},"5":{"Median":15.589,"1SDSminus":4.611734694,"1SDSplus":11.16173469},"6":{"Median":16.244,"1SDSminus":4.812244898,"1SDSplus":11.5627551},"7":{"Median":16.375,"1SDSminus":4.879081633,"1SDSplus":11.69642857},"8":{"Median":18.209,"1SDSminus":5.41377551,"1SDSplus":12.69897959},"9":{"Median":20.829,"1SDSminus":6.148979592,"1SDSplus":14.30306122},"10":{"Median":24.628,"1SDSminus":7.218367347,"1SDSplus":16.70918367},"11":{"Median":30.523,"1SDSminus":8.82244898,"1SDSplus":20.38520408},"12":{"Median":39.431,"1SDSminus":11.3622449,"1SDSplus":25.9994898},"13":{"Median":50.828,"1SDSminus":14.43673469,"1SDSplus":32.34897959},"14":{"Median":61.57,"1SDSminus":17.04336735,"1SDSplus":37.16122449},"15":{"Median":65.5,"1SDSminus":17.64489796,"1SDSplus":37.42857143},"16":{"Median":61.308,"1SDSminus":16.10765306,"1SDSplus":33.15102041},"17":{"Median":52.138,"1SDSminus":13.3005102,"1SDSplus":26.53418367},"18":{"Median":43.23,"1SDSminus":10.69387755,"1SDSplus":20.71938776},"19":{"Median":36.418,"1SDSminus":8.755612245,"1SDSplus":16.64234694},"20":{"Median":32.226,"1SDSminus":7.619387755,"1SDSplus":14.10255102},"1-7 days":{"Median":1.703,"1SDSminus":0.200510204,"1SDSplus":1.269897959},"8-15 days":{"Median":3.275,"1SDSminus":0.935714286,"1SDSplus":1.069387755},"0.5-6 months":{"Median":20.305,"1SDSminus":7.151530612,"1SDSplus":10.56020408},"6-12 months":{"Median":18.34,"1SDSminus":5.54744898,"1SDSplus":13.63469388},"1.0 year":{"Median":17.554,"1SDSminus":5.280102041,"1SDSplus":12.8994898}}},"female":{"ng_ml":{"2":{"Median":125,"1SDSminus":37.75510204,"1SDSplus":90.81632653},"3":{"Median":119,"1SDSminus":35.71428571,"1SDSplus":86.73469388},"4":{"Median":118,"1SDSminus":35.20408163,"1SDSplus":84.18367347},"5":{"Median":119,"1SDSminus":35.20408163,"1SDSplus":85.20408163},"6":{"Median":124,"1SDSminus":36.73469388,"1SDSplus":88.26530612},"7":{"Median":140,"1SDSminus":39.79591837,"1SDSplus":89.79591837},"8":{"Median":155,"1SDSminus":43.36734694,"1SDSplus":96.42857143},"9":{"Median":178,"1SDSminus":49.48979592,"1SDSplus":107.6530612},"10":{"Median":210,"1SDSminus":57.65306122,"1SDSplus":123.9795918},"11":{"Median":259,"1SDSminus":69.89795918,"1SDSplus":148.9795918},"12":{"Median":324,"1SDSminus":86.2244898,"1SDSplus":181.6326531},"13":{"Median":391,"1SDSminus":102.5510204,"1SDSplus":211.2244898},"14":{"Median":446,"1SDSminus":114.2857143,"1SDSplus":229.5918367},"15":{"Median":467,"1SDSminus":116.8367347,"1SDSplus":229.5918367},"16":{"Median":438,"1SDSminus":107.1428571,"1SDSplus":204.5918367},"17":{"Median":363,"1SDSminus":86.2244898,"1SDSplus":161.7346939},"18":{"Median":296,"1SDSminus":68.36734694,"1SDSplus":125},"19":{"Median":247,"1SDSminus":55.6122449,"1SDSplus":99.48979592},"20":{"Median":217,"1SDSminus":48.46938776,"1SDSplus":85.20408163},"1-7 days":{"Median":13,"1SDSminus":1.530612245,"1SDSplus":9.693877551},"8-15 days":{"Median":25,"1SDSminus":7.142857143,"1SDSplus":8.163265306},"0.5-6 months":{"Median":155,"1SDSminus":54.59183673,"1SDSplus":80.6122449},"6-12 months":{"Median":140,"1SDSminus":42.34693878,"1SDSplus":104.0816327},"1.0 year":{"Median":134,"1SDSminus":40.30612245,"1SDSplus":98.46938776}},"mol_L":{"2":{"Median":16.375,"1SDSminus":4.945918367,"1SDSplus":11.89693878},"3":{"Median":15.589,"1SDSminus":4.678571429,"1SDSplus":11.3622449},"4":{"Median":15.458,"1SDSminus":4.611734694,"1SDSplus":11.02806122},"5":{"Median":15.589,"1SDSminus":4.611734694,"1SDSplus":11.16173469},"6":{"Median":16.244,"1SDSminus":4.812244898,"1SDSplus":11.5627551},"7":{"Median":18.34,"1SDSminus":5.213265306,"1SDSplus":11.76326531},"8":{"Median":20.305,"1SDSminus":5.681122449,"1SDSplus":12.63214286},"9":{"Median":23.318,"1SDSminus":6.483163265,"1SDSplus":14.10255102},"10":{"Median":27.51,"1SDSminus":7.55255102,"1SDSplus":16.24132653},"11":{"Median":33.929,"1SDSminus":9.156632653,"1SDSplus":19.51632653},"12":{"Median":42.444,"1SDSminus":11.29540816,"1SDSplus":23.79387755},"13":{"Median":51.221,"1SDSminus":13.43418367,"1SDSplus":27.67040816},"14":{"Median":58.426,"1SDSminus":14.97142857,"1SDSplus":30.07653061},"15":{"Median":61.177,"1SDSminus":15.30561224,"1SDSplus":30.07653061},"16":{"Median":57.378,"1SDSminus":14.03571429,"1SDSplus":26.80153061},"17":{"Median":47.553,"1SDSminus":11.29540816,"1SDSplus":21.1872449},"18":{"Median":38.776,"1SDSminus":8.956122449,"1SDSplus":16.375},"19":{"Median":32.357,"1SDSminus":7.285204082,"1SDSplus":13.03316327},"20":{"Median":28.427,"1SDSminus":6.349489796,"1SDSplus":11.16173469},"1-7 days":{"Median":1.703,"1SDSminus":0.200510204,"1SDSplus":1.269897959},"8-15 days":{"Median":3.275,"1SDSminus":0.935714286,"1SDSplus":1.069387755},"0.5-6 months":{"Median":20.305,"1SDSminus":7.151530612,"1SDSplus":10.56020408},"6-12 months":{"Median":18.34,"1SDSminus":5.54744898,"1SDSplus":13.63469388},"1.0 year":{"Median":17.554,"1SDSminus":5.280102041,"1SDSplus":12.8994898}}}};
const time_scale=["1-7 days","8-15 days","0.5-6 months","6-12 months","1.0 year","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
const gender =["male","female"];
const methode =["mol_L","ng_ml"];
let time_value="";
let gender_value="";
let methode_value = "";
let measurement_value = "";


// check if all parameters are in the range
const check_global_vars = function() {
    
    // Read from form
    measurement_value = parseFloat(document.getElementById("mesurement").value);
    time_value=document.getElementById("age").value;
    gender_value=document.getElementById("gender").value;
    methode_value = document.getElementById("methode").value;

    //valdidate
    if (measurement_value <= 0.9 || measurement_value > 1000.0){
        //console.log("wrong input value:" +measurement_value);
        return false;
    }


    if (time_scale.indexOf(time_value) < 0){
        //console.log("wrong time selection: "+time_value);
        return false;
    }

    if (gender.indexOf(gender_value) < 0){
        //console.log("gender not selected: "+gender_value);
        return false;
    }

    if (methode.indexOf(methode_value) < 0){
        //console.log("method not selcted: "+methode_value);
        return false;
    }
    return true; 
};

//Output
const ouput_value = function(val) {
    let roundval = Math.round(val * 100) / 100;
    document.getElementById("SDS_value").value=roundval;
};

//Calc male nmol_L
// (input-Median)/(Input>Median?1SDSplus:1SDSminus)
const calc_value = function(gender,methode,time,measurement) {
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
};

//debug Method
const debug_column_output = function() {
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

        s += "<tr><td>"+tmp+"</td><td>"+median+"</td><td>"+oneSDSplus+"</td><td>"+oneSDSminus+"</td></tr>";
        //s += "<tr><td>"+tmp+"</td></tr>";
    }
    s += "</table>";
    document.getElementById("debug_output").innerHTML=s;
};

//main evaluation
const evaluate_mdata = function(e) {  
    if (check_global_vars()){
        ouput_value(calc_value(gender_value,methode_value,time_value,measurement_value));
        //debug output all values
        //debug_column_output();
    }
};


// Event Listener
let el = document.getElementById("lm_form");
el.addEventListener("change", evaluate_mdata, false);
el.addEventListener("submit", function(e) {
    e.preventDefault();
}, false);
el.addEventListener("click", function(e) {
    e.preventDefault();
}, false);
el = document.getElementById("mesurement");
el.addEventListener("submit", function(e) {
    e.preventDefault();
}, false);


// TESTING Part can be removed later

//automated testing


const assert = function(condition, message) { 
    if (!condition)
        throw Error("Assert failed" + (typeof message !== "undefined" ? ": " + message : ""));
};



//compare numbers in vector
const compare_vec = function(arr1, arr2) {
    let e = 0.000000001;
    let dif=0.001;
    if (arr1.length !== arr2.length){
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        dif = arr1[i]-arr2[i];
        if (dif*dif > e){
            console.log("item nr:"+i+"  time: "+time_scale[i]);
            return false;
        }
    }
    return true;
};



//calc vector
//debug Method
const calc_vec = function(gend,meth,inputval) {
    let tmp;
    let output = [];

    for (var i = 0; i < time_scale.length; i++) {
        tmp = calc_value(gend,meth,time_scale[i],inputval);
        output.push(tmp);
    }
    return output;
};

// Tests

//Test 1 gender=male method=ng inputval=60
let tcalc = calc_vec("male","ng_ml",60);
let texcel = [4.848421053,4.2875,-1.740186916,-1.889156627,-1.835949367,-1.721621622,-1.652,-1.647536232,-1.675942029,-1.742222222,-1.745205479,-1.911604938,-2.109130435,-2.322962963,-2.568787879,-2.778588235,-2.976296296,-3.151372549,-3.266666667,-3.318174274,-3.329045226,-3.3075,-3.261679389,-3.197894737];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=60");


//Test 2 gender=male method=ng inputval=10
tcalc = calc_vec("male","ng_ml",10);
texcel = [-1.96,-2.1,-2.656074766,-3.069879518,-3.076455696,-3.045945946,-3.052,-3.067826087,-3.096231884,-3.103333333,-3.087671233,-3.121481481,-3.174347826,-3.23037037,-3.311212121,-3.355058824,-3.43,-3.535686275,-3.637878788,-3.724813278,-3.821507538,-3.92,-4.009770992,-4.05754386];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=10");

//Test 3 gender=male method=ng inputval=2
tcalc = calc_vec("male","ng_ml",2);
texcel = [-7.186666667,-3.22,-2.802616822,-3.258795181,-3.274936709,-3.257837838,-3.276,-3.295072464,-3.323478261,-3.321111111,-3.302465753,-3.315061728,-3.344782609,-3.375555556,-3.43,-3.447294118,-3.502592593,-3.597176471,-3.697272727,-3.789875519,-3.900301508,-4.018,-4.129465649,-4.195087719];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=2");


//Test 4 gender=male method=ng inputval=110
tcalc = calc_vec("male","ng_ml",110);
texcel = [10.00631579,10.4125,-0.824299065,-0.708433735,-0.595443038,-0.397297297,-0.252,-0.227246377,-0.255652174,-0.381111111,-0.402739726,-0.701728395,-1.043913043,-1.415555556,-1.826363636,-2.202117647,-2.522592593,-2.767058824,-2.895454545,-2.91153527,-2.836582915,-2.695,-2.513587786,-2.338245614];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=110");

//Test 5 gender=male method=ng inputval=150
tcalc = calc_vec("male","ng_ml",150);
texcel = [14.13263158,15.3125,-0.091588785,0.096078431,0.162487047,0.275280899,0.357411765,0.380121212,0.363832335,0.294566474,0.28,0.113473684,-0.19173913,-0.68962963,-1.232424242,-1.740941176,-2.15962963,-2.459607843,-2.598484848,-2.586224066,-2.442613065,-2.205,-1.915114504,-1.650526316];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=150");


//Test 6 gender=male method=ng inputval=230
tcalc = calc_vec("male","ng_ml",230);
texcel = [22.38526316,25.1125,0.930379747,0.864705882,0.97492228,1.156179775,1.279764706,1.330424242,1.302754491,1.200924855,1.176,0.938736842,0.650280374,0.32928,-0.044545455,-0.818588235,-1.433703704,-1.844705882,-2.004545455,-1.93560166,-1.654673367,-1.225,-0.718167939,-0.275087719];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=230");


//Test 7 gender=male method=ng inputval=300
tcalc = calc_vec("male","ng_ml",300);
texcel = [29.60631579,33.6875,1.798734177,1.537254902,1.685803109,1.926966292,2.086823529,2.161939394,2.124311377,1.993988439,1.96,1.660842105,1.291401869,0.87808,0.430557377,-0.011529412,-0.798518519,-1.306666667,-1.484848485,-1.366307054,-0.965226131,-0.3675,0.173172691,0.501611374];
assert(compare_vec(tcalc,texcel),"Test male ng_ml measure=300");



//Test 8 gender=male method=mol_L inputval=2
tcalc = calc_vec("male","mol_L",2);
texcel = [0.233877059,-1.36259542,-2.559591924,-2.945498023,-2.945776404,-2.906436971,-2.904519084,-2.918207766,-2.946613563,-2.959949109,-2.946251176,-2.994028838,-3.062134086,-3.134780888,-3.233002545,-3.294331388,-3.382205259,-3.495201317,-3.598774,-3.681976497,-3.769629829,-3.855477099,-3.930964396,-3.966985402];
assert(compare_vec(tcalc,texcel),"Test male mol_L measure=2");


//Test 9 gender=male method=mol_L inputval=18
tcalc = calc_vec("male","mol_L",18);
texcel = [12.83331458,13.76956107,-0.322308625,-0.061289433,0.034575011,0.136589759,0.212193983,0.230502892,0.216005851,0.15186692,0.138931298,-0.038605221,-0.460076336,-0.918213175,-1.419447143,-1.886158958,-2.273921402,-2.556419698,-2.691996299,-2.688659846,-2.566668457,-2.359293893,-2.10356506,-1.867079148];
assert(compare_vec(tcalc,texcel),"Test male mol_L measure=18");

//Test 10 gender=male method=mol_L inputval=30.5
tcalc = calc_vec("male","mol_L",30.5);
texcel = [22.67662515,25.45849237,0.965416948,0.891842539,1.003605585,1.187280213,1.312328693,1.363975017,1.33590346,1.232924149,1.207633588,0.967873041,0.676148962,0.351423511,-0.002606986,-0.786024248,-1.40807464,-1.822996557,-1.98357622,-1.912631212,-1.626854885,-1.190400763,-0.675909329,-0.226527387];
assert(compare_vec(tcalc,texcel),"Test male mol_L measure=30.5");


//Test 11 gender=male method=mol_L inputval=60
tcalc = calc_vec("male","mol_L",60);
texcel = [45.90683809,53.04437023,3.758923567,3.055440802,3.290517739,3.666909684,3.90864661,4.038969234,3.978861818,3.784219212,3.729770992,3.290894335,2.738644503,2.116919695,1.44599975,0.791130909,0.2835329,-0.092117946,-0.311704835,-0.081203636,0.296297037,0.809386851,1.416987645,1.969430918];
assert(compare_vec(tcalc,texcel),"Test male mol_L measure=60");


//Test 12 gender=male method=mol_L inputval=100
tcalc = calc_vec("male","mol_L",100);
texcel = [77.4054319,90.44895038,7.546729153,5.989133363,6.391415576,7.029119135,7.429077683,7.666080037,7.562534168,7.243602347,7.149618321,6.440753716,5.535248627,4.510812824,3.408207233,2.329622638,1.520047947,1.034142457,0.921755725,1.167143561,1.803786413,2.739945826,3.820494804,4.805797185];
assert(compare_vec(tcalc,texcel),"Test male mol_L measure=100");


//Test 13 gender=male method=mol_L inputval=120
tcalc = calc_vec("male","mol_L",120);
texcel = [93.15472881,109.1512405,9.440631945,7.455979644,7.941864494,8.710223861,9.18929322,9.479635438,9.354370343,8.973293915,8.859541985,8.015683407,6.933550688,5.707759389,4.389310975,3.098868502,2.13830547,1.572337855,1.45610687,1.770443241,2.557531102,3.705225314,5.022248383,6.223980319];
assert(compare_vec(tcalc,texcel),"Test male mol_L measure=120");


//Test 14 gender=female method=ng_mol inputval=10
tcalc = calc_vec("female","ng_ml",10);
texcel = [-1.96,-2.1,-2.656074766,-3.069879518,-3.076455696,-3.045945946,-3.052,-3.067826087,-3.096231884,-3.103333333,-3.266666667,-3.343529412,-3.394639175,-3.469026549,-3.562335766,-3.641656805,-3.715223881,-3.815,-3.911441048,-3.994666667,-4.093964497,-4.183283582,-4.261651376,-4.270736842];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=10");

//Test 15 gender=female method=ng_mol inputval=50
tcalc = calc_vec("female","ng_ml",50);
texcel = [3.816842105,3.0625,-1.923364486,-2.125301205,-2.084050633,-1.986486486,-1.932,-1.931594203,-1.96,-2.014444444,-2.261538462,-2.421176471,-2.586391753,-2.775221239,-2.990072993,-3.177751479,-3.325174129,-3.465,-3.569082969,-3.621333333,-3.630059172,-3.598208955,-3.542385321,-3.445473684];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=50");


//Test 16 gender=female method=ng_mol inputval=100.2
tcalc = calc_vec("female","ng_ml",100.2);
texcel = [8.995368421,9.212,-1.003813084,-0.939855422,-0.838582278,-0.656864865,-0.5264,-0.505623188,-0.534028986,-0.647888889,-1.000102564,-1.263623529,-1.572041237,-1.904495575,-2.271883212,-2.595550296,-2.835661692,-3.02575,-3.139423581,-3.1528,-3.047857988,-2.863940299,-2.639706422,-2.409768421];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=100.2");


//Test 17 gender=female method=ng_mol inputval=160.2
tcalc = calc_vec("female","ng_ml",160.2);
texcel = [15.18484211,16.562,0.064506329,0.194078431,0.266072539,0.387595506,0.475011765,0.501284848,0.48354491,0.410127168,0.224954545,0.053925926,-0.359670103,-0.863787611,-1.413489051,-1.899692308,-2.250587065,-2.50075,-2.625886463,-2.5928,-2.352,-1.986328358,-1.560807339,-1.171873684];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=160.2");

//Test 18 gender=female method=ng_mol inputval=240
tcalc = calc_vec("female","ng_ml",240);
texcel = [23.41684211,26.3375,1.05443038,0.960784314,1.076476684,1.266292135,1.395058824,1.449212121,1.42011976,1.314219653,1.113636364,0.881481481,0.575924171,0.241975309,-0.271824818,-0.974201183,-1.472437811,-1.8025,-1.942882096,-1.848,-1.426508876,-0.819104478,-0.12587156,0.26994012];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=240");


//Test 19 gender=female method=ng_mol inputval=370
tcalc = calc_vec("female","ng_ml",370);
texcel = [36.82736842,42.2625,2.667088608,2.209803922,2.396683938,2.697752809,2.893882353,2.993454545,2.945868263,2.787052023,2.561363636,2.22962963,1.783507109,1.290534979,0.745068493,0.253258427,-0.204776119,-0.665,-0.830218341,-0.634666667,0.043280757,0.592,1.236307692,1.795688623];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=370");


//Test 20 gender=female method=ng_mol inputval=537
tcalc = calc_vec("female","ng_ml",537);
texcel = [54.05473684,62.72,4.738734177,3.814313725,4.092642487,4.536629213,4.819294118,4.977212121,4.905868263,4.679075145,4.421136364,3.961481481,3.33478673,2.637530864,1.866027397,1.172696629,0.691207729,0.396355556,0.304888889,0.483890274,1.075835962,1.928,2.914871795,3.755688623];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=537");


//Test 21 gender=female method=ng_mol inputval=831
tcalc = calc_vec("female","ng_ml",831);
texcel = [84.38315789,98.735,8.385822785,6.639019608,7.078341969,7.773932584,8.208941176,8.469575758,8.356407186,8.009942197,7.695227273,7.01037037,6.065781991,5.008888889,3.839452055,2.791348315,2.083091787,1.676888889,1.585422222,1.920897756,2.89362776,4.28,5.869948718,7.206227545];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=831");

//Test 22 gender=female method=ng_mol inputval=998
tcalc = calc_vec("female","ng_ml",998);
texcel = [101.6105263,119.1925,10.45746835,8.243529412,8.774300518,9.612808989,10.13435294,10.45333333,10.31640719,9.901965318,9.555,8.742222222,7.617061611,6.355884774,4.960410959,3.710786517,2.873719807,2.404266667,2.3128,2.737157107,3.926182965,5.616,7.548512821,9.166227545];
assert(compare_vec(tcalc,texcel),"Test female ng_mol measure=998");


//Test 23 gender=female method=mol_L inputval=2
tcalc = calc_vec("female","mol_L",2);
texcel = [0.233877059,-1.36259542,-2.559591924,-2.945498023,-2.945776404,-2.906436971,-2.904519084,-2.918207766,-2.946613563,-2.959949109,-3.134311998,-3.22207454,-3.288209648,-3.377666689,-3.486980554,-3.580570035,-3.663862368,-3.768912214,-3.866359545,-3.945506361,-4.032877727,-4.106241313,-4.166938861,-4.162066693];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=2");


//Test 23 gender=female method=mol_L inputval=19
tcalc = calc_vec("female","mol_L",19);
texcel = [13.62077943,14.70467557,-0.182478419,0.048405927,0.112097457,0.220644995,0.30020476,0.321180662,0.30559766,0.238351498,0.05610687,-0.229708128,-0.666032895,-1.1267716,-1.630402853,-2.075533674,-2.398433785,-2.633416031,-2.755655855,-2.734310433,-2.527841366,-2.208098439,-1.833442118,-1.484686219];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=19");


//Test 24 gender=female method=mol_L inputval=25
tcalc = calc_vec("female","mol_L",25);
texcel = [18.3455685,20.3153626,0.444593681,0.488459811,0.577232132,0.724976413,0.828269421,0.865247282,0.843148512,0.757258968,0.566169327,0.371670908,0.119269202,-0.33233804,-0.975140135,-1.54434437,-1.951811933,-2.232652672,-2.363642788,-2.306829517,-1.996652062,-1.53816566,-1.009855032,-0.539728405];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=25");


//Test 25 gender=female method=mol_L inputval=37
tcalc = calc_vec("female","mol_L",37);
texcel = [27.79514665,31.53673664,1.580935356,1.36856758,1.507501483,1.733639249,1.884398743,1.953380523,1.918250217,1.795073909,1.58629424,1.321628499,0.970179082,0.584311878,0.157355432,-0.481965762,-1.058568228,-1.431125954,-1.579616654,-1.451867684,-0.934273454,-0.198300103,0.356245058,0.768070576];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=37");


//Test 26 gender=female method=mol_L inputval=43
tcalc = calc_vec("female","mol_L",43);
texcel = [32.51993572,37.14742366,2.149106194,1.808621464,1.972636159,2.237970666,2.412463404,2.497447143,2.45580107,2.313981379,2.096356697,1.796607294,1.395634022,0.95373983,0.464790338,0.023367356,-0.611946375,-1.030362595,-1.187603587,-1.024386768,-0.40308415,0.257954198,0.816609121,1.305621429];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=43");


//Test 27 gender=female method=mol_L inputval=67
tcalc = calc_vec("female","mol_L",67);
texcel = [51.419092,59.59017176,4.421789545,3.568837,3.833174861,4.255296338,4.524722048,4.673713625,4.60600448,4.389611261,4.136606523,3.696522477,3.097453782,2.431451638,1.694529959,1.032030191,0.570248184,0.285072774,0.193606107,0.359009347,0.917863559,1.723603053,2.658065375,3.455824839];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=67");


//Test 28 gender=female method=mol_L inputval=75
tcalc = calc_vec("female","mol_L",75);
texcel = [57.71881077,67.07108779,5.179350662,4.155575513,4.453354428,4.927738228,5.228808262,5.399135785,5.32273895,5.081487888,4.816689799,4.329827537,3.664727036,2.924022241,2.104443166,1.368251136,0.859365712,0.551060899,0.459594232,0.657499762,1.295449226,2.212152672,3.271884126,4.172559309];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=75");

//Test 29 gender=female method=mol_L inputval=87
tcalc = calc_vec("female","mol_L",87);
texcel = [67.16838891,78.29246183,6.315692337,5.035683281,5.383623779,5.936401064,6.284937584,6.487269026,6.397840655,6.119302828,5.836814712,5.279785129,4.515636916,3.662878145,2.719312977,1.872582554,1.293042003,0.950043087,0.858576421,1.105235385,1.861827727,2.944977099,4.192612253,5.247661014];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=87");


//Test 30 gender=female method=mol_L inputval=98
tcalc = calc_vec("female","mol_L",98);
texcel = [75.83050221,88.57872137,7.357338873,5.842448735,6.236370684,6.861008663,7.253056129,7.484724497,7.383350551,7.070633191,6.771929216,6.150579587,5.29563764,4.340162724,3.282943637,2.334886354,1.690578604,1.31577676,1.224310093,1.515659706,2.381008019,3.616732824,5.036613036,6.23317091];
assert(compare_vec(tcalc,texcel),"Test female mol_L measure=98");

/// End Testing Part

}).call(this);
