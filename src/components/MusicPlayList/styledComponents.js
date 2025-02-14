import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`

export const ArtistBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 450px;
  background-size: cover;
  padding-left: 20px;
`

export const ArtistName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: bold;
`

export const ArtistInfo = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 400;
`

export const SongsPlayListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
`
export const PlayListHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
`
export const SerachInput = styled.input`
  height: 40px;
  width: 18%;
  padding-left: 15px;
  color: #cbd5e1;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`

export const MusicList = styled.ul`
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const NoSongsHeading = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: bold;
`
