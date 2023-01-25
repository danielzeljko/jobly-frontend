import "./CompanyCard.css"
import { Link } from "react-router-dom"

function CompanyCard({ handle, description, logo }) {
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>{handle}</Link>
      <p>{description}</p>
      <img src={logo} alt={handle}/>
    </div>
  );
}

export default CompanyCard;