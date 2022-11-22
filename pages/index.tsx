import MaterialTable from "material-table";

import styles from '../styles/Home.module.css';

interface selectedPairs {
  id: number,
  person: string,
  gettingGifts: string,
  limit: string;
}

interface pairTypes {
  pairs: selectedPairs[]
}

const columns = [
  { title: 'Name', field: 'person' },
  { title: 'Getting Gift For', field: 'gettingGift' },
  {title: 'Limit', field: 'limit'}
];



const Home = ({ pairs }: pairTypes) => {

  const sortedPairs = pairs.sort((a,b) => a.person < b.person ? -1 : 0)
  
  return (
    <main className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.header}>Family Christmas Gift Exchange</h1>

        <MaterialTable
          columns={columns}
          data={sortedPairs}
          title=''
          options={{ 
            pageSize: 14,
            pageSizeOptions: [14],
            showTitle: false,
            draggable: false,
          }}
        />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      pairs: [
      {
        id: 1,
        person: 'Chris',
        gettingGift: 'Jordan',
        limit: '$75'
      },
            {
        id: 2,
        person: 'Morgan',
        gettingGift: 'Lauren',
        limit: '$75'
      },
      {
        id: 3,
        person: 'Lauren',
        gettingGift: 'Joe',
        limit: '$75'
      },
      {
        id: 4,
        person: 'Dj',
        gettingGift: 'Chris',
        limit: '$75'
      },
      {
        id: 5,
        person: 'Krista',
        gettingGift: 'Tamera',
        limit: '$75'
      },
      {
        id: 6,
        person: 'Vimal',
        gettingGift: 'Taylor',
        limit: '$75'
      },
      {
        id: 7,
        person: 'Cameron',
        gettingGift: 'Dj',
        limit: '$75'
      },
      {
        id: 8,
        person: 'Kieran',
        gettingGift: 'Morgan',
        limit: '$75'
      },
      {
        id: 9,
        person: 'Tamera',
        gettingGift: 'Jerry',
        limit: '$75'
      },
      {
        id: 10,
        person: 'Bob',
        gettingGift: 'Cameron',
        limit: '$75'
      },
      {
        id: 11,
        person: 'Jordan',
        gettingGift: 'Vimal',
        limit: '$75'
      },
      {
        id: 12,
        person: 'Jerry',
        gettingGift: 'Krista',
        limit: '$75'
      },
      {
        id: 13,
        person: 'Taylor',
        gettingGift: 'Kieran',
        limit: '$75'
      },
      {
        id: 14,
        person: 'Joe',
        gettingGift: 'Bob',
        limit: '$75'
      }
    ]
    }
  }
}

export default Home;