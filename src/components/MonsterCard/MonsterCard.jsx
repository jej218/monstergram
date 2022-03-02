import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function MonsterCard({ monster, isProfile, user, addLike, removeLike }) {

    const likedIndex = monster.likes.findIndex(like => like.username === user.username)
    const likeColor = likedIndex > -1 ? 'red' : 'grey';
    const clickHandler = likedIndex > -1 ? () => removeLike(monster.likes[likedIndex]._id) : () => addLike(monster._id)

    return (
        <Card key={monster._id} raised>
            {isProfile ? (
                ""
            ) : (
                <Card.Content textAlign="left">
                    <Card.Header>
                        <Link to={`/${monster.user.username}`}>
                            <Image
                                floated='left'
                                size='large'
                                avatar
                                src='/favicon.ico'
                            />
                            {monster.user.username}
                        </Link>
                    </Card.Header>
                </Card.Content>
            )}


            <Image src={`${monster.imageUrl}`} wrapped ui={false} />
            <Card.Content>
                <Card.Header floated="right">{monster.title}</Card.Header>
                <Card.Description>
                    {monster.caption}
                </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign={'right'}>
                <Icon name={'heart'} size='large' color={likeColor} onClick={clickHandler} />
                {monster.likes.length} Likes

            </Card.Content>
        </Card>
    );
}

export default MonsterCard;
