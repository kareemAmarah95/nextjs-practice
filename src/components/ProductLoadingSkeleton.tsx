const ProductLoadingSkeleton = () => {
  return (
    <ul className="space-y-3">
      {Array.from({ length: 20 }, (_, idx) => (
        <li key={idx} className="h-7 animate-pulse bg-gray-700 rounded-sm" />
      ))}
    </ul>
  );
};

export default ProductLoadingSkeleton;
