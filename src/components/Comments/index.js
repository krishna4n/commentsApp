import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comment extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
    likeImage: false,
  }

  onNameChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onCommentChange = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      likeImage: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  commentDelete = id =>
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
    }))

  likeClicked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, likeImage: !eachComment.likeImage}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length

    return (
      <div className="container">
        <div className="comments-container">
          <div className="add-comments">
            <h1 className="heading">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form className="add-input-form" onSubmit={this.onAddComment}>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={name}
                onChange={this.onNameChange}
              />
              <textarea
                rows="5"
                className="comment-input"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onCommentChange}
              />
              <div>
                <button type="submit" className="button">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <hr className="bar" />
        </div>
        <div className="bottom-comments-container">
          <div className="count-container">
            <p className="count">{count}</p>
            <p>Comments</p>
          </div>
        </div>
        <ul className="comment-details">
          {commentsList.map(each => (
            <CommentItem
              comments={each}
              key={each.id}
              commentDelete={this.commentDelete}
              likeClicked={this.likeClicked}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comment
