import React from 'react';
import styles from './Project.module.css';
import 'animate.css';

function Project(props) {
        return (
            <div className="col-md-4 justify-content-center">
            <div className="card">
                <div className={styles.topCard}>
                <h2 className={styles.title}>Título do card</h2>
                <span className={styles.secondText}>Exemplo de texto secundário</span>
                </div>
                <div className={styles.mediaCard}></div>
                <div className={styles.bottomCard}>
                <p className={styles.bottomText}>Aqui é um texto exemplo de resumo da página ou do documento que o card trata.</p>
                <div className={styles.actionsCard}>
                    <button className={styles.actions}>Curtir</button>
                    <button className={styles.actions}>Compartilhar</button>
                </div>
                </div>
            </div>
            </div>
        )
}

export default Project;