// types of variable

const account_id = 144556;
let account_Email = "suvrodip@gmail.com";
var account_Password = "123456";
account_city = "Mumbai";

// change variable values

// account_id = 25;  // not allowed not change const variable values
account_Email = "rudronil@gmail.com"; // yes let variable can changed
account_Password = "00000"; // yes var variable can changed
account_City = "Pune";
console.log(
  account_Email + "\n" + account_Password + "\n" + account_City + "\n\n"
);

// let account_state; output undifined

console.table([
  account_id,
  account_Email,
  account_Password,
  account_City,
  //account_State,
]);

/* 
    prefer not to use var
    because of issue in block scope and functional scope
*/
/*
      OUTPUT
rudronil@gmail.com
00000
Pune


┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 144556               │
│ 1       │ 'rudronil@gmail.com' │
│ 2       │ '00000'              │
│ 3       │ 'Pune'               │
└─────────┴──────────────────────┘
*/
