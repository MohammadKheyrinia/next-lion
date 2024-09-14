'use client'

import { useFormState } from "react-dom"
import { updateProduct } from "../admin/lib/action"
import { Product } from '@prisma/client'

const UpdateForm = ({ product }: { product: Product }) => {
    const updateProductwithid = updateProduct.bind(null, product.id)
    const [state, formAction] = useFormState(updateProductwithid, null)
    return (
        <div className="mt-[120px] max-w-[1380px] 2xl:w-[1440px] xl:w-[1200px] lg:w-[992px] md:w-[768px]  sm:w-[576px]">
            <div>
                <strong>
                    بروزرسانی محصول
                </strong>
            </div>
            <form action={formAction}>
                <div className='p-3'>
                    <h1>نام محصول</h1>
                    <input className='p-2 mt-3 w-full border-[1px] rounded-md'
                        type="text" id="name" name='name' defaultValue={product.name} />
                    <div id="name-error">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>
                <div className='p-3'>
                    <h1>قیمت محصول</h1>
                    <input className='p-2 mt-3 w-full border-[1px] rounded-md'
                        type="number" id="price" name='price' defaultValue={product.price}
                    />
                    <div id="name-error">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.price}</p>
                    </div>
                </div>
                <div className='p-3'>
                    <h1>درباره محصول</h1>
                    <input className='p-2 mt-3 w-full border-[1px] rounded-md'
                        type="text" id="description" name='description' defaultValue={product.description} />
                    <div id="name-error">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.description}</p>
                    </div>
                </div>
                {/* <div className='p-3'>
            <h1 >تصویر</h1>
            <input className='p-2 mt-3 w-full border-[1px] rounded-md'
              type="file" id="imagePath" name='file' />
          </div> */}
                <div className='p-3 mr-1'>
                    <button type="submit" className='p-2 mt-3  bg-[#25ac9e] text-white rounded-lg'>بروزرسانی</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateForm