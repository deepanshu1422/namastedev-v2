export async function fetchCourse(courseId: string, countryCode: string) {
    const query = `
query($courseId: String!,$countryCode:String!) {
  courseCollection(where: { courseId: $courseId }) {
    items {
      sys {
        id
      }
      title
      pricingsCollection(where :{countryCode : $countryCode}){
        items{
          countryCode,
          currencyCode,
          amount
        }
      }
      couponCodesCollection(limit:5){
        items{
          title
          couponCode,
          discountType,
          value,
          minAmount,
          maxAmount
        }
      }
    }
  }
}
  `;

    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query, variables: { courseId, countryCode } }),
        }
    ).then((response) => response.json());
}

export async function fetchBundle(bundleId: string, countryCode: string) {
    const query = `
    query($bundleId: String!, $countryCode: String!) {
  bundleCollection(where: { bundleId: $bundleId }, limit: 1) {
    items {
      coursesCollection(limit: 10) {
        items {
          courseId
        }
      }
      pricingsCollection(where: { countryCode: $countryCode }, limit: 5) {
        items {
          countryCode
          currencyCode
          amount
        }
      }
    }
  }
}
    `
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query, variables: { bundleId, countryCode } }),
        }
    ).then((response) => response.json());
}