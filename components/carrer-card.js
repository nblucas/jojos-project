const CarrerCard = (props) => {

    const {carrerName, firstTag, secondTag} = props;

    return(
        <div className="flex flex-direction-column justify-between tags-gap carrer-square">
            <h2>{carrerName}</h2>
            <div className="flex justify-start tags-gap">
                <h3 className="tag">{firstTag}</h3>
                <h3 className="tag">{secondTag}</h3>
            </div>
        </div>
    );

}

export default CarrerCard;