import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
  const { items = [] } = props;

  return (
    <ul className="Content-section-list">
      {items.map((text, i) => (
        <li key={i}>{text}</li>
      ))}
    </ul>
  );
}

function SectionWithLists(props) {
  const { title, dataList = [] } = props;

  return (
    <section className="Content-section">
      <div className="Content-section-title">
        <h3>{title}</h3>
      </div>
      <div className="Content-section-description">
        {dataList.map((info, i) => (
          <div className="Content-description-container" key={i}>
            <div className="Content-section-headline">
              {info.title && <h3>{info.title}</h3>}
              {info.subtitle && (
                <p className="Content-section-subtitle">{info.subtitle}</p>
              )}
            </div>
            {Array.isArray(info.list) && <List items={info.list} />}
          </div>
        ))}
      </div>
    </section>
  );
}

SectionWithLists.propTypes = {
  title: PropTypes.string.isRequired,
  dataList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SectionWithLists;
