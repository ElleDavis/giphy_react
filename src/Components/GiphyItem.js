const GiphyItem = (props)=>{
    const { item }= props
    // const{item: {title,images}}=props
    // const{title}=item
    return(
        <div>
            <h4>GiphyItem</h4>
           <h1> {item.title}</h1>
            <img src={item.images.original.url} alt={"item.title"} />
        </div>
    )
}
export default GiphyItem