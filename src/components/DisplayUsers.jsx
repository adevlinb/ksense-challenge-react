

export default function DisplayUsers({ user, users, index, setSelectedUser, getPosts }) {

    function handleClick() {
        setSelectedUser(users[index])
        getPosts(users[index].id)
    }

    return (
        <h3 onClick={handleClick}>{user.name}</h3>
    )
}