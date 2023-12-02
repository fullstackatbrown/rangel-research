import Navbar from '../components/navbar';
import QualtricsButton from '@/components/qualtricsButton';



export default function Home() {

  return (
    
    <div className="bg-white">
      <Navbar/>
      

      <div className='mt-6 bg-transparent w-full h-72 flex items-center px-5'>

        <div className='rounded bg-brown1 w-2/3 h-full items-center flex grid justify-center mr-3'>
          <h1 className="text-brown5 text-6xl w-auto m-auto bg-transparent font-julius title font-bold text-center">Estudio de Familias y Escuelas</h1>
        </div>
        <div className='rounded bg-brown2 w-1/3 h-full grid items-center justify-center'> 
          <h1 className="text-3xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Qualtrics Encuesta de Interés</h1>
          <div className="bg-transparent flex justify-center -translate-y-8">
            <QualtricsButton/>
          </div>
        </div>
        
      </div> 

      <div className='bg-light-gray mt-6 w-full h-72 flex items-center'>

        <div className='rounded bg-transparent w-1/3 h-full items-center grid justify-center mr-3'>
        <h1 className="text-3xl w-84 bg-transparent -mb-20 text-gray-purple font-bold">El Proyecto</h1>
          <button className="outline outline-brown5 rounded text-white bg-transparent bg-slate-400 w-72 flex p-3 text-2xl -mt-20 justify-between">
            <h1 className="bg-transparent text-brown5">Sobre el Proyecto</h1>
            <h1 className="bg-transparent text-brown5">→</h1>
          </button>
        </div>

        <div className='rounded bg-transparent w-2/3 h-full grid items-center justify-center'> 
        <h1 className="text-slate-800 text-xl w-100 bg-transparent">Bienvenido al Estudio de Familias y Escuelas, donde escarbamos en cómo los padres y educadores trabajan para cultivar relaciones entre ellos. Nuestra meta es descubrir cómo los vínculos entre los padres y las escuelas de sus hijos dan forma al panorama del éxito educativo.</h1>
        </div>
        
      </div> 


      <div className='bg-light-gray w-full h-72 flex items-center justify-center'>
        <div className="rounded bg-transparent outline outline-brown5 w-full p-5 mx-16 mb-16">
        <p className="text-slate-800 text-xl w-100 bg-transparent">En el fondo de nuestra investigación se encuentran las voces de padres y educadores. A través de entrevistas esclarecedoras con los padres, obtenemos una comprensión más profunda de su paso por el sistema educativo. De manera similar, las conversaciones con la facultad y los administradores de la escuela arrojan luz sobre cómo los educadores ven e interactúan con la participación de los padres.</p>
        <p className="text-slate-800 text-xl w-100 bg-transparent">Al explorar estas dinámicas, en definitiva, nuestro proyecto aspira a identificar estrategias efectivas que mejoren las experiencias de aprendizaje de los estudiantes, entender prácticas que apoyan efectivamente las experiencias y el desempeño de los estudiantes en la escuela, y desarrollar enfoques innovadores para fortalecer las relaciones entre padres y escuelas, enriqueciendo el paso educativo para todos.</p>
        </div>

      </div>

      <div className='my-10 inline-block bg-transparent w-full h-full justify-center'>

        <div className='m-auto bg-brown1 w-96 h-24 pt-7 flex justify-center rounded'>
          <h1 className="text-3xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Valores de Investigación</h1>
        </div>

        <div className='flex bg-transparent mt-10 h-96 w-full'>

        <div className='mx-5 bg-brown1 w-full h-full inline-block justify-center rounded p-8'> 

          <div className='m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center'>
            <h1 className='bg-transparent mt-3 font-bold text-3xl text-brown5'>1.</h1>
          </div>

          <div className='my-5 m-auto bg-white bg-opacity-75 w-48 px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded'>
            <h1 className="text-xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Transparencia</h1>
          </div>

          <h1 className="text-brown5 w-84 bg-transparent text-center">Valoramos la comunicación abierta y clara con los padres, educadores y escuelas con las que nos asociamos. Los participantes estarán en contacto directo con los miembros del equipo de investigación y elegirán cuánta información compartirán.</h1>

        </div>

        <div className='mx-5 bg-brown2 w-full h-full inline-block justify-center rounded p-8'> 

        <div className='m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center'>
          <h1 className='bg-transparent mt-3 font-bold text-3xl text-brown5'>2.</h1>
        </div>

        <div className='bg-opacity-75 my-5 m-auto bg-white w-auto px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded'>
          <h1 className="text-xl text-gray-purple bg-transparent -mb-20 font-bold">Seguridad y Privacidad</h1>
        </div>

        <h1 className="text-brown5 w-84 bg-transparent text-center">Valoramos proteger la información de los participantes y mantener la confidencialidad. Toda la información de identificación personal será eliminada y excluida de cualquier análisis o publicación de datos. Los datos se almacenan en un servidor seguro basado en la nube que cumple con los requisitos de seguridad de la Junta de Revisión Institucional de la Universidad de Brown.</h1>

        </div>

        <div className='mx-5 bg-brown3 w-full h-full inline-block justify-center rounded p-8'> 

        <div className='m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center'>
          <h1 className='bg-transparent mt-3 font-bold text-3xl text-brown5'>3.</h1>
        </div>

        <div className='bg-opacity-75 my-5 m-auto bg-white w-auto px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded'>
          <h1 className="text-xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">Catalizar el Cambio Positivo</h1>
        </div>

        <h1 className="text-brown5 w-84 bg-transparent text-center">Valoramos nuestras colaboraciones con los participantes como base para estudiar y cultivar comunidades escolares que sirvan mejor a los estudiantes, las familias y los educadores.</h1>

        </div>


        </div>

        
      </div> 
    </div>
  )
}
