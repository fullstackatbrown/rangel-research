import React from 'react';
import TeamMember from '../components/TeamMember';
import Member from '../interfaces/interfaces';
import NavigationBarESP from '@/components/navigationBarESP';
import FooterESP from '@/components/footerESP';
import Link from 'next/link';

const team: Member[] = [
    {
        name: 'Serena Levin (ella)',
        photo: 'serena.jpeg',
        bio: 'Serena es estudiante de último año de Westport, CT, y estudia Educación y Asuntos Públicos e Internacionales en la Universidad de Brown. Ha trabajado como asistente de investigación con el Dr. Rangel desde el otoño de 2021, examinando cómo la participación de los padres se ve afectada por la clase social, la raza y el origen étnico. Debido a este trabajo, Serena ahora está trabajando en su tesis de honores con el Dr. Rangel, cuyo objetivo es comprender las intersecciones de raza y clase social en relación con la participación de la PTA. Fuera de la investigación, los intereses de Serena incluyen la enseñanza, la educación sanitaria, la reforma política, el correr, la lectura y su perro.', 
        esp: 1
    },
    {
        name: 'John Bellaire (él)',
        photo: 'john.jpeg',
        bio: 'John es un estudiante de tercer año de Winchester, MA, y estudia Educación y Asuntos Públicos e Internacionales en la Universidad de Brown. John ha trabajado como asistente de investigación con el Dr. Rangel desde la primavera de 2022 en proyectos que examinan las prácticas de crianza de manera interseccional. Los intereses de John incluyen tutoría para jóvenes, enseñanza de estudios sociales secundarios, defensa legislativa, mochilero, voleibol y el color morado.', 
        esp: 1
    }
]

const pi: Member[] = [{
  name: 'David Enrique Rangel, Ph.D',
  photo: 'david.png', 
  bio: 'Como sociólogo de la educación, estudia la relación entre educación y desigualdad social, con énfasis en la experiencia latina en Estados Unidos. En particular, su investigación examina las relaciones familia-escuela, centrándose en cómo la clase social, la raza, la etnia y el contexto social más amplio estructuran las relaciones dentro de las familias, entre familias y entre familias y escuelas. Su trabajo documenta las experiencias de los padres latinos en entornos escolares para comprender si los padres latinos transmiten las ventajas educativas a sus hijos, y cómo y hasta qué punto las transmiten. Su trabajo más reciente ha aparecido en varios medios, incluido el American Educational Research Journal, Socioological Perspectives, Journal of Racial and Ethnic Health Disparities y Social Science and Medicine – Population Health.', 
  esp: 1
}]

const pc: Member[] = [{
  name: 'Anna Ryu (ella)',
  photo: 'anna.jpeg',
  bio: 'Anna es estudiante de tercer año de Albany, NY, y estudia Educación y Química en la Universidad de Brown. Sus intereses en educación incluyen la enseñanza de STEM en el nivel de escuela secundaria de manera más equitativa y empática. Comenzó a trabajar con el Dr. Rangel en la primavera de 2023 y apoya el trabajo organizativo y logístico del equipo. Más allá de los intereses académicos, le gusta trabajar con estudiantes, pasar tiempo con la familia y tocar el oboe.',
  esp: 1
}]

const TeamBioESP: React.FC = () => {
    return (
      <div className="container mx-auto my-8">
        <NavigationBarESP/>
        <div className="mb-8" style={{ marginBottom: '48px' }}/>
        <h1 className="text-4xl text-medium-brown text-center font-semibold mb-8 text-brown5">Nuestro Equipo</h1>
        <div className="bg-white p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6 bg-white text-gray-purple">Investigador Principal</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {pi.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
          </div>
          <div className="mb-8" style={{ marginBottom: '48px' }}/>
          <hr className="border-t border-orange-700 mb-8" />
          <div className="mb-8" style={{ marginBottom: '48px' }}/>
          <div className="bg-white p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6 bg-white text-gray-purple">Asistentes de Investigación</h2>
          {team.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
          </div>
          <div className="mb-8" style={{ marginBottom: '48px' }}/>
          <hr className="border-t border-orange-700 mb-8" />
          <div className="mb-8" style={{ marginBottom: '48px' }}/>
        <div className="bg-white p-8 mb-8">
        <h2 className="text-3xl font-semibold mb-6 bg-white text-gray-purple">Asistente de Dirección</h2>
        {pc.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
        <div className="bg-white p-8 mb-8">
          <h1 className=" text-2xl text-gray-purple w-84 bg-transparent font-semibold">
            Contacte con nosotros </h1>
              <div className="mb-8" style={{ marginBottom: '10px' }}/>

              <p className=" text-gray-purple w-84 bg-transparent">Si tiene alguna pregunta o desea ponerse en contacto con un miembro del equipo de investigación, envíenos un correo electrónico a <Link href="mailto:familiesandschools@brown.edu" className="font-medium text-blue-600 hover:underline dark:text-blue-500 bg-transparent">
              familiesandschools@brown.edu
              </Link>.
              Para comunicarse con el investigador principal del estudio, David Rangel, envíe un correo electrónico a  <Link href="mailto:david_rangel@brown.edu" className="font-medium text-blue-600 hover:underline dark:text-blue-500 bg-transparent">
              david_rangel@brown.edu
              </Link>.</p>
              </div>
        <FooterESP/>
     </div>
    );
  };

  export default TeamBioESP;