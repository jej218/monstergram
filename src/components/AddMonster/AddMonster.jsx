import React, { useEffect, useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


const monsterDetailUrl = 'https://api.fungenerators.com/name/generate?category=alien&limit=1&start='
const monsterImageUrlBase = 'https://app.pixelencounter.com/api/v2/basic/svgmonsters/'

export default function AddMonster({ handleAddMonster, handleNewRandomName, handleNewRandomUrl, startSeed }) {
    const [starterSeed, setStarterSeed] = useState(startSeed)
    const [state, setState] = useState({
        title: '',
        caption: '',
        imageUrl: `${monsterImageUrlBase}${starterSeed}/image/png?size=300`
    })
    useEffect(() => {
        const makeApiCall = async () => {
            let newName = await handleNewRandomName()
            setState({
                ...state,
                title: newName
            })
        }
        makeApiCall()
    }, [])
    useEffect(() => {
        const changeUrl = async () => {
            setState({
                ...state,
                imageUrl: `${monsterImageUrlBase}${starterSeed}/image/png?size=300`
            }
            )
        }
        changeUrl();
    }, [])

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const submitData = {
            'title': state.title,
            'caption': state.caption,
            'imageUrl': state.imageUrl
        }
        handleAddMonster(submitData).then(function () {
            handleNewName(e)
        })
    }

    function handleNewImage(e) {
        e.preventDefault()
        let seed = Math.floor(Math.random() * 2904).toString()
        const changeUrl = async () => {
            setState({
                ...state,
                imageUrl: `${monsterImageUrlBase}${seed}/image/png?size=300`
            })
        }
        changeUrl();
    }

    function handleNewName(e) {
        if (e) {
            e.preventDefault()
        }
        const makeApiCall = async () => {
            let newName = await handleNewRandomName()
            setState({
                ...state,
                title: newName
            })
        }
        makeApiCall();
    }
    return (
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

                <Segment>
                    <Form autoComplete="off"
                        onSubmit={handleSubmit}>
                        <img src={state.imageUrl} alt='' />
                        <Button
                            className="btn"
                            onClick={handleNewImage}
                        >NEW RANDOM MONSTER</Button>
                        <Form.Input
                            className="form-control"
                            name="title"
                            value={state.title}
                            placeholder={state.title}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            className="btn"
                            onClick={handleNewName}
                        >NEW RANDOM NAME</Button>
                        <Form.Input
                            className="form-control"
                            name="caption"
                            value={state.caption}
                            placeholder="Would you like to make a caption for this monster?"
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            className="btn"
                        >
                            ADD MONSTER
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid >
    );
}
