import React from 'react'
import {
  Link
} from 'react-router-dom'

export default function UserList ({ userList }) {
  return (
    <div>
      <section className="row">
        {userList.length > 0 && userList.map(user =>
          <div className="col" key={user.id}>
            <div className="card">
              <img className="card-img-top" src={user.avatar} alt={user.name} />
              <div className="card-body">
                <h4 className="card-title">{user.name}</h4>
                <Link className="btn btn-primary" to={`/users/${user.id}`}>More</Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
