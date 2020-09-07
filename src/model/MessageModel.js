class MessageModel {

    constructor(parseMessage) {
        
        this.id = parseMessage.id;
        this.createdAt = parseMessage.createdAt;
        this.title = parseMessage.get("title");
        this.details = parseMessage.get("details");
        this.priority = parseMessage.get("priority");
        this.icon = parseMessage.get("icon");
        this.img = parseMessage.get("img")._url;
    }

}

export default MessageModel;