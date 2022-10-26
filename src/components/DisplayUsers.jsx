

export default function DisplayUsers({ user, users, index, setSelectedUser }) {

    function handleClick() {
        console.log(users, index, users[index])
        setSelectedUser(users[index])
    }

    return (
        <h3 onClick={handleClick}>{user.name}</h3>
    )
}