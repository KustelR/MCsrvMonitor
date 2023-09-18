class Player {
    constructor(id, nickname, faction, activity_time, last_login, last_activity_check_date, login_count) {
        this.id = id;
        this.nickname = nickname;
        this.faction = faction;
        this.activity_time = activity_time;
        this.last_login = last_login;
        this.last_activity_check_date = last_activity_check_date;
        this.login_count = login_count;
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
        if (this.activity_time == null) this.activity_time = [now]
        else this.activity_time.push(now);
        this.last_activity_check_date = now;

        this.last_login = now;
        if (now - this.last_activity_check_date > 24 * 3600 * 1000) {
            if (!this.login_count) { this.login_count = 1; }
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