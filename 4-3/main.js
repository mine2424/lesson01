const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

for (i = 0; i < errorLogs.length; i++) {
  const newArr = errorLogs[i].split(/[:,-]/)
  console.log(newArr[1].replace(' ', ''))

}