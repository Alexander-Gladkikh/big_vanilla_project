
type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dima'},
        '102': {id: 102, name: 'Rita'},
        '103': {id: 103, name: 'Sasha'},
    }
})

test('should update corresponding user', () => {

    users[101].name = 'Katya';

    expect(users['101'].name).toBe('Katya');

})

test('should delete corresponding user', () => {

    delete users[101]

    expect(users['101']).toBeUndefined();

})
