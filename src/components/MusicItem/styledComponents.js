import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-syle-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  margin: 20px;
`

export const MusicTrackImage = styled.img`
  height: 120px;
  width: 160px;
  margin-right: 20px;
`

export const NameGenreContainer = styled.div``

export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const DurationDeleteContainer = styled.div`
  display: flex;
  alifn-items: center;
`
export const Duration = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: bold;
  margin-right: 50px;
`
export const DeleteButton = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  color: #ffffff;
`
