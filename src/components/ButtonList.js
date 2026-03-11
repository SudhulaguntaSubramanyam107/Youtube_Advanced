import Button from "./Button"
const Buttonlist = ()=>{
    const buttonListName = ["All","Music","Mixes", "Telugu cinema", "Movie Musicas", "AI", "One day internations", "Computer programming","Comedy","Jai hanuman"]
    return (
        <div className="flex gap-5 whitespace-nowrap">
            {buttonListName.map(item=>(<Button key = {item} name = {item}/>))}
        </div>
    )
}

export default Buttonlist