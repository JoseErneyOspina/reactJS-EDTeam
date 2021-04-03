import React from 'react';
import '../../styles/styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* const curso = {
    "title": "React desde cero",
    "image": "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
    "price": "50usd"
}; */

const CourseCard = ({id, title, image, price, Professor}) => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image ? image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQez62kGYiy1nDtps9DNsyCB9mP2Iyul59afA&usqp=CAU"} alt={title ? title : "No hay titulo"} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src="https://edteam-media.s3.amazonaws.com/courses/medium/3ec614b5-a9b7-475c-bf8f-8ba643a129eb.png" alt="Otra imagen"/>t
                </div>
                </div>
                    <span className="small">{`${Professor}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://facebook.com">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
)

CourseCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    professor: PropTypes.string,
}
CourseCard.defaultProps = {
    title: "No se encontro titulo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQez62kGYiy1nDtps9DNsyCB9mP2Iyul59afA&usqp=CAU",
    price: "__",
    professor: "",
}

export default CourseCard;