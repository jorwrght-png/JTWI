import { ArrowRight, ShoppingCart, Filter, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ShopAdminPanel } from '../components/ShopAdminPanel';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const generateProducts = () => Array.from({ length: 20 }, (_, i) => ({
  id: i,
  name: `Luxury Item ${i + 1}`,
  price: `$${(Math.random() * 2000 + 100).toFixed(0)}`,
  category: ['Furniture', 'Lighting', 'Decor', 'Textiles'][Math.floor(Math.random() * 4)],
  image: `https://images.unsplash.com/photo-${[
    '1598300042247-d088f8ab3a91', '1507473885765-e6ed057f782c', '1533090481720-856c6e3c1fdc', '1583847268964-b28e5f7a0752',
    '1524758631624-e2822e304c36', '1578683010236-d716f9a3f461', '1505693416388-ac5ce068fe85', '1616486029423-aa0220a2b02ea'
  ][i % 8]}?auto=format&fit=crop&q=80&w=600`, // Cycles through a list of images
}));

export default function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prods: any[] = [];
      snapshot.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() });
      });
      if (prods.length > 0) {
        setProducts(prods);
      } else {
        // Fallback to placeholder products if db is empty for demo purposes
        setProducts(generateProducts());
      }
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'products');
      setProducts(generateProducts());
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-[#fafbfa] pb-32 relative">
      <section className="pt-32 pb-24 text-center container mx-auto px-4 border-b border-muted bg-secondary">
        <h1 className="text-7xl md:text-9xl font-cursive text-primary font-normal mb-8 lowercase tracking-tight">curated shop</h1>
        <p className="text-primary/70 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Explore our exclusive collection of over 2,500 luxury interior décor and furniture products, carefully selected to elevate your modern living spaces.
        </p>
      </section>

      <div className="container mx-auto px-4 max-w-7xl pt-16 flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-72 flex-shrink-0">
           <div className="sticky top-28 bg-white border border-muted/50 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 border-b border-muted pb-6">
                 <Filter className="w-6 h-6 text-accent" />
                 <h3 className="font-serif text-2xl text-primary font-medium">Filters</h3>
              </div>
              <div className="mb-10">
                <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-muted-foreground">Categories</h4>
                <ul className="space-y-4">
                  {['All Categories', 'Furniture', 'Lighting', 'Decor', 'Textiles', 'Art'].map(cat => (
                    <li key={cat}>
                      <label className="flex items-center gap-4 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 accent-accent" defaultChecked={cat === 'All Categories'} />
                        <span className="text-base font-medium text-primary/80 group-hover:text-accent transition-colors">{cat}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full py-4 bg-primary text-white uppercase tracking-widest text-xs font-bold hover:bg-accent transition-colors shadow-sm">
                Apply Filters
              </button>
           </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest">Showing 1-{Math.min(20, products.length)} of {products.length} results</p>
            <select className="border border-muted py-3 px-5 shadow-sm focus:outline-accent text-sm font-bold uppercase tracking-widest bg-white text-primary">
              <option>Default Sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Latest Arrivals</option>
            </select>
          </div>

          {isLoading ? (
            <div className="py-32 flex flex-col items-center justify-center text-primary/50">
               <Loader2 className="w-8 h-8 animate-spin text-accent mb-4" />
               <p className="font-bold text-sm tracking-widest uppercase">Loading Products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
               {products.map(product => (
                <div key={product.id} className="group relative bg-white border border-muted/50 hover:border-accent hover:shadow-lg transition-all p-5 rounded-sm">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-secondary">
                     <img 
                       src={product.image} 
                       alt={`${product.name} - Luxury Shop Product HD`} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                     <button className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-primary py-4 font-bold uppercase tracking-widest text-xs translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3 hover:bg-accent hover:text-white shadow-md">
                        <ShoppingCart className="w-5 h-5" /> Add to Cart
                     </button>
                  </div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">{product.category}</p>
                      <h4 className="font-serif text-xl leading-tight text-primary font-medium cursor-pointer hover:text-accent transition-colors">{product.name}</h4>
                    </div>
                     <span className="font-bold text-primary shrink-0">
                       {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}
                     </span>
                  </div>
                </div>
             ))}
          </div>
          )}

          {/* Pagination */}
          <div className="mt-24 flex justify-center gap-3">
            {[1, 2, 3, '...', 127].map((page, i) => (
              <button 
                key={i} 
                className={`w-12 h-12 flex items-center justify-center border font-bold text-sm ${page === 1 ? 'bg-primary border-primary text-white shadow-sm' : 'bg-white border-muted/80 text-primary hover:border-accent hover:text-accent transition-colors'}`}
              >
                <span>{page}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <ShopAdminPanel />
    </div>
  )
}
