function persistence(num) {
  num = num.toString();
  if(num.length === 1) return 0;
  let cont = 0;
  let mult = 1;
  while(num.length!==1){
   for(let i = 0; i<num.length; i+=1){
     mult *= parseInt(num[i]);
   }
   num = mult.toString();
   mult = 1;
   cont += 1;
  }
 return cont
}