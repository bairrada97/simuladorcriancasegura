import { Icon } from "./components/Icon";
import { Rating, RatingItem } from "./components/Rating";

// oh yeah, this is the future
export const runtime = "edge";

export default async function Home() {
  // const products = await db.select().from(produc t)
  // console.log(products)
  // const createUser = async () => {
  //   'use server';

  //   const newProduct: Omit<ProductType, 'id'> = {
  //     model: 'model',
  //     brand: 'brand',
  //     image: 'image',
  //     price: '700',
  //     group: 'group 0',
  //     security_rules: 'Norma R44/04',
  //     fixation_system: 'Isofix',
  //     details: 'details',
  //     adac_point: 1,
  //     adac_security_point: 1,
  //     plus_test: 'yes',
  //     description: 'description',
  //     url: 'url',
  //   };

  //   await db.insert(product).values(newProduct);
  // };

  return (
    <>
      <p className="text-m-02--dark-01 font-medium uppercase after:top-0">
        my products:
      </p>
      <Rating ratingValue={1.1} />
      <br />
      {[0.6, 1.6, 2.6, 3.6, 4.6].map((ratingValue) => {
        return <RatingItem ratingValue={ratingValue} />;
      })}

      <br />
      {/* <CardOptionsItems type={'rating'}/> */}
      <Icon icon="add_circle" color="m-01" size="48" />
      {/* {products.map((product) => (
        <div key={product.id}>{product.model}</div>     
      ))}

      <form action={createUser}>
        <button>create product</button>
      </form> */}
    </>
  );
}
