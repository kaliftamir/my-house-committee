
class UserModel {

    constructor(parseUser) {
        
        this.id = parseUser.id;
        this.email = parseUser.get("email");
        this.name = parseUser.get("name");
        this.apartment = parseUser.get("apartment");
        this.isTenant = parseUser.get("isTenant");
        this.isCommitteeMember = parseUser.get("isCommitteeMember");
    }

}

export default UserModel;