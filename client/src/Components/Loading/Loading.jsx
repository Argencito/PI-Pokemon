import styles from "./Loading.module.css"



export default function Loading (){
    
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}>
                <p><strong>LOADING....</strong></p>
            </div>
        </div>
    )


}

