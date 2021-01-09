let goalButton = document.getElementById('setGoal');
let goal = document.getElementById('goal');
let endingTime = document.getElementById('ending-time');
let priorities = document.getElementById('priorities');
let redirectTo = document.getElementById('redirectTo')

goalButton.addEventListener('click', () => {
  console.log(goal.value, ':', endingTime.value, ':', priorities.value)
  goal.value=''
  console.log(location)
  console.log(redirectTo.value)
  location.replace(redirectTo.value)
});


