import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price,_id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`} className="btn btn-primary">Buy Now</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;