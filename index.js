var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
 return `Currently serving ${line.shift()}.`
 }
 
 function currentLine(line) {
   const namesAndNumbers = [];
   for (i = 0, l = line.length; i < l; i++) {
     namesAndNumbers.push(`${[i + 1]}. )
     return `The line is currently:
   }
 
 return "The line is currently empty."