
export interface Counter {
    id: string;
    value: number;
}

export interface AppState { 
    counters: {
        [id: string]: Counter
    };
}