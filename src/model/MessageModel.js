class MessageModel {

    constructor(parseRecipe) {
        
        this.id = parseRecipe.id;
        this.createdAt = parseRecipe.createdAt;
        this.title = parseRecipe.get("title");
        this.details = parseRecipe.get("details");
        this.priority = parseRecipe.get("priority");
        this.icon = parseRecipe.get("icon");
        this.img = parseRecipe.get("img")._url;
    }

}

export default MessageModel;