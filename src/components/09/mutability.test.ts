
function icreaseAge (u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Sasha',
        age: 28,
        address: {
            title: 'Minsk'
        }
    }

   icreaseAge(user);

    expect(user.age).toBe(29)

    const superman = user

    superman.age = 1000;

    expect(user.age).toBe(1000)

})

test('array reference test', () => {
    let users =[
        {
            name: 'Sasha',
            age: 28,
        },
        {
            name: 'Sasha',
            age: 28,
        },
    ]

    let admins = users

    admins.push({name: 'Bandit', age: 30});

    expect(users[2]).toEqual({name: 'Bandit', age: 30});

})