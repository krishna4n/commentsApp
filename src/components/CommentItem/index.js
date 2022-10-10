import './index.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CommentItem = props => {
  const {comments, commentDelete, likeClicked} = props
  const {id, name, comment, likeImage} = comments
  let initial
  if (name !== '') {
    initial = name[0].toUpperCase()
  }
  const deleteComment = () => {
    commentDelete(id)
  }
  const clickedLike = () => {
    likeClicked(id)
  }
  const timeDiff = formatDistanceToNow(new Date())
  const imageLike =
    likeImage === true
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li>
      <div className="comment-top">
        <span className="initial-circle amber">{initial}</span>
        <p className="name">{name}</p>
        <p className="time">{timeDiff} </p>
      </div>
      <p>{comment}</p>
      <div className="comment-bottom">
        <div className="like-content">
          <button type="button" className="like-button" onClick={clickedLike}>
            <img src={imageLike} alt="like" className="like" />
          </button>
          <p>Like</p>
        </div>
        <button type="button" onClick={deleteComment} className="del-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
