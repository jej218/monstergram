import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

function MonsterCard({ monster, isProfile }) {

    return (
        <Card key={monster._id}>

            <Card.Content textAlign='left'>
                <Image
                    floated='left'
                    size='large'
                    avatar
                    src='/favicon.ico'
                />
                <Card.Header floated="right">{monster.user.username}</Card.Header>
            </Card.Content>


            <Image src={`${monster.imageUrl}`} wrapped ui={false} />
            <Card.Content>
                <Card.Header floated="right">{monster.title}</Card.Header>
                <Card.Description>
                    {monster.caption}
                </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign={'right'}>
                <Icon name={'heart'} size='large' color={'grey'} />
                {monster.likes.length} Likes

            </Card.Content>
        </Card>
    );
}

export default MonsterCard;
