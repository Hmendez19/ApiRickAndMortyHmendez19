const CharacterItem = (props) => {
    const {item}=props;
    const { name, image, gender, species, status } = item;
    return <>
        <div className='character-item'>
            <div>
                <img src={image} alt="Charater not found" />
            </div>
            <div>
                <div className='mb-2'>
                    <label className='fw-bold d-block'>Name:</label>
                    <span className='pl-3'>{name}</span>
                </div>
                <div className='mb-2'>
                    <label className='fw-bold d-block'>Gender:</label>
                    <span>{gender}</span>
                </div>
                <div className='mb-2'>
                    <label className='fw-bold d-block'>Species:</label>
                    <span>{species}</span>
                </div>
                <div className='mb-2'>
                    <label className='fw-bold d-block'>Status:</label>
                    <span>{status}</span>
                </div>
                {props.item.type && (
                    <div className='mb-2'>
                        <label className='fw-bold d-block'>Type:</label>
                        <span>{props.item.type}</span>
                    </div>
                )}

            </div>
        </div>
    </>;

}

export default CharacterItem;