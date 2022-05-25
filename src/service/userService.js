const users = [{
    id:1,
    name: "Sipeng He",
    avatarUrl: "/avatar.gif"
}]

export const getUserById = (id)=>{
    return users.find(user=>user.id ===id)
}

