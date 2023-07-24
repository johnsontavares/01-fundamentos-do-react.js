import styles from './Post.module.css'
import  {Comment} from './Comment';
import {Avatar} from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';


export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        "Post muito bacana, hein?!"
    ])

    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true

    })

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
        
    } 
    
    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
        event.target.setCustomValidity('')

    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !==  commentToDelete
        })
        
        setComments(commentsWithoutDeletedOne);

    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
        console.log(event)
    }

    // console.log(publishedDataFormatted)
    const IsNewCommentEmpty = newCommentText.length == 0
    return(

        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time  
                    title={publishedDataFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                    {publishDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(((line, index) => {
                    if(line.type == "paragraph"){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type == 'link'){
                        return <p key={line.content} ><a href=''>{line.content}</a></p>
                    }
                }))}

            </div>

            <form onSubmit={handleCreateNewComment} action="" className={styles.commentForm}>
               <strong>Deixe seu feedback</strong> 

               <textarea 
                    name="comment"
                    placeholder='Deixe um comentário'
                    value = {newCommentText}
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}
               />

               <footer>
                    <button type="submit" disabled={IsNewCommentEmpty}>
                        Publicar
                    </button>
               </footer>

            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment, index) => {
                        return(
                        <Comment 
                            key={comment} 
                            content={comment} 
                            ondeleteComment={deleteComment} 
                        />)
                    })
                }
            </div>

        </article>
    )
}