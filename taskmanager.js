let tasks = [];

const addTask = (task, callback) => {
  tasks.push(task);
  console.log('Task added:', task);
  if (typeof callback === 'function') {
    callback();
  }
};

const printTasks = () => {
  console.log('Tasks:');
  tasks.forEach((t, i) => console.log(`${i + 1}. ${t}`));
};

const addMany = (...newTasks) => {
  newTasks.forEach(t => tasks.push(t));
  console.log('Added', newTasks.length, 'tasks');
  printTasks();
};

function scopeDemo() {
  let inside = 'inside';
  console.log('inside scope:', inside);
  console.log('tasks count inside:', tasks.length);
}


addTask('Learn JS', printTasks);

addMany('Read a book', 'Do exercise');

scopeDemo();
console.log('outside scope:', typeof inside);
