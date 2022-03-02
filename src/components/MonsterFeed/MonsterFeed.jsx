import React from 'react';
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import Loader from '../Loader/Loader'

import MonsterCard from '../MonsterCard/MonsterCard';

export default function MonsterFeed({ monsters, numPhotosCol, isProfile, user, addLike, removeLike, loading }) {

    if (!monsters.length) {
        return <span>There are no monsters yet</span>
    }


    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
            {loading ? (
                <Segment>
                    <Dimmer active inverted>
                        <Loader size="small">Loading</Loader>
                    </Dimmer>
                    <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
                </Segment>
            ) : null}
            {monsters.map((monster) => {
                return (
                    <MonsterCard
                        monster={monster}
                        key={monster._id}
                        isProfile={isProfile}
                        user={user}
                        removeLike={removeLike}
                        addLike={addLike}
                    />
                );
            })}
        </Card.Group>

    )
} 