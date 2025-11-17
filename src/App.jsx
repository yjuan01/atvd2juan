import { useState, useEffect } from "react";
import styles from "./App.module.css";

export default function App() {

  // Tema escuro/claro
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    // O id="inicio" foi removido daqui
    <div className={styles.wrapper}>

      {/* MUDANÇA: className agora é .topbar e o style foi limpo */}
      <nav 
        className={styles.topbar}
        style={{
          "--bg": theme === "light" ? "#ffffff" : "#1b1b1b",
          "--text": theme === "light" ? "#111" : "#f2f2f2",
          "--hover": theme === "light" ? "#e5e5e5" : "#333",
        }}
      >
        <a href="#inicio">⬆ Voltar ao Início</a> 
        <a href="#definicao"> Definição</a>
        <a href="#principios"> Princípios</a>
        <a href="#declaracao"> Declaração</a>
        <a href="#curiosidades"> Curiosidades</a>

        <button className={styles.themeBtn} onClick={toggleTheme}>
          Alternar Tema
        </button>
      </nav>

      <div className={styles.container}>
        
        {/* MUDANÇA: id="inicio" movido para o header */}
        <header className={styles.header} id="inicio">
          <h1>Direitos Humanos</h1>
          <p>Acesse as informações abaixo para uma visão completa.</p>
        </header>

        <main className={styles.interactiveGrid}>
          <a href="#definicao" className={styles.menuCard}>
            <h2> Definição</h2>
            <p>O que são e sua importância fundamental.</p>
          </a>

          <a href="#principios" className={styles.menuCard}>
            <h2> Princípios</h2>
            <p>Dignidade, Liberdade, Igualdade e as gerações dos direitos.</p>
          </a>

          <a href="#declaracao" className={styles.menuCard}>
            <h2> Declaração</h2>
            <p>A história da DUDH e seus 30 artigos.</p>
          </a>

          <a href="#curiosidades" className={styles.menuCard}>
            <h2> Curiosidades & Contato</h2>
            <p>Fatos marcantes e formas de contato.</p>
          </a>

        </main>

        <div className={styles.contentSections}>

          <section className={styles.contentSection} id="definicao">
            <h2> O que são Direitos Humanos?</h2>
            <p>
              Os Direitos Humanos são um conjunto de direitos essenciais garantidos a todos
              os seres humanos, independentemente de raça, gênero, religião, nacionalidade
              ou condição social.
            </p>
            <p>
              Eles são universais, inalienáveis e interdependentes — significando que 
              pertencem a todos e não podem ser tirados.
            </p>
          </section>

          <section className={styles.contentSection} id="principios">
            <h2> Princípios e Gerações</h2>
            <ul>
              <li><strong>1ª Geração:</strong> Direitos Civis e Políticos (liberdade, voto).</li>
              <li><strong>2ª Geração:</strong> Direitos Sociais (saúde, educação, trabalho).</li>
             <li><strong>3ª Geração:</strong> Direitos Coletivos (paz, meio ambiente).</li>
            </ul>
          </section>

          <section className={styles.contentSection} id="declaracao">
            <h2> Declaração Universal dos Direitos Humanos</h2>
            <p>
              Criada em 1948 pela ONU após a Segunda Guerra Mundial, a DUDH define 30 
              artigos que garantem liberdade, igualdade e dignidade para todos.
            </p>
          </section>

          <section className={styles.contentSection} id="curiosidades">
            <h2> Curiosidades e Contato</h2>

            <h3>Curiosidades</h3>
            <ul>
              <li>A DUDH é o documento mais traduzido do planeta.</li>
              <li>Influenciou movimentos de paz no mundo inteiro.</li>
          _ </ul>

            <h3>Contato</h3>
            <p>
              Para mais informações:  
              <a href="mailto:contato@direitoshumanos.org">
                contato@direitoshumanos.org
              </a>
            </p>
          </section>

        </div>

        <footer className={styles.footer}>
          <p>Atividade de Curso – Página construída com React + Vite.</p>
        </footer>

      </div>
    </div>
  );
}