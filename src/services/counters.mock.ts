import { Counter, Counters } from "./counters";

const store: {[id: string]: Counter} = {};

export const counters: Counters = {
    async create(
        value: number
    ): Promise<Counter> {
        const id = String(new Date().getTime());
        const counter = {id, value};

        store[id] = counter;

        return {...counter};
    },

    async delete(
        id: string
    ) {
        delete store[id];
    },

    async findAll(): Promise<Counter[]> {
        return Object.keys(store).map(id => ({...store[id]}));
    },

    async findById(
        id: string
    ): Promise<Counter> {
        const counter = store[id];
        return counter || Promise.reject();
    },

    async increase(
        id: string,
        value: number
    ): Promise<Counter> {
        const counter = store[id];

        if (counter) {
            counter.value += value;
            return {...counter};
        } else {
            return Promise.reject();
        }
    },

    async decrease(
        id: string,
        value: number
    ): Promise<Counter> {
        const counter = store[id];

        if (counter) {
            counter.value -= value;
            return {...counter};
        } else {
            return Promise.reject();
        }
    }
};