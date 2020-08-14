module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20){

    item.enhancement =+ item.enhancement + 1
    return { ...item };

  } else {
  return { ...item }
  };
}

function fail(item) {
  
  if (item.enhancement > 16){
    item.enhancement = item.enhancement -1
    return { ...item }

  } 
  if(item.enhancement >= 15){
    item.durability = item.durability - 10
    return { ...item }
  
  } 
  else if (item.enhancement < 15){
    item.durability = item.durability - 5
    return { ...item }
  } else {
    return { ...item }
  }
  // switch(item.enhancement) {
  //   case item.enhancement > 16:
  //   item.enhancement = item.enhancement -1
  //   return { ...item };
  //   break;
  //   case item.enhancement >= 15:
  //   item.durability = item.durability - 10
  //   return { ...item };
  //   break;
  //   case item.enhancement < 15:
  //   item.durability = item.durability - 5
  //   return { ...item };


  // }
  
 
}

function repair(item) {
if(item.durability < 100){

  item.durability = 100;
  return { ...item };

} else {
  return { ...item }
};
  
}

function get(item) {
  return { ...item };
}
