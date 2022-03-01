import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from '../../components/Header/Header'
import AddMonster from '../../components/AddMonster/AddMonster'
import MonsterFeed from '../../components/MonsterFeed/MonsterFeed'
import * as monstersApi from '../../utils/monsterApi';


export default function Feed(props) {

    const [monsters, setMonsters] = useState([])
    async function handleAddMonster(monsterInfo) {
        try {
            const data = await monstersApi.create(monsterInfo)
            console.log(data, ' < - this is the repsonse from the server, this will contain the info we want to use to update our posts state')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Header />
            <AddMonster handleAddMonster={handleAddMonster} />
            <MonsterFeed />
        </>
    )
}