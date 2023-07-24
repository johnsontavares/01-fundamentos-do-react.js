import styles from './Comment.module.css';
import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import { Avatar } from './Avatar';


export function Comment({content,ondeleteComment}){

    function handleDeleteComment(){
        console.log(content)
        ondeleteComment(content)
    }



    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/johnsontavares.png" alt=""/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>

                            <strong>Diego Fernandes</strong>

                            <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>


                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>


            </div>

        </div>
    )
}