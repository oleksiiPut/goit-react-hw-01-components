// import css from './FriendList.module.css';
import {Li, Span, P, Img} from './FriendList.styled'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <Li>
            <Span isOnline={isOnline}></Span>
  <Img src={avatar} alt={name} width="48" />
            <P>{name}</P>
        </Li>
    );
}

