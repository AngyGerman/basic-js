module.exports = function createDreamTeam(members) {
  let element = '';
  let firstLetter = '';
  let result = '';

  if (!(members instanceof Array)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    }

     element = members[i].toString().trim().toUpperCase();
     firstLetter = element.charAt(0);
     result = result.concat(firstLetter).split('').sort().join('');
  }

  if (result === '') {
    return false;
  }

  return result;
};