import React from 'react';
import { Card } from "semantic-ui-react";

import MonsterCard from '../MonsterCard/MonsterCard';

export default function MonsterFeed({ monsters, numPhotosCol }) {

    if (!monsters.length) {
        return <span>There are no monsters yet</span>
    }


    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
            {monsters.map((monster) => {
                return <MonsterCard monster={monster} key={monster._id} />;
            })}
        </Card.Group>
    )
} 