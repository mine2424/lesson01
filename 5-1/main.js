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

for (const profile of profiles.profiles) {
  const nameArr = profile.name
  const ageArr = profile.age
  console.log(`${nameArr}:${ageArr}`)
}