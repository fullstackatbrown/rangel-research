import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import ParentsSurveyButtonESP from "@/components/parentsSurveyBtnESP";
import PrincipalsAndTeachersSurveyButtonESP from "@/components/principalsTeachersSurveyBtnESP";

export default function Home() {
  return (
    <div className="bg-gray">
      <NavigationBar />

      <div className="flex-col bg-white w-11/12 h-full m-auto mt-7 flex block justify-center items-center py-10 px-36 inline-block">

      <h1 className="text-4xl text-brown5 w-84 bg-transparent font-semibold">
          Sobre Proyecto
      </h1>

      <p className="bg-white mt-5">
      ¿Cómo contribuyen las relaciones entre familias y escuelas al desarrollo de comunidades educativas efectivas? 
      ¿Qué prácticas se pueden implementar para fortalecer la colaboración y el entendimiento entre padres y educadores, mejorando el entorno educativo general?
      </p>

      <hr className="h-0.5 w-60 my-6 bg-white border-0 dark:bg-brown5"></hr>

      <p className="bg-white mt-3">
      El Estudio de Familias y Escuelas busca abordar estas preguntas a través de las perspectivas de padres, 
      maestros y directores de San Antonio, Texas. La integración de estas diversas perspectivas nos permite 
      explorar de manera más holística cómo los padres y educadores navegan en la comunidad escolar y, en el 
      fondo, ilumina cómo se pueden fortalecer estas relaciones 
      </p>

      <p className="bg-white mt-3">
      Se invita a <b className="bg-white">los padres</b> a compartir sus experiencias con las 
      escuelas de sus hijos y reflexiones sobre su experiencia con estas comunidades escolares.
      </p>

      <p className="bg-white mt-3">
      Se invita a <b className="bg-white">los maestros</b> a compartir experiencias 
      que hayan tenido con los padres de sus alumnos y reflexiones sobre cómo involucrar a las 
      familias dentro de la estructura de la escuela.
      </p>

      <p className="bg-white mt-3">
       Se invita a <b className="bg-white">los directores</b> a compartir experiencias 
      que hayan tenido en la construcción y liderazgo de una comunidad escolar que incluya a los 
      padres y maestros de los estudiantes y reflexiones sobre el papel de las relaciones 
      familia-escuela en apoyar a los estudiantes.
      </p>

      <p className="bg-white mt-3">
      Este estudio está aprobado por el Programa de Protección de la Investigación Humana de 
      Brown (STUDY262) y financiado por una subvención de La Fundación Spencer.
      </p>
        
    </div>


      <div className="my-10 inline-block bg-transparent w-full h-full justify-center">

        <div className="flex bg-transparent h-96 w-full">
          <div className="mx-2 bg-brown1 w-full h-full inline-block rounded">

          <img
          src="/photos/about1.jpeg"
          className="h-full object-cover rounded"
          alt="..." />

          </div>

          <div className="mx-2 bg-brown2 w-full h-full inline-block justify-center rounded">

          <img
          src="/photos/about2.png"
          className="h-full object-cover rounded"
          alt="..." />


          </div>

          <div className="mx-2 bg-brown3 w-full h-full inline-block justify-center rounded">

          <img
          src="/photos/about3.jpeg"
          className="h-full object-cover rounded"
          alt="..." />

          </div>
        </div>


        <div className="flex-col bg-white w-11/12 h-full m-auto mt-7 flex block justify-center items-center py-10 inline-block">

            <h1 className="text-4xl text-brown5 w-84 bg-transparent font-semibold">
              ¿Interesada en participar?
            </h1> 
            

            <p className="bg-white mt-5 mx-36">
            ¡Queremos saber por ustedes, padres y educadores de la escuela primaria de San Antonio! 
            Complete la encuesta para tener la oportunidad de compartir sus experiencias. Un miembro 
            del equipo de investigación se comunicará con los seleccionados para una entrevista para 
            programar una entrevista de 60 minutos.
            </p>

            <div className="bg-transparent flex w-full justify-center">

            <div className="mx-2 mt-20 bg-transparent flex justify-center -translate-y-8 scale-100">
              <ParentsSurveyButtonESP />
            </div>

            <div className="mx-2 mt-20 bg-transparent flex justify-center -translate-y-8 scale-100">
              <PrincipalsAndTeachersSurveyButtonESP />
            </div>
            </div>


        </div>
      </div>

      <Footer />
    </div>
  );
}
