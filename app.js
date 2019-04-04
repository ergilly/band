const bandMembers = require('./members'); // first
const members = require('./band');

bandMembers.addMember(members[0]); //eleventh
bandMembers.addMember(members[1]);
bandMembers.addMember(members[2]);
bandMembers.addMember(members[3]);
bandMembers.addMember(members[4]);

console.log(bandMembers.getMember('bob')); // second

// Should try to commit after each item added (i.e. 13 commits for this project)
