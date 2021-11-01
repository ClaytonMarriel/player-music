import { headerInfo, tracks } from "../services/api"
import PlaylistHeader from "./components/PlaylistHeader"
import PlaylistItems from "./components/PlaylistItems"

const Player = () => {
    return (
        <div className="player-container">
            <PlaylistHeader {...headerInfo} />
           {tracks.map(track => (
                <PlaylistItems {...track} key={track.id} />
           ))} 
        </div>
    )
}

export default Player