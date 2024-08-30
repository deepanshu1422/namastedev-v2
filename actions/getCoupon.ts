'use server'

type Res = {
    data: {
        couponCollection: {
            items: [{
                couponCode: string,
                maxAmount: number,
                value: number
            }]
        }
    }
}

export default async function getCoupons({ couponCode }: { couponCode: string }) {

    const query = `query {
  couponCollection(where: {couponCode: "${couponCode.toUpperCase()}"}, limit: 1){
    items{
      couponCode,
      maxAmount,
      value	
    }
  }
}`

    const fetchedData = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({ query }),
    })

    const data: Res = await fetchedData.json()

    if (!data.data.couponCollection.items.length) return { error: true, message: "No Such Coupon Exists", data: null }

    return {
        error: false,
        message: `Hurry! Coupon Applied, You saved ${data.data.couponCollection.items[0].value}% upto max INR${data.data.couponCollection.items[0].maxAmount}`,
        data: data.data.couponCollection.items[0]
    }
}