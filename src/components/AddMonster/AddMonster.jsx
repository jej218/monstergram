import React, { useEffect, useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const monsterDetailUrl = 'https://api.fungenerators.com/name/generate?category=alien&limit=1&start='
const monsterImageUrlBase = 'https://app.pixelencounter.com/api/v2/basic/svgmonsters/'

const starterSeed = (Math.floor(Math.random() * 2147483640)).toString()

export default function AddMonster(props) {
    const [state, setState] = useState({
        name: '',
        caption: '',
        imageUrl: `${monsterImageUrlBase}${starterSeed}/image/png?size=300`
    })

    useEffect(() => {
        const makeApiCall = async () => {
            let nameSeed = (Math.floor(Math.random() * 200)).toString()
            const res = await fetch(`${monsterDetailUrl}${nameSeed}`, {
                headers: {
                    'X-Fungenerators-Api-Secret': '6YQ3XGQGA8rqGi0mrZtHFgeF',
                    'Content-Type': 'application/json'
                }
            }
            )
            const json = await res.json()
            console.log(json.contents.names)
            setState({
                ...state,
                name: json.contents.names[0]
            })
        }
        makeApiCall();
    }, [])

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.handleAddMonster(state)
    }
    function handleNewImage(e) {
        let imageSeed = (Math.floor(Math.random() * 2147483640)).toString()
        let monsterImageUrl = `${monsterImageUrlBase}${imageSeed}/image/png?size=300`
        setState({
            ...state,
            imageUrl: monsterImageUrl
        })
    }

    function handleNewName(e) {
        const makeApiCall = async () => {
            let nameSeed = (Math.floor(Math.random() * 200)).toString()
            const res = await fetch(`${monsterDetailUrl}${nameSeed}`, {
                headers: {
                    'X-Fungenerators-Api-Secret': '6YQ3XGQGA8rqGi0mrZtHFgeF',
                    'Content-Type': 'application/json'
                }
            }
            )
            const json = await res.json()
            setState({
                ...state,
                name: json.contents.names[0]
            })
        }
        makeApiCall();
    }
    return (
        <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

                <Segment>
                    <Form autoComplete="off" >
                        <img src={state.imageUrl} alt='' />
                        <Button
                            className="btn"
                            onClick={handleNewImage}
                        >NEW RANDOM MONSTER</Button>
                        <Form.Input
                            className="form-control"
                            name="name"
                            value={state.name}
                            placeholder={state.name}
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
                            onClick={handleSubmit}
                        >
                            ADD MONSTER
                        </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid >
    )
}
