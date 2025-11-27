let nums = [1, 2, 3, 2, 4, 1, 5, 3];
let x = [];

for (i = 0; i < nums.length; i++){
  let found = false;

  for (j = 0; j < x.length; j++){
    if (nums[i] === x[j]){
      found = true;
    }
  }

  if (!found){
    x.push(nums[i]);
  }
}

console.log(x);