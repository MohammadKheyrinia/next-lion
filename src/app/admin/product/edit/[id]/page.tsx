import UpdateForm from "../../../../components/editform";
import { getProductById } from "../../../lib/action";
import { notFound } from "next/navigation";

const updateProductPage = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div >
            <UpdateForm product={product} />
        </div>
    );
};

export default updateProductPage;