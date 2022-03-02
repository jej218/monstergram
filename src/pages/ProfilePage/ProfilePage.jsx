import { useState, useEffect } from 'react'
import { Grid } from "semantic-ui-react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loader/Loader";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import MonsterFeed from "../../components/MonsterFeed/MonsterFeed";
import userService from "../../utils/userService";
import { useParams } from 'react-router-dom'
import * as likesAPI from '../../utils/likeApi'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


export default function ProfilePage(props) {
  const [monsters, setMonsters] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { username } = useParams()
  async function getProfile() {

    try {
      const data = await userService.getProfile(username)
      setLoading(() => false)
      setMonsters(() => data.monsters)
      setUser(() => data.user)
    } catch (err) {
      console.log(err);
      setLoading(() => false)
      setError('Profile Does not exist!')
    }
  }

  async function addLike(monsterId) {
    try {
      const data = await likesAPI.create(monsterId);
      getProfile();
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  }

  async function removeLike(likeId) {
    try {
      const data = await likesAPI.removeLike(likeId);
      getProfile();
    } catch (err) {
      console.log(err.message);
      setError(err.message)

    }
  }


  useEffect(() => {
    getProfile()
  }, [])

  if (loading) {
    return <Loading />;

  }

  if (error) {
    return (
      <>
        <Header />
        <ErrorMessage error={error} />;
      </>
    );

  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header handleLogout={props.handleLogout} user={props.user} />

        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
          <MonsterFeed
            isProfile={true}
            monsters={monsters}
            numPhotosCol={3}
            user={props.user}
            addLike={addLike}
            removeLike={removeLike}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
