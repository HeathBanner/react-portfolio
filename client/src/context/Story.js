import React from 'react';
import io from 'socket.io-client';

export  const CTX = React.createContext();

const initState = {
    chats: {},
}

const channels = [];
var currentChannel = "";

function reducer(state=initState, action) {
    const { from, msg, to } = action.payload.msg;

    console.log(from, msg, to);
    switch(action.type) {
        case 'RECIEVE_MESSAGE':
            if(state.chats[to]) {
                return {
                    ...state,
                    chats: {
                        ...state.chats,
                        [currentChannel]: [...state.chats[currentChannel], {from, msg}]
                    }
                }
            } else {
                return {
                    ...state,
                    chats: {
                        ...state.chats,
                        [channels[currentChannel]]: [{from, msg}]
                    }
                }
            }

        case 'NEW_ROOM':
            const nextState = {...state};
            nextState[to] = [];
            return {
                nextState
            }
        default:
            return state
    }
}
let socket;


function Store(props) {
    

    const [chats, dispatch] = React.useReducer(reducer, initState);
        function sendChatAction(value) {
            socket.emit('chat message', value);
        }
    
    if(props.username) {
        socket.emit('new user', props.username)
    }

    if (!socket) {
        socket = io(':3001');

        socket.on('chat message', function(res) {
            if(res.msg.to !== user) {channels.push(res.msg.to); currentChannel=res.msg.to}
            else if(res.msg.from !== user){channels.push(res.msg.from); currentChannel=res.msg.from}
            console.log(channels)
            console.log(res.msg)

            dispatch({type: 'RECIEVE_MESSAGE', payload: res});
        })
    }
    
    const user = props.username ? props.username.username : 'Anon';

    return (
        <CTX.Provider value={{chats, sendChatAction, user, channels}}>
            {props.children}
        </CTX.Provider>
    )
}

export default Store