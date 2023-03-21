// Utilitize bootstrap cards to create a custom card with given properties
function CustomCard({ imageSrc, title, text, URL, buttonText }) {
    return (
        <div className="card">
            <img className="card-img-top" src={imageSrc} alt="Project" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer">
                <a href={URL} target="_blank" rel="no-referrer" className="btn btn-primary">
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

export default CustomCard;
