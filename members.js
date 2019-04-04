const bandMembers = {
  members: [],
  addMember(member) {
    bandMembers.members.push(member);
  },
  getMember(person) {
    for (var member of bandMembers.members) {
      if (person === member.name) {
        return member;
      }
    }
  }
}

module.exports = bandMembers;
