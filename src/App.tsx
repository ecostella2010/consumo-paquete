import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'eace-product-card';
import './App.css';

export const product = {
  id: '2',
  title: 'Coffee Mug - Sin Imnagen',
  img : './coffee-mug.png'
}

function App() {
  return (
    <div className="App App-header">
      <ProductCard
          key = { product.id } 
          product = { product }
          initialValues = {{  
              count: 4,
              maxCount: 10
          }}
       >
          {
              ( { reset, count, increaseBy, isMaxCountReached, maxCount } ) => (
                      <>
                          <ProductImage />
                          <ProductTitle />
                          <ProductButtons />
                      </>
                    )
          }
      </ProductCard>
    </div>
  );
}

export default App;
