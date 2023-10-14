import ProductDescription from '@/components/ProductDescription/productDescription'
import ProductImages from '@/components/ProductImages/productImages'
import mockProduct from '@/services/utils'


export default function Home() {
  

  return (
    <main className='w-screen md:max-w-screen-2xl md:w-fit mx-auto mt-28 flex gap-20 flex-col md:flex-row px-4 mb-10 md:pt-20'>
      <ProductImages />
      <ProductDescription product={mockProduct} />
    </main>
  )
}
