class Player {
    constructor(nickname) {
        this.#nickname = nickname;
    }

    setFaction(faction) {
        this.faction = faction;
    }

    updateActivityData() {
        now = Date.now();
        this.#activity_time.push(now);
        this.#last_login = now;
    }

    getActivityTime() {
        throw new Error("Not implemented");
    }

    toString() {
        return `${this.#nickname} usually active on ${this.#activity_time}, plays in ${this.#faction}. Last login was ${this.#last_login}`;
    }

    #nickname;
    #activity_time;
    #faction;
    #last_login;
}