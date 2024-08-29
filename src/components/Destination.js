import Mountain1 from "../asset/1.jpg"
import Mountain2 from "../asset/2.jpg"
import Mountain3 from "../asset/3.jpg"
import Mountain4 from "../asset/4.jpg"
import "./DestinationStyles.css"
 

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1> 
            <p>Tours gives you the opputunity to see a lot,within a time frame</p>
            <div className="first-des">
            
            <div className="des-text">
               <h2>Taal Volcano, Bantanges</h2>
               <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island, if you fancy a closer look,the hike up to the crater is a mere 45 minutes, and is easy enough for beginneers.Guides will assit you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!
               </p>

            </div>
            <div className="image">
                <img alt="img" src={Mountain1}/>
                <img alt="img" src={Mountain2}/>

            </div>
            </div>
        
        
        </div>


    )
}

export default Destination