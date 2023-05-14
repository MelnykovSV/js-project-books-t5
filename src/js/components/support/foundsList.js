export function renderFoundsList(founds) {
  const markup = founds
    .map(
      ({ id, imgUrl, img2xUrl, companyName, linkSupport }) => `
     <div class="swiper-slide founds-list__item">
        <a class="founds-list__link" href="${linkSupport} rel="nofollow noopener noreferrer" target="_blank">
          ${id.padStart(2, '0')}
          <img
            class="founds-list__icon"
            srcset="${imgUrl} 1x,${img2xUrl} 2x"
            src="${imgUrl}"
            alt="${companyName}"
          />
        </a>
      </div>
    `
    )
    .join('');

  return `
  <div class="swiper-wrapper founds-list">
      ${founds.length < 12 ? markup + markup : markup}
    </div>
    `;
}
