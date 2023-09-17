class Player {
    constructor(nickname) {
        this.#nickname = nickname;
        this.id = ++Player.lastId;

        this.updateActivityData();

    }

    setFaction(faction) {
        this.faction = faction;
    }

    updateActivityData() {
        now = Date.now();
        this.#activity_time.push(now);
        this.last_activity_check_date = now;

        this.#last_login = now;
        this.login_count++;
    }

    getActivityTime() {
        throw new Error("Not implemented");
    }

    toString() {
        return `${this.#nickname} usually active on ${this.#activity_time}, plays in ${this.#faction}. Last login was ${this.#last_login}`;
    }

    static lastId = 0;

    id;
    #nickname;
    #activity_time;
    #faction;
    #last_login;
    login_count = 0;
    last_activity_check_date;
}


module.exports = Player;