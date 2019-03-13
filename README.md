# cli-notes-app-node
Learning how to be more familiar with working in node.js environment. A command line app to add, remove, list and read notes

Initially logging process.argv to get input from user through command line and add it to argv (argument vector), an array that stores each argument typed in console.Although this is great, we use yargs to better parse our comand line arguments.

In this exercise, I learn to parse our command line arguments using npm module/package called yargs.


Using yargs.command(), I created a list of commands configurations: add, remove, list and read.
Within this configuration, I listed properties for each command: command name, description, builder which is the argument it will take and handler function.

In notes.js, there are 4 functions that are exported to be used in its respective handler function when command line argument is added.

I also learn to turn convert data in an object to a JSON file:
1. JSON.stringify(data)
2. using core module (fs), write it to a .json file and pass the data in
3. To convert this json data, we read the .json file using fs core module which will result in a series of binary data
4. We can then convert this binary data to string using .toString() method.
5. This can then be parsed to convert it to object using JSON.parse(data)


