const bandMembers = { // fifth
  members: [], //ninth
  addMember(member) { // twelvth
    bandMembers.members.push(member);
  },
  getMember(person) { //seventh so that function exists
    for (var member of bandMembers.members) { // thirteenth
      if (person === member.name) {
        return member;  //eighth
      }
    }
  }
}

module.exports = bandMembers; //sixth then run
