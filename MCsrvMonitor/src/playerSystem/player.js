class Player {
    constructor(id, nickname) {
        this.id = id;
        this.nickname = nickname;

        this.updateActivityData();

    }

    static get lastId() {
        return Player.lastId;
    }

    static set lastId(new_id) {
        Player.lastId = new_id;
    }

    static lastId = 0;

    setFaction(faction) {
        this.faction = faction;
    }

    updateActivityData() {
        let now = Date.now();
        this.activity_time.push(now);
        this.last_activity_check_date = now;

        this.last_login = now;
        if (now - this.last_activity_check_date > 24 * 3600 * 1000) {
            this.login_count++;
        }
    }

    getActivityTime() {
        throw new Error("Not implemented");
    }

    toString() {
        return `${this.nickname} usually active on ${this.activity_time}, plays in ${this.faction}. Last login was ${this.last_login}`;
    }

    id = -1;
    nickname;
    activity_time = [];
    faction;
    last_login;
    login_count = 0;
    last_activity_check_date;
}


module.exports = Player;