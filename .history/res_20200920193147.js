'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };
    res.json(data);
    res.end();
};

exports.okNested = function (values, res) {
    const output = values.reduce((acumulation, item) => {
        if(acumulation[item.nama]){
            const group = acumulation[item.nama];
            if(Array.isArray[group.matakuliah]) {
                group.matakuliah.push(item.matakuliah)
            }else {
                group.matakuliah = [group.matakuliah, item.matakuliah]
            }
        }else {
            acumulation[item.nama] = item;
        }
        return acumulation;
    }, {});
}