import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'


export default function AddMonster(props) {
    const [selectedFile, setSelectedFile] = useState('')
    const [state, setState] = useState({
        caption: '',
        title: ''
    })

    function handleFileInput(e) {
        setSelectedFile(e.target.files[0])
    }
    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', selectedFile)
        formData.append('caption', state.caption)
        formData.append('title', state.title)
        props.handleAddMonster(formData)
    }


    return (
        <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Segment>

                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Form.Input
                            className="form-control"
                            type="file"
                            name="photo"
                            placeholder="upload image"
                            onChange={handleFileInput}
                        />
                        <Form.Input
                            className="form-control"
                            name="title"
                            value={state.title}
                            placeholder="What would you like to name your monster?"
                            onChange={handleChange}
                            required
                        />
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
        </Grid>

    )
}
