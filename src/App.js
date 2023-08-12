import "./styles.css";
import Props2 from "./Component/Props2"
export default function App() {
  return (
    <div className="App">
       <Props2 
        h1 ="Why are there so many Web3 startups?"
        p = "This week ,Pitchbook published their latest emerging Tech Indicator report which tracks early stage investment activity......"
       img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuRHbb8kGSAXbRB6QZyWTyNPGhtI31ylhJAkB5IUQag&s"/>
       <Props2 
         h2 = "What Marriage Means to Me"
         p1 = "After dropping the kids off, I came home and stopped in the kitchen to take in the afternoon of our chaotic morning together."
        img2 =  "https://thegirlwholovedtowrite.com/wp-content/uploads/2015/09/marriage-1024x1024.jpg"
        />
       <Props2
        h3 = "Leaving San Francisco"
        p2 = "Letting go with Love"
        img3 = "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?cs=srgb&dl=pexels-pixabay-208745.jpg&fm=jpg"
       />
    </div>
  );
}
