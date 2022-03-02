import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from '../../components/Header/Header'
import AddMonster from '../../components/AddMonster/AddMonster'
import MonsterFeed from '../../components/MonsterFeed/MonsterFeed'
import * as monstersAPI from '../../utils/monsterApi';


export default function Feed() {

    const [monsters, setMonsters] = useState([])

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

    async function handleNewRandomUrl() {
        try {
            let imageSeed = ((Math.floor(Math.random() * 2147483640)).toString())
            return imageSeed
        } catch (err) {
            console.log(err)
        }
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
                    <Header />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddMonster startSeed={((Math.floor(Math.random() * 2147483640)).toString())} handleAddMonster={handleAddMonster} handleNewRandomName={handleNewRandomName} handleNewRandomUrl={handleNewRandomUrl} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>

                    <MonsterFeed monsters={monsters} numPhotosCol={1} />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}