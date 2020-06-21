const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22
    },
    {
      name: "鈴木",
      age: 34
    },
    {
      name: "高橋",
      age: 42
    },
    {
      name: "田中",
      age: 15
    }
  ]
}

for (i = 0; i < profiles.profiles.length; i++) {
  const nameArr = profiles.profiles[i].name
  const ageArr = profiles.profiles[i].age
  console.log(`${nameArr}:${ageArr}`)
}