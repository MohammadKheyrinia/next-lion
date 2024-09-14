import Link from "next/link";
import { getProductlist } from "./lib/action";
// import { getData } from "./lib/action";
import { formatDate } from "./lib/utils";
import { DeleteButton } from "../components/deletebtn";

const Product = async ({ query }: { query: string }) => {
  // const Products = await getData(query);
  const Products = await getProductlist(query);
  return (
    <table className="mt-36 pl-[15px] pr-[15px] sm:w-[500px] ml-auto mr-auto fixed left-0 right-0 top-0 z-50 shadow-[0_15px_20px_-20px_rgba(0,0,0,.1)]">
      <thead className="text-md text-[#737373] uppercase ">
        <tr>
          <th className="py-3 px-6">نام محصول</th>
          <th className="py-3 px-6">قیمت</th>
          <th className="py-3 px-6">تاریخ</th>
          <th className="py-3 px-6 text-center">عملیات</th>
        </tr>
      </thead>
      <tbody>
        {Products.map((rs) => (
          <tr key={rs.id} className="bg-white border-b">
            <td className="py-3 px-6">{rs.name}</td>
            <td className="py-3 px-6">{rs.price}</td>
            <td className="py-3 px-6">
              {formatDate(rs.createdAt.toString())}
            </td>
            <td className="flex justify-center gap-1 py-3">
              <Link
                href={`admin/product/edit/${rs.id}`}
                className="bg-blue-500 text-white p-2 rounded-xl"
              >
                ادیت
              </Link>
              <DeleteButton id={rs.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Product;
