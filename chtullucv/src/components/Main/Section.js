import React from 'react';
import PropTypes from 'prop-types';

function InfoList(props) {
  const { items = [] } = props;

  return items.map((info, i) => {
    if (typeof info === 'string') {
      return (
        <p className="Content-section-info" key={i}>
          {info}
        </p>
      );
    }

    return (
      <p className="Content-section-info" key={i}>
        <span className="Content-info-bold">{info.title}:</span> {info.text}
      </p>
    );
  });
}

function Section(props) {
  const { title, descriptionTitle, descriptionSubTitle, info } = props;
  const isInfoArray = Array.isArray(info);

  return (
    <section className="Content-section">
      <div className="Content-section-title">
        <h3>{title}</h3>
      </div>
      <div className="Content-section-description">
        <div className="Content-section-headline">
          {descriptionTitle && <h3>{descriptionTitle}</h3>}
          {descriptionSubTitle && (
            <p className="Content-section-subtitle">{descriptionSubTitle}</p>
          )}
        </div>
        {isInfoArray ? (
          <InfoList items={info} />
        ) : (
          <p className="Content-section-info">{info}</p>
        )}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionTitle: PropTypes.string,
  info: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
    ),
  ]).isRequired,
  descriptionSubTitle: PropTypes.string,
};

Section.defaultProps = {
  descriptionTitle: undefined,
  descriptionSubTitle: undefined,
};

InfoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])
  ).isRequired,
};

export default Section;
