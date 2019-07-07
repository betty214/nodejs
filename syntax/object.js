var members = ['jinhui','jjh214','jini'];
console.log(members[1]); //jjh214
var i = 0;
while(i<members.length){
  console.log('array loop : ', members[i]);
  i+=1;
}
var roles = {
  'programmer' :  'jihui',
  'student' :  'jjh214',
  'sister' :  'jini'
}
console.log(roles.student); //jjh214
console.log(roles['student']); //jjh214
for(var name in roles){
  console.log('object : ', name, 'value : ', roles[name]);
}
