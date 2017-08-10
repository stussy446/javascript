const year = new Date().getFullYear();

var birthYears = [1999, 1992, 2000, 2005];
var newYears = [1965, 2008, 1992];

var calculateAge = function(birthYear){
  return year - birthYear;
};


var createList = function(oldList,newList){
  for(var i = 0; i < oldList.length; i++){
  newList.push(oldList[i])
  };
  return newList;
};

var judgementList = function(list){
  var trueOrFalse = [];
  
  for(var i = 0; i < list.length; i++){
    var age = calculateAge(list[i]);
    if(age >= 18){
      console.log("This person is of age and is " + age);
      trueOrFalse.push(true);
    } else {
      console.log("This person is only " + age);
      trueOrFalse.push(false);
    };
  };
  
  return trueOrFalse;
};


var printFullAge = function(birthYearList){
  var empty = [];
  var fillList = createList(birthYearList, empty);
  
  return judgementList(fillList);
};

fullOne = printFullAge(birthYears);
fullTwo = printFullAge(newYears);


