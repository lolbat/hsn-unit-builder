class Weapon {
    private readonly name: string;
    private readonly rating: number;
    private readonly mount: string;
    private readonly special: string[];
    private readonly cost: number;

    constructor(name: string, rating: number, mount: string, special: string[], cost: number) {
        this.name = name;
        this.rating = rating;
        this.mount = mount;
        this.special = structuredClone(special);
        this.cost = cost;
    }
}

export default Weapon;