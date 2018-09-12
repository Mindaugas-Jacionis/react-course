import React from 'react';
import './index.css';

function Header() {
  const portrait =
    'https://cdn.shopify.com/s/files/1/0784/0801/products/Cthulhu_S_F_400x.jpg?v=1508421201';

  return (
    <header className="Header">
      <h1 className="Header-headline">Chtullu</h1>
      <hr />
      <img
        className="Header-image"
        src={portrait}
        alt="chtullu profesional portriat"
      />
      <div className="Header-content">
        <p className="Header-contacts">
          <span>Phone</span> +37069999999
        </p>
        <p className="Header-contacts">
          <span>Email</span> email@test.com
        </p>
        <p className="Header-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          posuere quis arcu id consequat. Curabitur a fringilla massa, sed
          cursus nisi. Integer vulputate sit amet ligula ac venenatis. Sed
          ullamcorper id lacus a suscipit. Ut eu imperdiet tortor. In hac
          habitasse platea dictumst. Maecenas risus ligula, malesuada vitae nibh
          et, dapibus rhoncus augue. Integer non felis sagittis, cursus diam a,
          luctus lectus. Cras porttitor tellus et dolor cursus feugiat sit amet
          quis augue. Praesent dui mauris, porttitor eu mollis id, sagittis quis
          mauris.
        </p>
      </div>
    </header>
  );
}

export default Header;
