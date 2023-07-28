import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'

import './global.css'

interface Post{

}


const posts : PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/johnsontavares.png",
      name: "Johnson Tavares",
      role: "CTO "
    },
    content: [
      {type:"paragraph", content: "fala galera"},
      {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no nlw Return."},
      {type:"link", content: "johnson.design/doctorcare"},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

function App() {

  return (
    <>
      <Header />

        
        <div className={styles.wrapper}>

          <Sidebar  />
          
          <main>

          {posts.map( (post) => {
            return (
              <Post 
                key={post.id}
                post={post}
              />)
          }
          )}
          </main>

        </div>

    </>
  )
}

export default App

