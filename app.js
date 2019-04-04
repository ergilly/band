const bandMembers = require('./members');
const members = require('./band');

bandMembers.addMember(members[0]);
bandMembers.addMember(members[1]);
bandMembers.addMember(members[2]);
bandMembers.addMember(members[3]);
bandMembers.addMember(members[4]);

console.log(bandMembers.getMember('bob'));
