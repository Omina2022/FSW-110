var app=.model(myApp,[]);
app.controller('ToDoCtrl', function(i){
i.ToDoList=[{TodoText:i.ToDoInput, done:false}];
i.ToDoAdd=function(){
    i.ToDoList.push({TodoText:i.ToDoInput,done:false});
    i.ToDoInput="";
};
i.remove=function(){
    var old=i.ToDoList;
i.ToDoList=[];
angular.forEach(old,function(x){
    if(x.done)i.ToDoList.push(x);
    
});
};
});
