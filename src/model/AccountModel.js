class AccountModel {

    constructor(parseUser) {
        
        this.id = parseUser.id;
        this.building = parseUser.get("building");
        this.address = parseUser.get("address");
        this.city = parseUser.get("city");
       
    }

}

export default AccountModel;