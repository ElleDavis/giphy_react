import GiphyItem from "./GiphyItem"

const GiphyList = (props)=> {
    const {gif}= props
    return(
        <div>
            <h1>GiphyList</h1>
            <h3>{gif.map(item => <GiphyItem item={item} key={item.id}/>)}</h3>
        </div> 
    )
}
export default GiphyList