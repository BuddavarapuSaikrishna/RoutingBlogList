// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {BlogListObject} = props
  return (
    <ul className="blog-list-container">
      {BlogListObject.map(eachBlog => (
        <BlogItem key={eachBlog.id} BlogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
