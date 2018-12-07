var katzDeliLine=[]
function takeANummber(number, name) {
  for (let i=1; i<katzDeliLine.length; i++) {
    katzDeliLine.push(`Welcome, ${name[i]}.  You are number ${number[i]} in line`)
  } 
  return katzDeliLine
}