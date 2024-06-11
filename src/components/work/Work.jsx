import { Link } from "react-router-dom"
const Work = (props) => {
    return(
        <tr>
            <td>{props.date}</td>
            <td>{props.company}</td>
            <td>{props.service}</td>
            <td>{props.description}</td>
            <td>{props.from}</td>
            <td>{props.to}</td>
            <td><button className="btn btn-primary">Edit</button></td>
            <td><button  className="btn btn-primary">Remove</button></td>
        </tr>
    )
}

export default Work