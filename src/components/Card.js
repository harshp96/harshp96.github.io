import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <div className="card m-2">
            <img className="card-img-top" src={props.item.urlToImage} alt={props.item.title} />
            <div className="card-body">
                <a href={props.item.url} target="_blank" rel="noopener noreferrer">
                {props.item.title}
                </a>
                <p class="card-text">
                    <small class="text-muted">-{props.item.author}</small><br/>
                    <small class="text-muted">{props.item.publishedAt}</small>
                    </p>
            </div>
        </div>
    )
}

// Card.defaultProps = {
//     desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
// };

// Card.propTypes = {
//     imageUrl: PropTypes.string.isRequired,
//     desc: PropTypes.string
// };
