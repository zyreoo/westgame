import styles from './page.module.css';

const products = [
  {
    id: 1,
    name: 'Standard Edition',
    price: '19.75',
    description: 'Begin your frontier adventure with the base game. Includes all core features and the main campaign.',
    features: ['Main Campaign', 'Base Building', 'Core Survival Features', 'Basic Character Customization']
  },
  {
    id: 2,
    name: 'Deluxe Edition',
    price: '29.99',
    description: 'Enhanced edition with exclusive content and early access to upcoming features.',
    features: ['Everything in Standard Edition', 'Exclusive Mount', 'Deluxe Character Skins', 'Digital Soundtrack']
  },
  {
    id: 3,
    name: 'Pioneer Edition',
    price: '49.99',
    description: 'The ultimate package for true frontier enthusiasts. Includes all current and future content.',
    features: ['Everything in Deluxe Edition', 'Season Pass', 'Exclusive Homestead Designs', 'Digital Art Book']
  }
];

const merchandise = [
  {
    id: 4,
    name: 'Western Interface T-Shirt',
    price: '24.99',
    description: 'Premium cotton t-shirt featuring the game logo and artwork.'
  },
  {
    id: 5,
    name: 'Collector\'s Poster Set',
    price: '29.99',
    description: 'Set of 3 high-quality art prints showcasing the frontier landscapes.'
  },
  {
    id: 6,
    name: 'Sheriff\'s Badge Replica',
    price: '19.99',
    description: 'Metal replica of the in-game sheriff\'s badge.'
  },
  {
    id: 7,
    name: 'Frontier Soundtrack Vinyl',
    price: '34.99',
    description: 'Original game soundtrack on premium vinyl.'
  }
];

export default function Shop() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>The Trading Post</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.gameEditions}>
          <h2>Game Editions</h2>
          <div className={styles.editionsGrid}>
            {products.map(product => (
              <div key={product.id} className={styles.editionCard}>
                <div className={styles.whitePlaceholder}></div>
                <div className={styles.editionInfo}>
                  <h3>{product.name}</h3>
                  <p className={styles.price}>£{product.price}</p>
                  <p className={styles.description}>{product.description}</p>
                  <ul className={styles.features}>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button className={styles.buyButton}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.merchandise}>
          <h2>Merchandise</h2>
          <div className={styles.merchGrid}>
            {merchandise.map(item => (
              <div key={item.id} className={styles.merchCard}>
                <div className={styles.whitePlaceholder}></div>
                <div className={styles.merchInfo}>
                  <h3>{item.name}</h3>
                  <p className={styles.price}>£{item.price}</p>
                  <p className={styles.description}>{item.description}</p>
                  <button className={styles.buyButton}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 