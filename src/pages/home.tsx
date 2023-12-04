import ButtonLink from "@/components/buttonLink";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import QualtricsButton from "@/components/qualtricsButton";

export default function Home() {
  return (
    <div className="bg-white">
      <NavigationBar />

      <div className="mt-6 bg-transparent w-full h-80 flex items-center px-5">
        <div className="rounded bg-gradient-to-r from-brown1 to-brown2 w-full h-full items-center flex justify-center mr-3">
          <h1 className="text-brown5 text-6xl w-1/2 m-auto bg-transparent font-julius title font-bold text-center">
            Families and Schools Research Project
          </h1>
          <div className="rounded bg-brown3 w-1/3 h-4/5 grid items-center justify-center mx-7">
            <h1 className="text-4xl text-gray-purple w-84 bg-transparent -mb-20 font-bold pb-5">
              Qualtrics Interest Form
            </h1>
            <div className="bg-transparent flex justify-center -translate-y-8 transform scale-125">
              <QualtricsButton />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-gray mt-6 w-full h-72 flex items-center">
        <div className="rounded bg-transparent w-1/3 h-full items-center grid justify-center mr-3">
          <h1 className="text-3xl w-84 bg-transparent -mb-20 text-gray-purple font-bold">
            The Project
          </h1>
          <ButtonLink text="About Project" url="/about" />
          {/* <button className="outline outline-brown5 rounded text-white bg-transparent bg-slate-400 w-72 flex p-3 text-2xl -mt-20 justify-between">
            <h1 className="bg-transparent text-brown5">About Project</h1>
            <h1 className="bg-transparent text-brown5">→</h1>
          </button> */}
        </div>

        <div className="rounded bg-transparent w-2/3 h-full grid items-center justify-center">
          <h1 className="text-slate-800 text-xl w-100 bg-transparent">
            Welcome to the Families and Schools Project, where we delve into how
            parents and educators work to build relationships between and
            amongst each other. Our goal is to uncover how the bonds between
            parents and their children&apos;s schools shape the landscape of
            educational success.{" "}
          </h1>
        </div>
      </div>

      <div className="bg-light-gray w-full h-72 flex items-center justify-center">
        <div className="rounded bg-transparent outline outline-brown5 w-full p-5 mx-16 mb-16">
          <p className="text-slate-800 text-xl w-100 bg-transparent">
            At the heart of our research are the voices of parents and
            educators. Through insightful interviews with parents, we gain a
            deeper understanding of their journey through the educational
            system. Similarly, conversations with school faculty and
            administrators shed light on how educators view and interact with
            parental involvement.
          </p>
          <p className="text-slate-800 text-xl w-100 bg-transparent">
            In exploring these dynamics, ultimately, our project aims to
            identify effective strategies that enhance students&apos; learning
            experiences, understand what practices effectively support
            students&apos; experiences and performance at school, and develop
            innovative approaches to strengthen parent-school relationships,
            ultimately enriching the educational journey for all.
          </p>
        </div>
      </div>

      <div className="my-10 inline-block bg-transparent w-full h-full justify-center">
        <div className="m-auto bg-brown1 w-96 h-24 pt-7 flex justify-center rounded">
          <h1 className="text-3xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">
            Our Research Values
          </h1>
        </div>

        <div className="flex bg-transparent mt-10 h-96 w-full">
          <div className="mx-5 bg-brown1 w-full h-full inline-block justify-center rounded p-8">
            <div className="m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center">
              <h1 className="bg-transparent mt-3 font-bold text-3xl text-brown5">
                1.
              </h1>
            </div>

            <div className="my-5 m-auto bg-white bg-opacity-75 w-48 px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">
                Transparency
              </h1>
            </div>

            <h1 className="text-brown5 w-84 bg-transparent text-center">
              We value open and clear communication with the parents, educators,
              and schools we partner with. Participants will be in direct
              contact with research team members and choose how much information
              to share.
            </h1>
          </div>

          <div className="mx-5 bg-brown2 w-full h-full inline-block justify-center rounded p-8">
            <div className="m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center">
              <h1 className="bg-transparent mt-3 font-bold text-3xl text-brown5">
                2.
              </h1>
            </div>

            <div className="bg-opacity-75 my-5 m-auto bg-white w-auto px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple bg-transparent -mb-20 font-bold">
                Security & Privacy
              </h1>
            </div>

            <h1 className="text-brown5 w-84 bg-transparent text-center">
              We value protecting participant information and maintaining
              confidentiality. All personally identifiable information will be
              deleted and excluded from any data analysis or publication. Data
              is stored in a secure, cloud-based server that meets the security
              requirements of the Brown University Institutional Review Board.
            </h1>
          </div>

          <div className="mx-5 bg-brown3 w-full h-full inline-block justify-center rounded p-8">
            <div className="m-auto rounded-full h-16 w-16 bg-brown4 flex justify-center">
              <h1 className="bg-transparent mt-3 font-bold text-3xl text-brown5">
                3.
              </h1>
            </div>

            <div className="bg-opacity-75 my-5 m-auto bg-white w-auto px-10 outline outline-brown5 h-12 pt-2 flex justify-center rounded">
              <h1 className="text-xl text-gray-purple w-84 bg-transparent -mb-20 font-bold">
                Catalyzing Positive Change
              </h1>
            </div>

            <h1 className="text-brown5 w-84 bg-transparent text-center">
              We value our partnerships with participants as foundations for
              studying and building school communities that better serve
              students, families, and educators.
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
