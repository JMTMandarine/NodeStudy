const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside:{
            key: 'value'
        },
    },
}

console.time("전체시간");
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean);
console.error("에러메시지는 여기에 출력");

console.table([{name : '이태형', birth: 1992}, {name:"아무개", birth: 1990}]);

console.dir(obj, { colors : false, depth : 2});
console.dir(obj, { colors : true, depth : 1});

console.time("시간 측정");
for(let i = 0; i < 100000; i++){

}
console.timeEnd("시간 측정");

function b(){
    console.log("에러위치 추적");
}
function a(){
 b();
}
a();

console.log("전체시간");
