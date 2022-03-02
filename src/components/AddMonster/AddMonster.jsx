import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Form, Grid, Header, Segment } from 'semantic-ui-react'

const monsterImageUrlBase = 'https://app.pixelencounter.com/api/v2/basic/svgmonsters/'

export default function AddMonster({ handleAddMonster, handleNewRandomName, handleNewCategory, startSeed }) {
    const [starterSeed, setStarterSeed] = useState(startSeed)
    const [state, setState] = useState({
        title: '',
        caption: '',
        imageUrl: `${monsterImageUrlBase}${starterSeed}/image/png?size=300`
    })
    const [selection, setSelection] = useState('alien')
    const [colorVariation, setColorVariation] = useState(Math.random().toString())

    const nameTypes = [
        {
            key: 'alien',
            text: 'alien',
            value: 'alien'
        },
        {
            key: 'dragon',
            text: 'dragon',
            value: 'dragon'
        },
        {
            key: 'elf',
            text: 'elf',
            value: 'elf'
        },
        {
            key: 'pirate',
            text: 'pirate',
            value: 'pirate'
        },
        {
            key: 'pokemon',
            text: 'pokemon',
            value: 'pokemon'
        },
        {
            key: 'demon',
            text: 'demon',
            value: 'demon'
        }
    ]

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

    function newType(e) {
        e.preventDefault()
        console.log(e.target)
    }

    return (
        <Grid textAlign='center' verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

                <Segment>
                    <Form autoComplete="off"
                        onSubmit={handleSubmit}>
                        <img src={state.imageUrl} alt='' />
                        <Button
                            style={{ margin: '15px' }}
                            className="btn"
                            onClick={handleNewImage}
                        >NEW RANDOM MONSTER</Button>
                        <Segment.Group>
                            <Segment>
                                <Form.Input
                                    className="form-control"
                                    name="title"
                                    value={state.title}
                                    placeholder={state.title}
                                    onChange={handleChange}
                                    required
                                />
                            </Segment>
                            <Segment.Group>
                                <Segment>
                                    <Button
                                        style={{ margin: '15px' }}
                                        className="btn"
                                        onClick={handleNewName}
                                    >NEW RANDOM NAME</Button>
                                </Segment>
                            </Segment.Group>
                        </Segment.Group>
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
