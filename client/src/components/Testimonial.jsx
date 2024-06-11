const Testimonial = ({img, biography, name, title}) => {

    return (
        <div className="testimonial">
            <div className="testimonial-img">
                <img alt={name} src={img}/>
            </div>
            <p className="testimonial-biography">{biography}</p>
            <h4 className="testimonial-name">{name}</h4>
            <p className="testimonial-title">{title}</p>
        </div>
      );
    };
    
export default Testimonial;