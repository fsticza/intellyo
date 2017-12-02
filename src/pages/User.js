import React from 'react'

export default function User({ userList, match }) {
  const { userId } = match.params
  const user = userList.find(user => user.id === userId)
  if (!user) {
    return null
  }
  return (
    <article>
      <h1>{user.name}</h1>
      <p>{user.description}</p>
    </article>
  )
}
