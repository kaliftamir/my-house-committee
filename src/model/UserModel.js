
class UserModel {

    constructor(parseUser) {
        
        this.id = parseUser.id;
        this.email = parseUser.get("email");
        this.username = parseUser.get("username");
        this.password = parseUser.get("password");
        this.apartment = parseUser.get("apartment");
        this.isTenant = parseUser.get("isTenant");
        this.isCommitteeMember = parseUser.get("isCommitteeMember");
      
    }

}

export default UserModel;