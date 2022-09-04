import React from 'react';

function AssociativeArray () {

    type UsersType = {
        [key: string]: {id: number, name: string}
    }

    const users: UsersType = {
        '101': {id: 101, name: 'Dima'},
        '102': {id: 102, name: 'Rita'},
        '103': {id: 103, name: 'Sasha'},
    }

let user = {id: 104, name: 'Roma'}
    users[user.id] = user
    delete users[102]
    users[101].name = 'Jon'
    console.log(users)

    return (
        <div>a</div>

    )
}

export default AssociativeArray