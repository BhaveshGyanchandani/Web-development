import Initial_BrandWise_Product from './Initial_BrandWise_Product.json';

export const calculateFinalPrice = (products) => {
  return products.map((Brand) => ({
    ...Brand,
    BrandData: Brand.BrandData.map((category) => ({
      ...category,
      Data: category.Data.map((item) => ({
        ...item,
        SubData: item.SubData.map((content) => ({
          ...content,
          DataSize: Array.isArray(content.DataSize)
            ? content.DataSize.map((dataSize) => ({
                ...dataSize,
                name: `${item.name} ${content.size}`, // Using item.name from Data
                FinalPrice: parseFloat(
                  (dataSize.InitialPrice * (1 - dataSize.Discount / 100)).toFixed(2)
                ),
              }))
            : {
                ...content.DataSize,
                name: `${item.name} ${content.size}`, // Using item.name from Data
                FinalPrice: parseFloat(
                  (content.DataSize.InitialPrice * (1 - content.DataSize.Discount / 100)).toFixed(2)
                ),
              },
        })),
      })),
    }))
  }));
};

export const BrandWise_Product = calculateFinalPrice(Initial_BrandWise_Product);
