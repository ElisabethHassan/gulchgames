import '../styles/WorkoutCard.css'

export default function WorkoutCard({ time, title, description, className = "", timeButtonClass = ""}) {
    return (
        <div className={`wcard ${className}`}>
            <p id="timeButton" className={timeButtonClass}>{time}</p>
            <div className='bottom'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

// export default function WorkoutCard({time, title, description}){
//     return (
//         <div className="wcard">
            
//             <p id="timeButton">{time}</p>

//             <div className='bottom'>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// }


//  SHORTCUTS
//         shift + option -> to copy something over 
//         shift + 1 -> emmet abbrev
//         option + z -> make the code bound so you can see the whole thing
        
       