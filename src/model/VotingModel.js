class VotingModel {

    constructor(parseVoting) {
        
        this.id = parseVoting.id;       
        this.createdAt = parseVoting.createdAt;
        this.title = parseVoting.get("title");
        this.details = parseVoting.get("details");
        this.options = parseVoting.get("options");
        this.dueDate = parseVoting.get("dueDate");
        this.votes = parseVoting.get("votes");
    }

}

export default VotingModel; 