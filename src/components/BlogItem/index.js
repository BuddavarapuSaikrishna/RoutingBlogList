// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishedDate} = BlogDetails
  return (
    <li>
      <div className="post-container">
        <h1 className="heading">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
