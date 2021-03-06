import Head from "next/head"
import Image from "next/image"
import Banner from "../components/banner"
import Card from "../components/card"
import styles from "../styles/Home.module.css"
import { fetchCoffeeStores } from "../lib/coffee-stores"

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores()
  return {
    props: {
      coffeeStores,
    },
  }
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("clicked")
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="" />
        </div>
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((store) => (
                <Card
                  key={store.id}
                  href={`/coffee-store/${store.fsq_id}`}
                  imgUrl={
                    store.imgUrl ||
                    "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  }
                  name={store.name}
                  className={styles.card}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

// Authorization: fsq3QI6XSEtYm8Fa4r8XJj6YGez4SuACwNzRiXUQ8CWMrmI=
