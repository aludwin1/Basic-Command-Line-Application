const profile = require('./profile');

const user = process.argv[2];
const skill = process.argv[3];
profile.get(user, skill);

