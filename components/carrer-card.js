const CarrerCard = (props) => {

    const {carrerName, firstTag, secondTag} = props;

    return(
        <div>
            <h2>{carrerName}</h2>
            <div>
                <h3>{firstTag}</h3>
                <h3>{secondTag}</h3>
            </div>
        </div>
    );

}

export default CarrerCard;