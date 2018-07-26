import * as request from "superagent";

const API_ROOT = 'http://localhost:3000/counters'

export interface Counter {
    id: string;
    value: number;
}
  
export const counters = {
    async create(
      value: number
    ): Promise<Counter> {
        const {body} = await request(
            'POST', API_ROOT
        ).type('json').accept('json');

        return body;
    },
  
    async delete(
      id: string
    ) {
        await request(
            'DELETE', `${API_ROOT}/${id}`
        ).type('json').accept('json');
    },
  
    async findAll(): Promise<Counter[]> {
        const {body} = await request('GET', API_ROOT);

        return body;
    },
  
    async findById(
      id: string
    ): Promise<Counter> {
        const {body} = await request(
            'GET', `${API_ROOT}/${id}`
        ).type('json').accept('json');

        return body;
    },
  
    async increase(
      id: string,
      value: number
    ): Promise<Counter> {
        const {body} = await request(
            'POST', `${API_ROOT}/${id}/increment`
        ).type('json').accept('json').send(
            {value}
        );

        return body;
    },
  
    async decrease(
      id: string,
      value: number
    ): Promise<Counter> {
        const {body} = await request(
            'POST', `${API_ROOT}/${id}/decrement`
        ).type('json').accept('json').send(
            {value}
        );

        return body;
    }
  };
  
export type Counters = typeof counters;
