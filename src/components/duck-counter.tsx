import * as React from "react";

export interface DuckCounterProps {
    count: number;
}

import duckSmall from '../duck-small.png';
import duckMedium from '../duck-medium.png';
import duckLarge from '../duck-large.png';

const SMALL_DUCK = 1;
const MEDIUM_DUCK = 4;
const LERGE_DUCK = 12;

export class DuckCounter extends React.PureComponent<DuckCounterProps> {
    public render() {
        let {count} = this.props;
        const fragment: React.ReactNodeArray = [];
        if (count > 0) {
            while (count > 0) {
                if (count - LERGE_DUCK >= 0) {
                    fragment.push(<img width={80} height={80} src={duckLarge} />);
                    count -= LERGE_DUCK;
                    continue;
                }
                if (count - MEDIUM_DUCK >= 0) {
                    fragment.push(<img width={60} height={60} src={duckMedium} />);
                    count -= MEDIUM_DUCK;
                    continue;
                }
                if (count - SMALL_DUCK >= 0) {
                    fragment.push(<img width={40} height={40} src={duckSmall} />);
                    count -= SMALL_DUCK;
                    continue;
                }
            }
        } else if (count < 0) {
            while (count < 0) {
                if (count + LERGE_DUCK <= 0) {
                    fragment.push(<img className="negative-duck" width={80} height={80} src={duckLarge} />);
                    count += LERGE_DUCK;
                    continue;
                }
                if (count + MEDIUM_DUCK <= 0) {
                    fragment.push(<img className="negative-duck" width={60} height={60} src={duckMedium} />);
                    count += MEDIUM_DUCK;
                    continue;
                }
                if (count + SMALL_DUCK <= 0) {
                    fragment.push(<img className="negative-duck" width={40} height={40} src={duckSmall} />);
                    count += SMALL_DUCK;
                    continue;
                }
            }
        }
        
        return fragment;
    };
}