import React from 'react'
import { useSelector } from 'react-redux'

import { 
  ProfilePage,
  ProfileHeader,
  ProfileInfo 
} from './styles.js'
import Header from '../../components/Header'

import {
  Content
} from './styles.js'

const Profile = ({ history }) => {
  const devInfo = useSelector(state => state.dev.devInfo)
  return(
    <ProfilePage>
      <Header 
        name={devInfo.name}
        username={devInfo.github_username}
        profilePhoto={devInfo.avatar_url}
        history={history}
      />
      <Content>
        <ProfileHeader>
          <img src={devInfo.avatar_url} alt=""/>
          <ProfileInfo>
            <span>{devInfo.name}</span>
            <span>{devInfo.github_username}</span>
            <p>"{devInfo.bio}"</p>
            <span><strong>02</strong> Publicações | <strong>18</strong> Conexões</span>
          </ProfileInfo>
        </ProfileHeader>
      </Content>
    </ProfilePage>
  )
}

export default Profile