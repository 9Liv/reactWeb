import '../componentes/home.css'

function Home() {
  const noticias = [
    {
      id: 1,
      imagem: "https://blogposdigital.mackenzie.br/wp-content/uploads/2025/04/tecnologia-da-informacao.jpg",
      titulo: "Nova IA revoluciona o mercado",
      descricao: "Uma nova tecnologia promete mudar a forma como usamos inteligência artificial."
    },
    {
      id: 2,
      imagem: "https://idocode.com.br/wp-content/uploads/2020/11/Tecnologia-do-futuro.jpg",
      titulo: "React domina o mercado",
      descricao: "React continua sendo uma das bibliotecas mais usadas do mundo."
    },
    {
      id: 3,
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHutMr2Rvwlppc_4hvzSgZjvaGEyGfqfLxA&s",
      titulo: "Segurança digital em alta",
      descricao: "Ataques cibernéticos aumentam e exigem mais proteção."
    }
  ];


  return (
    <>
    <div className='container'>
      <div className='cards'>
        {noticias.map((noticia) => (
          <div className='card'>
            <h1>{noticia.id}</h1>
            <img src={noticia.imagem} />

            <h2>{noticia.titulo}</h2>
            <h4>{noticia.descricao}</h4>
          </div>



        ))}


      </div>
      </div>

    </>
  )
}

export default Home
