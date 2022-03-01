import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'
import Header from '../../components/Header/Header'
import AddMonster from '../../components/AddMonster/AddMonster'
import MonsterFeed from '../../components/MonsterFeed/MonsterFeed'


export default function Feed(props) {
    return (
        <>
            <Header />
            <AddMonster />
            <MonsterFeed />
        </>
    )
}