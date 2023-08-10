

const Post = ({params}: any) => {
  return (
    <div>
        <h1>Post</h1>
        <h3>{params.id}</h3>
    </div>
  )
}

export default Post