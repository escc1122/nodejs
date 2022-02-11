//測試資源檔是否實體檔案有存在

let PATH = "../client/egret/resource/"
var fs = require('fs');

function check(file_name){
    console.log(file_name + "  start");
    let default_data = fs.readFileSync(PATH+file_name);
    let default_json = JSON.parse(default_data);
    let resources = default_json["resources"];
    let same_name_array_tmp =[];
    let same_name_array =[];

    let length = resources.length;


    for (i=0;i<length;i++){
        let url = resources[i]["url"];
        let name = resources[i]["name"];
        if (same_name_array.includes(name)){
            same_name_array.push(name);
        }else{
            same_name_array_tmp.push(name);
        }
        let fileExists = fs.existsSync(PATH+url);
        if (!fileExists){
            console.log(PATH+url);
        }
    }
    console.log("same_name_array");
    console.log(same_name_array);
}

function main(){
    let default_en_us = "default_en_us.res.json";
    let default_th_TH = "default_th_TH.res.json";
    let default_zh_cn = "default_zh_cn.res.json";
    check(default_en_us);
    check(default_th_TH);
    check(default_zh_cn);
}

main();
