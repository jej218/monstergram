import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from '../../components/Header/Header'
import AddMonster from '../../components/AddMonster/AddMonster'
import MonsterFeed from '../../components/MonsterFeed/MonsterFeed'
import * as monstersAPI from '../../utils/monsterApi';
import * as likesAPI from '../../utils/likeApi';

export default function Feed({ user, handleLogout }) {

    const [monsters, setMonsters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function addLike(monsterId) {
        try {
            const data = await likesAPI.create(monsterId);
            getMonsters()
        } catch (err) {
            console.log(err)
        }
    }
    async function removeLike(likeId) {
        try {
            const data = await likesAPI.removeLike(likeId);
            getMonsters()
        } catch (err) {
            console.log(err)
        }
    }


    async function handleAddMonster(monsterInfo) {
        try {
            const data = await monstersAPI.create(monsterInfo)
            setMonsters(monsters => [data.monster, ...monsters])
        } catch (err) {
            console.log(err)
        }
    }

    async function handleNewRandomName() {
        try {
            const data = await monstersAPI.getRandName()
            return data.contents.names[0]
        } catch (err) {
            console.log(err)
        }
    }

    async function handleNewCategory() {

    }

    async function getMonsters() {
        try {
            const data = await monstersAPI.getAll();
            setMonsters([...data.monsters])
        } catch (err) {
            console.log(err, ' this is the error')
        }
    }

    useEffect(() => {
        getMonsters()
    }, [])

    return (
        <Grid centered >
            <Grid.Row>
                <Grid.Column>
                    <Header user={user} handleLogout={handleLogout} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddMonster startSeed={((Math.floor(Math.random() * 2147483640)).toString())} handleAddMonster={handleAddMonster} handleNewRandomName={handleNewRandomName} handleNewCategory={handleNewCategory} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>

                    <MonsterFeed
                        monsters={monsters}
                        numPhotosCol={1}
                        isProfile={false}
                        user={user}
                        addLike={addLike}
                        removeLike={removeLike}
                        loading={loading}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}