const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Warrior': 0,
  'Elite': 20,
  'Master': 40,
  'Grand Master': 50,
  'Epic': 60,
  'Legends': 70,
  'Mythic': 80,
  'Mythical Glory': 90,
  'EPIC GLORY 😱': 10,
  'POKE EPIC GLORY 😱': 1000
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
