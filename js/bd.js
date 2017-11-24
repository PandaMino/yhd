setImmediate(function(){
	console.log("1");
});//系统执行的，副执行，异步
function setSyncExecute(callback){
//	let sum = 0;
//	for (let i=0; i<loop;i++){
//		sum+=i;
//	}
	callback(sum);
};
setSyncExecute(function(){
	console.log("2");
},1000);
console.log("3");
//主进程执行完了才执行副进程
