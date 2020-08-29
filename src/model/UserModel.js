
class UserModel {

    constructor(parseUser) {
        
        this.id = parseUser.id;
        this.email = parseUser.get("email");
        this.name = parseUser.get("name");
        // this.apartment = parseUser.get("apartment");
        // this.email = isTenant.get("isTenant");
        // this.email = isCommitteeMember.get("isCommitteeMember");
    }

}

export default UserModel;