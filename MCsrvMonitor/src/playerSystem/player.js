class Player {
    constructor(nickname, faction, activity_time) {
        this.nickname = nickname;
        this.faction = faction;
        this.activity_time = activity_time;
    }

    setFaction(faction) {
        this.faction = faction;
    }

    updateActivityData() {
        let now = Date.now();
        
        this.activity_time.push(now);
        this.last_activity_check_date = now;
    }

    getActivityTime() {
        throw new Error("Not implemented");
    }

    toString() {
        return `${this.nickname} last active on ${this.activity_time[-1]}, plays in ${this.faction}.`;
    }
    nickname;
    activity_time = [];
    faction;
}


module.exports = Player;