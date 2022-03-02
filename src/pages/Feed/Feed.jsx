import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from '../../components/Header/Header'
import AddMonster from '../../components/AddMonster/AddMonster'
import MonsterFeed from '../../components/MonsterFeed/MonsterFeed'
import * as monstersAPI from '../../utils/monsterApi';


export default function Feed() {

    const [monsters, setMonsters] = useState([])

    async function handleAddMonster(monsterInfo) {
        console.log(monsterInfo, 'monsterInfo')
        try {
            const data = await monstersAPI.create(monsterInfo)
            console.log(data, ' < - this is the repsonse from the server, this will contain the info we want to use to update our posts state')
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
    return (
        <>
            <Header />
            <AddMonster handleAddMonster={handleAddMonster} handleNewRandomName={handleNewRandomName} />
            <MonsterFeed />
        </>
    )
}