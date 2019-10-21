/* Given an amount of money (`account_balance`),
let's buy all phones and accesories money can afford 🤑. */

/*
TODO: 
- `total_spent` and `total_phones` are neccesaries?;
  try calculating from `total_spent`.
- Handle error when `account_balance` is not a number.
*/

// setting variables and constants
var account_balance = prompt('💵 Your bank account initial balance is:');
var total_spent = 0;
var total_phones = 0;
var total_accesories = 0;
const MENTAL_SPENDING_TRESHOLD = 50;
const TAX_RATE = 0.12;
const PHONE_PRICE = 160;
const ACCESORY_PRICE = 15;

// helper functions
function calculatePrice(price) {
  return price * (1 + TAX_RATE);
}
function formatPrice(price) {
  return '$ ' + price.toFixed(2);
}

account_balance = Number(account_balance);

// buying phones up to be run out of money;
// calculating the hypothetical next spent before check
// if I can afford it.
while (account_balance >= calculatePrice(total_spent + PHONE_PRICE)) {
  console.log('Buying phone...');
  total_spent += PHONE_PRICE;
  total_phones++;
  if (calculatePrice(total_spent + ACCESORY_PRICE) <= account_balance) {
    if (ACCESORY_PRICE <= MENTAL_SPENDING_TRESHOLD) {
      console.log('Buying accesory...')
      total_spent += ACCESORY_PRICE;
      total_accesories++;
    }
  }
  console.log('Spent yet: ' + formatPrice(total_spent));
  console.log('****');
}

total_spent = calculatePrice(total_spent);
console.log('You have spent ' + formatPrice(total_spent));
console.log('You have ' + formatPrice(account_balance) + ' in your account.');

console.log(`🎉 Congratulation!, You have buy ${total_phones}📱 phones and ${total_accesories}💍 accesories.`)