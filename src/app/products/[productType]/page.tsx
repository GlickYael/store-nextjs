import Products from '../../../components/Products';
import getUrl from '../../../services/urlConculate'

export default async function Page({
    params,
}: {
    params: Promise<{ productType: string }>
}) {
    const productType = (await params).productType
    const url = getUrl(productType);
    return <Products catagory={productType} url={url}/>
}

