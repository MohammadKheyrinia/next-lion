import { deleteProduct } from "../admin/lib/action";

export const DeleteButton = ({ id }: { id: string }) => {
    const DeleteProducttWithId = deleteProduct.bind(null, id);
    return (
        <form action={DeleteProducttWithId}>
            <button className="bg-red-500 text-white p-2 rounded-xl">
                حذف
            </button>
        </form>
    );
};
