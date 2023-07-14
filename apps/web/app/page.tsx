import { db } from "@lib/db"
import { ProductType, product } from "@lib/db/schema"


// oh yeah, this is the future
export const runtime = 'edge'

export default async function Home() {
  const products = await db.select().from(product)
  console.log(products)
  const createUser = async () => {
    'use server'

    const newProduct: Omit<ProductType, 'id'> =  {
        model: 'model',
        brand: 'brand',
        image: 'image',
        price: '700',
        group: 'group 0',
        security_rules: 'Norma R44/04',
        fixation_system: 'Isofix',
        details: 'details',
        adac_point: 1,
        adac_security_point: 1,
        plus_test: 'yes',
        description: 'description',
        url: 'url',
      }

    await db.insert(product).values(newProduct)
  }

  return (
    <>
      <p>my products:</p>
      {products.map((product) => (
        <div key={product.id}>{product.model}</div>
      ))}

      <form action={createUser}>
        <button>create product</button>
      </form>
    </>
  )
}