<section class="property">
    <div class="container-xxl">
        <p class="section-subtitle">Properties listing</p>
        <h2 class="h2 section-title">Our Properties</h2>

        <ul class="property-list more-properties" id="more-properties-list">
           //  Dynamic property list will be inserted here
        </ul>
    </div>
</section>

  // Sample properties data
  const properties = [
    {
      title: "Comfortable Apartment",
      price: "$34,900/Month",
      description: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
      bedrooms: 3,
      bathrooms: 2,
      squareFt: 3450,
      imageSrc: "assets/images/property1/property-1.jpg",
      badge: "For Rent"
    },
    // More properties can be added in the same format
  ];

  // Render properties dynamically
  const propertyList = document.getElementById("more-properties-list");
  properties.forEach(property => {
    const listItem = document.createElement("li");
    listItem.classList.add(""); // Optionally add a class for specific styling

    listItem.innerHTML = `
      <div class="property-card more-properties-card">
        <figure class="card-banner">
          <img src="${property.imageSrc}" alt="${property.title}">
          <div class="card-badge green">${property.badge}</div>
        </figure>
        <div class="card-content">
          <div class="card-price">
            <strong>${property.price}</strong>/Month
          </div>
          <h3 class="h3 card-title">
            <a href="javascript:void(0)" class="property-card-link">${property.title}</a>
          </h3>
          <p class="card-text">${property.description}</p>
          <ul class="card-list p-0">
            <li class="card-item">
              <strong>${property.bedrooms}</strong>
              <ion-icon name="bed-outline"></ion-icon>
              <span>Bedrooms</span>
            </li>
            <li class="card-item">
              <strong>${property.bathrooms}</strong>
              <ion-icon name="man-outline"></ion-icon>
              <span>Bathrooms</span>
            </li>
            <li class="card-item">
              <strong>${property.squareFt}</strong>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path fill="none" stroke="#5d737e" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 6.5h2M11 18h2m-7-5v-2m12 2v-2M5 8h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m0 12h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m12 0h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1m0-12h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1" />
              </svg>
              <span>Square Ft</span>
            </li>
            <li class="call-now">
              <a href="tel:+1234567890" class="call-now-btn">Call Now</a>
            </li>
          </ul>
        </div>
      </div>
    `;

    propertyList.appendChild(listItem);
  });

